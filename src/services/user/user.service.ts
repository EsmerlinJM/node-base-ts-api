import { User } from "@entities/user.entity";
import { AuthInterface, UserInterface } from "@interfaces";
import { JWTSerice } from "@services/jwt/jwt.service";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { Service } from "typedi";
import { getRepository } from "typeorm";


@Service()
export class UserService {
    constructor(private readonly jwtService: JWTSerice) {}

    private readonly userRepository = getRepository<User>(User);

    comparePassword(input: AuthInterface.IComparePasswordInput): boolean{
        const { password, userPassword } = input;
        return compareSync(password, userPassword);
    }

    generateToken(user: User) {
        return this.jwtService.createJWT(user);
    }

    hashPassword(password: string): string {
        return hashSync(password, genSaltSync());
    }

    hashUserPassword(user: User): void {
        user.password = this.hashPassword(user.password);
    }

    listUser() {
        return this.userRepository.find();
    }

    showUser(id: number) {
        return this.userRepository.findOne(id);
    }

    createUser(user: User) {
        this.hashUserPassword(user);
        return this.userRepository.insert(user);
    }

    editUser(input: UserInterface.IEditUserInput) {
        const { id, user } = input;
        return this.userRepository.update(id, user);
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id);
    }
}