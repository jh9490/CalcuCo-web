package com.calcuco.app.models;

public class ExpressionResponse {
    
   private String result; 

   public  ExpressionResponse(String result){
      this.result = result;
   }

   public String getResult() {
       return result;
   }

   public void setResult(String result) {
       this.result = result;
   }
}
