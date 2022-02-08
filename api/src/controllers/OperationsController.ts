import * as mathjs  from 'mathjs';
export class OperationsController {

    public test(req, res) {
        res.json({
            message: 'CalcuCo Backend System Here'
        })
    }

    public evaluate(req, res){
        console.log(req.body);
      let exp = req.body.expression ; 
      const node = mathjs.parse(exp);
        const code = node.compile();
        const result = code.evaluate();
       res.send({
        result: result
    });
    }

    
}