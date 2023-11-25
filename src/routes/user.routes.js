import { Router } from "express";
import { home, products, profile, updateProfile } from "../controller/user.controller.js";
import { upload } from "../middlewares/middlewares.js";

export const router = Router();

router.get('/', home)

router.get('/products', products)


router.get('/profile', profile)

router.put('/profile', upload, updateProfile)

// router.get('/product/:id')

// router.post('/profile/:id')