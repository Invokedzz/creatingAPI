import { Request, Response } from "express";

import { homeMethod, aboutMethod, registerMethodRender, loginMethodRender } from "../controllers/getMethods";

import { handlersError404 } from "../errors/error404";

describe ("homeMethod GET test", (): void => {

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

    it ("Should return the proper values for homeMethod", async (): Promise <void> => {

        await homeMethod(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(200);

    });

    it ("Should return the error for homeMethod", (): void => {

        handlersError404(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(404);

    });

});

describe ("aboutMethod GET test", (): void => {

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

    it ("Should return the proper values for aboutMethod", async (): Promise <void> => {

        await aboutMethod(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(200);

    });

    it ("Should return the error for aboutMethod", (): void => {

        handlersError404(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(404);

    });

});

describe ("registerPage GET test", (): void => {

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

    it ("Should return registerPage proper values", async (): Promise <void> => {

        await registerMethodRender(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(202);

    });

    it ("Should return the error for registerPage", (): void => {

        handlersError404(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(404);

    });

});

describe ("loginPage GET test", (): void => {

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

    it ("Should return loginPage proper values", async (): Promise <void> => {

        await loginMethodRender(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(202);

    });

    it ("Should return the error for loginPage", (): void => {

        handlersError404(Request as Request, Response as Response);

        expect(Response.status).toHaveBeenCalledWith(404);

    });

});