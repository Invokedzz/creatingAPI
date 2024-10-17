import { Router } from "express";

import { sendHomeMethod, sendAboutMethod } from "../controllers/sendMethods";

const router = Router();

router.get("/", sendHomeMethod);

router.get("/about", sendAboutMethod);

export { router };