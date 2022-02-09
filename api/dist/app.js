"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const OperationsController_1 = require("./controllers/OperationsController");
const swaggerUi = require("swagger-ui-express");
const apidoc_1 = require("./docs/apidoc");
const bodyParser = require("body-parser");
const cors = require("cors");
class App {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(cors());
        this.mountRoutes();
    }
    mountRoutes() {
        const defaultRouter = express.Router();
        const operationsController = new OperationsController_1.OperationsController();
        defaultRouter.get('/', operationsController.test);
        defaultRouter.post('/calc', operationsController.evaluate);
        this.express.use('/', defaultRouter);
        this.express.use('/documentation', swaggerUi.serve, swaggerUi.setup(apidoc_1.apiDocumentation));
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map