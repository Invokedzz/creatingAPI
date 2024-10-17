import { NextFunction } from "express";

import { homeMethod, aboutMethod, registerMethodRender, loginMethodRender } from "../controllers/getMethods";

describe ("homeMethod GET test", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    let Next: NextFunction;

    beforeEach((): void => {

        Request = {};

        Response = {

            json: jest.fn(),

        };

        Next = jest.fn();

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values for homeMethod", async (): Promise <void> => {

    });

});

describe ("aboutMethod GET test", (): void => {

    it ("Should return the proper values for aboutMethod", async (): Promise <void> => {

    });

});

describe ("registerPage GET test", (): void => {

    it ("Should return registerPage proper values", async (): Promise <void> => {

    });

});

describe ("loginPage GET test", (): void => {

    it ("Should return loginPage proper values", async (): Promise <void> => {

    });

});