/* tslint:disable */
export class CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export class LoginUserInput {
    username?: string;
    email?: string;
    password: string;
}

export class UpdateUserInput {
    username?: string;
    email?: string;
    password?: string;
}

export class LoginResult {
    user: User;
    token: string;
}

export abstract class IMutation {
    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;

    abstract updateUser(username: string, fieldsToUpdate: UpdateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract login(user: LoginUserInput): LoginResult | Promise<LoginResult>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract user(username?: string, email?: string): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    username: string;
    email: string;
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
}

export type Date = any;
