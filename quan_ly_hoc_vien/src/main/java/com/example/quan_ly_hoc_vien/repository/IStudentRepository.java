package com.example.quan_ly_hoc_vien.repository;

import com.example.quan_ly_hoc_vien.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IStudentRepository extends JpaRepository<Student, Long> {
    @Query(value = "select * from student where name like %?%", nativeQuery = true)
    List<Student> searchByName(String name);
}
