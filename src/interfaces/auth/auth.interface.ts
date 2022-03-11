export interface ISignInInput {
    email: string;
    password: string;
}

export interface IComparePasswordInput {
    password: string;
    userPassword: string;
}

export interface ITokenToBlacklistInput {
email: string;
token: string;
}

export interface ITokenPayload {
data: TokenPayloadData;
iat: number;
exp: number;
}

type TokenPayloadData = {
userId: number;
email: string;
};

export function ITokenToBlacklistInput(_input: any, _ITokenToBlacklistInput: any) {
    throw new Error("Function not implemented.");
}
