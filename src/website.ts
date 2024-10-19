import express, { Request, Response } from "express";

import { router } from "./routes/routes";

import { validateFanficLength, validateLoginLength, validateRegisterLength } from "./middlewares/validLength";

import { fanficValidation } from "./types/fanficType";

import { loginType } from "./types/loginType";

import { registerType } from "./types/registerType";

const application = express();

const port = process.env.PORT || 8444;

export class startHost {

    private changeSettings (): void {

        application.use(express.json());

        application.use(express.urlencoded({extended: true}));

    };

    private startRouter (): void {

        application.use('/', router);

    };

    public listenPort (): void {

        this.changeSettings();

        this.startRouter();

        application.listen(port, (): void => {

            console.log(`http://localhost:${port}`);

        });

    };

};