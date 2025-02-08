import { Router } from "express";
import * as pageController from '../Controllers/pageController';
import * as searchController from '../Controllers/searchController';
import * as petPageController from '../Controllers/petPageController';

const animalRouter = Router();

animalRouter.get('/', pageController.home);
animalRouter.get('/dogs', pageController.dogs);
animalRouter.get('/cats', pageController.cats);
animalRouter.get('/fishes', pageController.fishes);
animalRouter.get('/search', searchController.search)
animalRouter.get('/pet/:name', petPageController.showPetPage);

export default animalRouter;