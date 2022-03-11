
import { CI_ENV, TESTING_ENV } from '@config'
import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';


const skip = () => TESTING_ENV || CI_ENV;

@Middleware({ type: 'before' })
@Service()
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: (err?: any) => any) {
        morgan('dev', { skip })(request, response, next);
    }

}