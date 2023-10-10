package com.example.quan_ly_hoc_vien.controller;

import com.example.quan_ly_hoc_vien.model.Student;
import com.example.quan_ly_hoc_vien.service.ICategoryService;
import com.example.quan_ly_hoc_vien.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/student")
public class Studentcontroller {
    @Autowired
    private IStudentService iStudentService;
    @Autowired
    private ICategoryService iClassService;
    @GetMapping
    public ResponseEntity<List<Student>> findAll(){
        return new ResponseEntity<>(iStudentService.findAll(), HttpStatus.OK);
    }
    @GetMapping("delete/{id_student}")
    public ResponseEntity<?> deleteById(@PathVariable("id_student") Long id_student){
        iStudentService.deleteById(id_student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/update/{id_student}")
    public ResponseEntity<Student> update(@PathVariable("id_student") Long id_student){
        return new ResponseEntity<>(iStudentService.findById(id_student), HttpStatus.OK);
    }
    @PostMapping("/update/{id_category}")
    public ResponseEntity<?> update(@RequestBody Student student,
                                    @PathVariable("id_category") Long id_category){
        student.setCategory(iClassService.findById(id_category));
        iStudentService.save(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/create/{id_category}")
    public ResponseEntity<?>create(@RequestBody Student student,
                                   @PathVariable("id_category") Long id_category){
        student.setCategory(iClassService.findById(id_category));
        iStudentService.save(student);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<List<Student>> searchByName(@PathVariable("name") String name){
        return new ResponseEntity<>(iStudentService.searchByName(name), HttpStatus.OK);
    }
}
