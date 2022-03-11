import { ErrorsMessages } from "@utils/errorMessages";
import { HttpStatusCode } from "@utils/httpStatusCode";
import { BaseError } from "./base.error";


export class RedisError extends BaseError {
   constructor(description: string) {
       super(
         ErrorsMessages.INTERNAL_SERVER_ERROR,
         HttpStatusCode.INTERNAL_SERVER,
         description
       );
   }
}