import { validateFanficLength, validateLoginLength, validateRegisterLength } from "../middlewares/validLength";

// Handlers for Login/Register inputs

import { lengthUsernameError, lengthEmailError, lengthPasswordError } from "../errors/lengthErrorUser";

// Handlers for fanficValidation

import { textLengthError, titleLengthError, genreLengthError } from "../errors/fanficInputErrors";

import { fanficValidation } from "../types/fanficType";

import { loginType } from "../types/loginType";

import { registerType } from "../types/registerType";

import { Request, Response } from "express";


describe ("Test for validateFanficLength", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    let fanficValidation: Partial <fanficValidation>;

    beforeEach((): void => {

        Request = {};

        fanficValidation = {

            title: "title",

            genre: "genre",

            text: "text",

        };

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values of validateFanficLength", async (): Promise <void> => {

        await validateFanficLength(fanficValidation as fanficValidation, Request as Request, Response as Response);

        expect(fanficValidation).toEqual({

            title: "title",

            genre: "genre",

            text: "text",

        });

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

    let loginType: Partial <loginType>;

    beforeEach((): void => {

        Request = {};

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

        loginType = {

            email: "email@gmail.com",

            password: "randomPassword",

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values of validateLoginLength", async (): Promise <void> => {

        await validateLoginLength(loginType as loginType, Request as Request, Response as Response);

        expect(loginType).toEqual({

            email: "email@gmail.com",

            password: "randomPassword",

        });

    });

    it ("Should return the errors for validateLoginLength (email)", async (): Promise <void> => {
        
        await lengthEmailError(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(400);

        expect(Response.json).toHaveBeenCalledWith({

            message: "Insert a valid email",

            status: "Bad request",

        });

    });

    it ("Should return the errors for validateLoginLength (password)", async (): Promise <void> => {
        
        await lengthPasswordError(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(400);

        expect(Response.json).toHaveBeenCalledWith({

            message: "Insert a password that is at least 6 characters long!",

            status: "Bad request",

        });

    });

});

describe ("Test for validateRegisterLength", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    let registerType: Partial <registerType>;

    beforeEach((): void => {
        
        Request = {};

        Response = {

            status: jest.fn().mockReturnThis(),

            json: jest.fn(),

        };

        registerType = {

            username: "username",

            email: "email@gmail.com",

            password: "password",

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values of validateRegisterLength", async (): Promise <void> => {
        
        await validateRegisterLength(registerType as registerType, Request as Request, Response as Response);

        expect(registerType).toEqual({

            username: "username",

            email: "email@gmail.com",

            password: "password",

        });

    });

    it ("Should return the errors for validateRegisterLength (username)", async (): Promise <void> => {

        await lengthUsernameError(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(400);

        expect(Response.json).toHaveBeenCalledWith({

            message: "Insert a username that is at least 6 characters long!",

            status: "Bad request",

        });

    });

});