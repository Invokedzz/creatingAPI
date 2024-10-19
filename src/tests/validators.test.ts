import { validateFanficLength, validateLoginLength, validateRegisterLength } from "../middlewares/validLength";

// Handlers for Login/Register inputs

import { lengthUsernameError, lengthEmailError, lengthPasswordError } from "../errors/lengthErrorUser";

// Handlers for fanficValidation

import { textLengthError, titleLengthError, genreLengthError } from "../errors/fanficInputErrors";

import { Request, Response } from "express";

describe ("Test for validateFanficLength", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    beforeEach((): void => {

        Request = {};

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values of validateFanficLength", async (): Promise <void> => {

    });

    it ("Should return the errors for validateFanficLength (title input)", async (): Promise <void> => {

        await titleLengthError(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(400);

        expect(Response.json).toHaveBeenCalledWith({

            message: "Insert a title that is at least 10 characters long!",

            status: "Bad request",

        });

    });

    it ("Should return the errors for validateFanficLength (genre input)", async (): Promise <void> => {

        await genreLengthError(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(400);

        expect(Response.json).toHaveBeenCalledWith({

            message: "Insert a genre that is at least 3 characters long!",

            status: "Bad request",

        });

    });

    it ("Should return the errors for validateFanficLength (text input)", async (): Promise <void> => {

        await textLengthError(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(400);

        expect(Response.json).toHaveBeenCalledWith({

            message: "Insert a text that is at least 100 characters long!",

            status: "Bad request",

        });

    });

});

describe ("Test for validateLoginLength", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    beforeEach((): void => {

        Request = {};

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values of validateLoginLength", async (): Promise <void> => {

    });

    it ("Should return the errors for validateLoginLength (email)", async (): Promise <void> => {
        
    });

    it ("Should return the errors for validateLoginLength (password)", async (): Promise <void> => {
        
    });

});

describe ("Test for validateRegisterLength", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    beforeEach((): void => {
        
        Request = {};

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values of validateRegisterLength", async (): Promise <void> => {

    });

    it ("Should return the errors for validateRegisterLength (username)", async (): Promise <void> => {

    });

    it ("Should return the errors for validateRegisterLength (email)", async (): Promise <void> => {

    });

    it ("Should return the errors for validateRegisterLength (password)", async (): Promise <void> => {

    });

});