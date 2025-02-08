import { Router } from "express";
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController'

const router = Router();

router.get('/', pageController.home);
router.get('/', pageController.dogs);
router.get('/', pageController.cats);
router.get('/', pageController.fishes);
router.get('/search', searchController.search)
export default router;