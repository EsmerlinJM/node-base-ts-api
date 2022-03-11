import { AuthInterface } from "@interfaces";
import { redisClient } from "@server";
import { Service } from "typedi";


@Service()
export class RedisService {
    addTokenToBlackList(
        input: AuthInterface.ITokenToBlacklistInput
    ): Promise<number> {
        return new Promise((res, rej)=> {
            const { email, token } = input;
            return redisClient.saad(email, token, (err, result) =>  {
                if (err) {
                    rej(err);
                }
                res(result);
            })
        });
    }

    isMemberOfSet(input: AuthInterface.ITokenToBlacklistInput): Promise<number> {
        return new Promise((res, rej) => {
          const { email, token } = input;
          redisClient.sismember(email, token, (err, result) => {
            if (err) {
              rej(err);
            }
            res(result);
          });
        });
    }
}

