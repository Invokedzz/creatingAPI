import { Router } from "express";

import { sendHomeMethod, sendAboutMethod, sendRegisterRender, sendLoginRender } from "../controllers/sendMethods";

const router = Router();

router.get("/", sendHomeMethod);

router.get("/about", sendAboutMethod);

router.get('/register', sendRegisterRender);

router.get('/login', sendLoginRender);

export { router };