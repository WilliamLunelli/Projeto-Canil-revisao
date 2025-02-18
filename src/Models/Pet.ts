import { Prisma, PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient();

const PetSchema = z.object({
  type: z.enum(["dog", "cat", "fish"]),
  image: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  color: z.string().min(2).max(50),
  sex: z.enum(["male", "female"]),
  age: z.number().min(0).max(30),
  weight: z.number().positive(),
  vaccinated: z.boolean(),
  description: z.string().min(10).max(500),
  status: z.enum(["available", "pending", "adopted"]).default("available"),
});

type Pet = z.infer<typeof PetSchema>;

const searchNameSchema = z
  .string()
  .min(1, "Nome deve ter pelo menos 1 caractere");

export const Pet = {
  getAll: async (): Promise<Pet[]> => {
    try {
      const pets = await prisma.pet.findMany();
      return PetSchema.array().parse(pets);
    } catch (error) {
      console.error("Error retrieving pets:", error);
      return [];
    }
  },

  getFromType: async (
    type: z.infer<typeof PetSchema.shape.type>
  ): Promise<Pet[]> => {
    try {
      const validatedType = PetSchema.shape.type.parse(type);
      const pets = await prisma.pet.findMany({
        where: {
          type: validatedType,
        },
      });
      return PetSchema.array().parse(pets);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Erro na validação do tipo:", {
          code: "INVALID_TYPE",
          details: error.errors,
        });
      } else {
        console.log("Database error:", error);
      }
      return [];
    }
  },

  getFromName: async (name: string): Promise<Pet[]> => {
    try {
      const validatedName = searchNameSchema.parse(name);
      const pets = await prisma.pet.findMany({
        where: {
          name: {
            contains: validatedName,
            mode: "insensitive",
          },
        },
      });

      return PetSchema.array().parse(pets);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Erro na validação do nome:", {
          code: "INVALID_NAME",
          details: error.errors,
        });
      }
      return [];
    }
  },

  getByExactName: async (name: string): Promise<Pet | null> => {
    try {
      const validatedName = searchNameSchema.parse(name);

      const pet = await prisma.pet.findFirst({
        where: {
          name: {
            equals: validatedName,
            mode: "insensitive",
          },
        },
      });

      if (!pet) {
        return null;
      }

      // Parse the resolved data, not the promise
      return PetSchema.parse(pet);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Erro na validação do nome exato:", {
          code: "INVALID_EXACT_NAME",
          details: error.errors,
        });
      } else {
        console.error("Erro na busca do pet:", error);
      }
      return null;
    }
  },
};
