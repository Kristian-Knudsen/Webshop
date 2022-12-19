export type RegisterUserInput = {
    email: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string
}

export type LoginUserInput = {
    username: string,
    password: string
}