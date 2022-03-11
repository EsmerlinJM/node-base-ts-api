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

@JsonController('/users')
@Service()
export class UserController {
    constructor(){}
}