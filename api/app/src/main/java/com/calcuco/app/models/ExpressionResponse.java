package com.calcuco.app.models;

public class ExpressionResponse {
    
   private Double result; 

   public  ExpressionResponse(Double result){
      this.result = result;
   }

   public Double getResult() {
       return result;
   }

   public void setResult(Double result) {
       this.result = result;
   }
}
