import { Router } from "express";
import animalRouter from "./animals";

const router = Router();

router.use(animalRouter)
export default router;