package com.calcuco.app.services;

import com.calcuco.app.interfaces.IOperationService;
import com.calcuco.app.models.ExpressionBody;
import com.calcuco.app.models.ExpressionResponse;



public class OperationService implements IOperationService {

    @Override
    public  ExpressionResponse getResult(ExpressionBody expressionBody) {
        ExpressionResponse result = new ExpressionResponse(expressionBody.getExpressString());
     
         return result;
    }
    
}
