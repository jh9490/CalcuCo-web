package com.calcuco.app.controllers;

import com.calcuco.app.models.ExpressionBody;
import com.calcuco.app.models.ExpressionResponse;
import com.calcuco.app.services.OperationService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class OperationController {
    private  OperationService service ; 
   
    @ResponseBody
    @PostMapping(path= "/calc")
     public ExpressionResponse calc(@RequestBody ExpressionBody expressionBody) {
          this.service = new OperationService();
          return this.service.getResult(expressionBody);
    }
    

}
