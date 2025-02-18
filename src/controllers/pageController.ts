import { Request, Response } from "express";
import { Pet } from "../Models/Pet";
import { createMenuObject } from "../Helpers/createMenuObject";

export const home = async (req: Request, res: Response) => {
  try {
    console.log("Accessing home page");

    const pets = await Pet.getAll();
    console.log("Retrieved pets:", pets);

    res.render("pages/page", {
      menu: {
        all: true,
      },
      banner: {
        title: "Todos os animais",
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
    console.error("Error rendering home page:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType("dog");

  res.render("pages/page", {
    menu: createMenuObject("dogs"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list,
  });
};

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType("cat");

  res.render("pages/page", {
    menu: createMenuObject("cats"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },

    list,
  });
};

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType("fish");

  res.render("pages/page", {
    menu: createMenuObject("fishes"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list,
  });
};
