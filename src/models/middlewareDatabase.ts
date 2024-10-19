import { Request, Response, NextFunction, request } from "express";

import { registerUser, loginUser, createFanfic, findUsers, findFanfics, deleteFanfics, editFanfic } from "./databaseFunctions";

export const registerPostUser = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await registerUser(request, response);

    next();

};

export const loginPostUser = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
    
    await loginUser(request, response);

    next();

};

export const fanficCreationMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await createFanfic(request, response);

    next();

};

export const findFanficsList = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
    
    await findFanfics(request, response);

    next();

};

export const findUsersList = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
  
    await findUsers(request, response);

    next();

};

export const fanficEditMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {

    await editFanfic(request, response);

    next();

};

export const fanficDeleteMethod = async (request: Request, response: Response, next: NextFunction): Promise <void> => {
  
    await deleteFanfics(request, response);

    next();

};