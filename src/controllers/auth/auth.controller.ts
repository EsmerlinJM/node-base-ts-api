import {
    JsonController,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    Authorized,
    BadRequestError
} from 'routing-controllers';
import { Service } from 'typedi'

@JsonController('/auth')
@Service()
export class AuthController {
    constructor(){}
}