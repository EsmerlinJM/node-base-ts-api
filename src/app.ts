import 'reflect-metadata';
import express from 'express';
import {
    useContainer,
    useExpressServer,
    getMetadataArgsStorage
} from 'routing-controllers';
import { Container } from 'typedi';
import { AuthorizationService } from '@services/auth/auth.service';
import { middlewares } from '@middlewares';
import { controllers } from '@controllers';
import { swaggerSpec } from './swagger';
import { DOCS_ENABLED } from '@config';

useContainer(Container);

const app: express.Express = express();

const routingControllerOptions: any = {
    routePrfix: '/api/v1',
    defaultErrorHandler: false,
    cors: true,
    authorizationChecker: AuthorizationService.getInstance().authorizationChecker,
    controllers,
    middlewares,
    interceptors: []
}

useExpressServer(app, routingControllerOptions);

if (DOCS_ENABLED === 'true') {
    swaggerSpec(getMetadataArgsStorage, routingControllerOptions, app);
}

export default app;