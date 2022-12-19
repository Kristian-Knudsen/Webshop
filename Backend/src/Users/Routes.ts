import { Router, Request, Response } from "express";
import { ErrorMessage, SuccessMessage, generateToken, validateToken } from "../utils";
import { LoginUser, RegisterUser } from "./Controller";
import { LoginUserInput, RegisterUserInput } from "./types";

// /users
const r: Router = Router();

r.post('/register', async (req: Request, res: Response) => {
    if (!req.body) {
        return ErrorMessage(res, 400, "Missing body! Please supply data in JSON format");
    } else if (!req.body.email) {
        return ErrorMessage(res, 400, "Missing input: Email! Please supply this in the body" )
    } else if (!req.body.username) {
        return ErrorMessage(res, 400, "Missing input: Username! Please supply this in the body" )
    } else if (!req.body.password) {
        return ErrorMessage(res, 400, "Missing input: Password! Please supply this in the body" )
    } else if (!req.body.first_name) {
        return ErrorMessage(res, 400, "Missing input: first_name! Please supply this in the body" )
    } else if (!req.body.last_name) {
        return ErrorMessage(res, 400, "Missing input: last_name! Please supply this in the body" )
    }

    const registerData : RegisterUserInput = {
        "email": req.body.email,
        "username": req.body.username,
        "password": req.body.password,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };

    await RegisterUser(registerData)
    .then(d =>  SuccessMessage(res, 200, d))
    .catch(e => ErrorMessage(res, 400, e));
});

r.post('/login', async(req: Request, res: Response) => {
    if (!req.body) {
        return ErrorMessage(res, 400, "Missing body! Please supply data in JSON format");
    } else if (!req.body.username) {
        return ErrorMessage(res, 400, "Missing input: Username! Please supply this in the body")
    } else if (!req.body.password) {
        return ErrorMessage(res, 400, "Missing input: Password! Please supply this in the body")
    }

    const loginData : LoginUserInput = {
        "username": req.body.username,
        "password": req.body.password
    };

    await LoginUser(loginData)
    .then(d => SuccessMessage(res, 200, d))
    .catch(e => {
        if(e === "InvalidUser") {
            ErrorMessage(res, 403, "Username or password is invalid! Please try again");
        } else {
            ErrorMessage(res, 400, e)}
        }
    );
});

r.get('/token', (req: Request, res: Response) => {
    return SuccessMessage(res, 200, generateToken());
});

r.post('/token', async (req: Request, res: Response) => {
    return SuccessMessage(res, 200, await validateToken("4c70847c635cd025240c3106b1f1258cbf7e47da4caf44a47ddcf0c1554663b9"))
});


module.exports = r;