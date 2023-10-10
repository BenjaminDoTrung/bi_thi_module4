package com.example.quan_ly_hoc_vien.service;

import com.example.quan_ly_hoc_vien.model.Student;

import java.util.List;

public interface IStudentService extends IGenerrateService<Student> {
    public List<Student> searchByName(String name);
}
