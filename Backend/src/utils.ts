import { NextFunction, Request, Response } from "express";
import { hash, compare } from "bcrypt";
import { randomBytes } from "crypto";
import { PrismaClient } from '@prisma/client';

const SALT_ROUNDS = 10;

// Response Functions
export function ErrorMessage(res: Response, code: number, message: any) {
    return res.status(code).send({ "error": true, message });
}

export function SuccessMessage(res: Response, code: number, message: any) {
    return res.status(code).send({ "error": false, message});
}


// Hashing Functions
export function HashPassword(raw: string): Promise<string> {
    return new Promise((resolve, reject) => {
        hash(raw, SALT_ROUNDS, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        })

    })
}

export function CheckPassword(raw: string, hashed: string): Promise<string> {
    return new Promise((resolve, reject) => {
        compare(raw, hashed, (err, result) => {
            if (err) reject(err);
            resolve(String(result));
        })
    })
}

// Token functions
export function generateToken(): string {
    return randomBytes(32).toString('hex');
}

export function validateToken(token: string): Promise<Boolean> {
    const prisma = new PrismaClient();

    return new Promise(async (resolve, reject) => {
        try {
            const result = await prisma.user.findFirst({
                where: {
                    token: token
                }
            });
            if(result === null) {
                resolve(false);
            } else resolve(true);
        } catch (e) {
            reject(false);
        }
    })
}

export async function ValidateTokenMiddleWare(req: Request, res: Response, next: NextFunction) {
    if(!req.headers.authorization) {
        return ErrorMessage(res, 400, "Authorization header missing!")
    };

    await validateToken(req.headers.authorization)
    .then(d => {
        if(d === true) {
            next();
        } else ErrorMessage(res, 403, "Invalid token supplied! Please refresh your token!");
    })
    .catch(e => ErrorMessage(res, 400, e));
    
}