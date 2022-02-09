import * as express from 'express';
import {OperationsController} from './controllers/OperationsController';
import * as swaggerUi from 'swagger-ui-express';
import {apiDocumentation}  from './docs/apidoc';
import * as  bodyParser  from 'body-parser';
import * as  cors  from 'cors';
class App {
  public express

  constructor () {
    this.express = express(); 
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json());
    this.express.use(cors());  
    this.mountRoutes(); 
  }

  private mountRoutes (): void {
    const defaultRouter = express.Router(); 
    const operationsController = new OperationsController();
    defaultRouter.get('/', operationsController.test);
    defaultRouter.post('/calc', operationsController.evaluate);
    this.express.use('/', defaultRouter);
    this.express.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
  }
}

export default new App().express