import 'reflect-metadata';
import { PORT, TYPEORM_PORT, REDIS_PORT, TESTING_ENV, CI_ENV, TYPEORM_TYPE } from '@config';
import connection from '@database/connection';
import app from '@app'
import { createRedisClient } from '@clients/reddis/redis.client';

const handleConnection = async () => {
    if (!TESTING_ENV && !CI_ENV) {
        app.listen(PORT, () => {
            return console.log(
                `Server is listening on ${PORT}
                ${TYPEORM_TYPE} database is listening on port ${TYPEORM_PORT}
                Redis database is listening on port ${REDIS_PORT}
            `);
        })
    }
}

// Start redis server
export const redisClient = createRedisClient();

// Import email client

connection.create(handleConnection);