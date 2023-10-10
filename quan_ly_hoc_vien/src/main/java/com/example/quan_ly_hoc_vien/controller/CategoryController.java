package com.example.quan_ly_hoc_vien.controller;

import com.example.quan_ly_hoc_vien.model.Category;
import com.example.quan_ly_hoc_vien.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    private ICategoryService iCategoryService;
    @GetMapping
    public ResponseEntity<List<Category>> findAll(){
        return new ResponseEntity<>(iCategoryService.findAll(), HttpStatus.OK);
    }
}
