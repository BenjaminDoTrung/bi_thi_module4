package com.example.quan_ly_hoc_vien.service.impl;

import com.example.quan_ly_hoc_vien.model.Student;
import com.example.quan_ly_hoc_vien.repository.IStudentRepository;
import com.example.quan_ly_hoc_vien.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private IStudentRepository iStudentRepository;

    @Override
    public List<Student> findAll() {
        return iStudentRepository.findAll();
    }

    @Override
    public Student findById(Long id) {
        return iStudentRepository.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        iStudentRepository.deleteById(id);
    }

    @Override
    public void save(Student student) {
        iStudentRepository.save(student);
    }
    public List<Student> searchByName(String name){
        return iStudentRepository.searchByName(name);
    }
}
