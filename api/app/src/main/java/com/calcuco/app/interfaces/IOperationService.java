package com.calcuco.app.interfaces;

import com.calcuco.app.models.ExpressionBody;
import com.calcuco.app.models.ExpressionResponse;

public interface IOperationService {
  
   public  ExpressionResponse getResult(ExpressionBody expressionBody);   
}
