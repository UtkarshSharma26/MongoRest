package com.mongobootcamp.mongorest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloMongo {
    @RequestMapping(method =  RequestMethod.GET, path = "/hello")
    public String hello(){
        return "Hello Mongo!!!";
    }
}
