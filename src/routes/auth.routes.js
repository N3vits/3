import { Router } from "express";
import { login, loginPage, register, registerPage } from "../controller/auth.controller.js";

export const router = Router();

router.get('/login', loginPage)


router.post('/login', login)


router.post('/register', register)

router.get('/register', registerPage)