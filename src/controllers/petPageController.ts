import { Request, Response } from "express";
import { Pet } from "../Models/Pet";
import { z } from "zod";

export const showPetPage = async (req: Request, res: Response) => {
  try {
    const petName = req.params.name;

    const pet = await Pet.getByExactName(petName);

    if (!pet) {
      console.log(`Pet não encontrado: ${petName}`);
      res.redirect("/404");
      return;
    }

    const renderData = {
      menu: { all: true },
      banner: {
        title: pet.name,
        background: pet.image,
      },
      pet: {
        ...pet,
        status:
          pet.status === "available"
            ? { available: true, pending: false, adopted: false }
            : pet.status === "pending"
            ? { available: false, pending: true, adopted: false }
            : { available: false, pending: false, adopted: true },
      },
    };

    res.render("pages/petPage", renderData);
  } catch (error) {
    console.error("Erro ao processar página do pet:", error);
    res.redirect("/");
  }
};
