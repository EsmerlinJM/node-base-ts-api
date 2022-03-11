import { REDIS_HOST, REDIS_PASSWORD } from '@config';
import { createClient, RedisClient } from 'redis';


export const createRedisClient = (): RedisClient => {
    const redisClient = createClient({
        host: REDIS_HOST as string,
        password: REDIS_PASSWORD as string,
    });
    redisClient.on('error', error => {
        console.log(`Redis error: ${error} \n
        Please check your Redis instance.`);
    });

    return redisClient;
}