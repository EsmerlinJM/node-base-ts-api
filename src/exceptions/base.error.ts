import { HttpStatusCode } from "@utils/httpStatusCode";


export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;
    public readonly description: string;

    constructor(name: string, httpCode: HttpStatusCode, description: string) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);

        this.httpCode = httpCode;
        this.name = name;
        this.description = description;
    }
}