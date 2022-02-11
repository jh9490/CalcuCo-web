package com.calcuco.app.services;

import com.calcuco.app.interfaces.IOperationService;
import com.calcuco.app.models.ExpressionBody;
import com.calcuco.app.models.ExpressionResponse;



import net.objecthunter.exp4j.ExpressionBuilder;
import net.objecthunter.exp4j.operator.Operator;
import net.objecthunter.exp4j.Expression;


public class OperationService implements IOperationService {

    @Override
    public  ExpressionResponse getResult(ExpressionBody expressionBody) {
        
        Operator factorial = new Operator("!", 1, true, Operator.PRECEDENCE_POWER + 1) {

            @Override
            public double apply(double... args) {
                final int arg = (int) args[0];
                if ((double) arg != args[0]) {
                    throw new IllegalArgumentException("Operand for factorial has to be an integer");
                }
                if (arg < 0) {
                    throw new IllegalArgumentException("The operand of the factorial can not be less than zero");
                }
                double result = 1;
                for (int i = 1; i <= arg; i++) {
                    result *= i;
                }
                return result;
            }
        };

            Expression expression = new ExpressionBuilder(expressionBody.getExpressString())
            .operator(factorial)
            .build();
            ExpressionResponse response = new ExpressionResponse(expression.evaluate());
             return response;
        
     
    }
    
}
