import { Request, Response } from "express";
import { Pet } from "../Models/Pet";
import { createMenuObject } from "../Helpers/createMenuObject";

export const search = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    if (!query) {
      res.redirect("/");
      return;
    }

    const pets = await Pet.getFromName(query);

    res.render("pages/page", {
      menu: {
        all: true,
      },
      banner: {
        title: "Resultados da pesquisa",
        background: "allanimals.jpg",
      },
      list: pets.map((pet) => ({
        ...pet,
        status: {
          available: pet.status === "available",
          pending: pet.status === "pending",
          adopted: pet.status === "adopted",
        },
      })),
    });
  } catch (error) {
    console.error("erro na pesquisa", error);
    res.redirect("/");
  }
};
