import { ErrorMiddleware } from "./error.middleware";
import { HelmetMiddleware } from "./helmet.middleware";
import { LoggingMiddleware } from "./logging.middleware";
import { RateMiddleware } from "./rate.middleware";


export const middlewares = [
    LoggingMiddleware,
    RateMiddleware,
    HelmetMiddleware,
    ErrorMiddleware
];