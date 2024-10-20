import { Router } from "express";

import { sendHomeMethod, sendAboutMethod, sendRegisterRender, sendLoginRender } from "../controllers/sendMethods";

import { findFanficsList, fanficCreationMethod, fanficEditMethod, fanficDeleteMethod, findUsersList, loginPostUser, registerPostUser, editUsersMethod, deleteUsersMethod } from "src/models/middlewareDatabase";


const router = Router();

router.get("/", sendHomeMethod);

router.get("/about", sendAboutMethod);

router.get('/register', sendRegisterRender);

router.get('/login', sendLoginRender);

// Nice routes, testing them alongside Postman

router.post('/registerUser', registerPostUser);

router.post('/loginUser', loginPostUser);

router.post('/createFanfic', fanficCreationMethod);

router.get('/findFanfics', findFanficsList);

router.get('/findUsers', findUsersList);

router.put('/editFanfic/:id', fanficEditMethod);

router.put('/editUser/:id', editUsersMethod);

router.delete('/deleteUser/:id', deleteUsersMethod);

router.delete('/deleteFanfic/:id', fanficDeleteMethod);

export { router };