"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsController = void 0;
const mathjs = require("mathjs");
class OperationsController {
    test(req, res) {
        res.json({
            message: 'CalcuCo Backend System Here'
        });
    }
    evaluate(req, res) {
        let exp = req.body.expression;
        const node = mathjs.parse(exp);
        const code = node.compile();
        const result = code.evaluate();
        res.send({
            result: result
        });
    }
}
exports.OperationsController = OperationsController;
//# sourceMappingURL=OperationsController.js.map