import { registerUser, loginUser, createFanfic, findUsers, findFanfics, deleteFanfics, editFanfic, deleteUser, editUser } from "../models/databaseFunctions";

import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Functions (delete) test:

describe ("Test for deleteUser", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    beforeEach((): void => {

        Request = {

            params: { id: "1" },

        };

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values for deleteUser", async (): Promise <void> => {

        const usersId = '1';

        prisma.users.delete = jest.fn().mockResolvedValue(usersId);

        await deleteUser(Request as Request, Response as Response);
        
    });

    it ("Should return the proper errors for deleteUser", async (): Promise <void> => {



    });

});

describe ("Test fort deleteFanfics", (): void => {

    it ("Should return the proper values for deleteFanfics", async (): Promise <void> => {

    });

    it ("Should return the proper errors for deleteFanfics", async (): Promise <void> => {

    });

});