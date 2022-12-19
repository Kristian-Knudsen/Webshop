import { PrismaClient, Prisma } from '@prisma/client';
import { CheckPassword, generateToken, HashPassword } from '../utils';
import { LoginUserInput, RegisterUserInput } from './types';

const prisma = new PrismaClient();

export const RegisterUser = (data: RegisterUserInput): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        let hashedPassword = "";
        await HashPassword(data.password)
        .then(d => hashedPassword = d)
        .catch(e => reject(e));

        let token = generateToken();

        try {
            const result = await prisma.user.create({
                data: {
                    email: data.email,
                    username: data.username,
                    password: hashedPassword,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    token: token
                }
            });
            resolve(`Account created with email: ${result.email}`);
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    // Unique Constraint broken (either username or email)
                    if (e?.meta?.target === "User_email_key") {
                        reject("Email already exists! Please try another");
                    } else if (e?.meta?.target === "User_username_key") {
                        reject("Username already exists! Please try another");
                    }
                }
            }
            reject(e);
        }
    });
}

export const LoginUser = (data: LoginUserInput): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await prisma.user.findUnique({
                where: {
                    username: data.username
                }
            });
            if(result === null) {
                // User dont exist
                reject("InvalidUser");
            } else {
                CheckPassword(data.password, result.password)
                .then(d => {
                    if(d === "true") {
                        resolve(result.token);
                    } else {
                        reject("InvalidUser");
                    }
                })
                .catch(e => console.log(`error: ${e}`));
            }
        } catch (e) {
            reject(e);
        }
    })
}