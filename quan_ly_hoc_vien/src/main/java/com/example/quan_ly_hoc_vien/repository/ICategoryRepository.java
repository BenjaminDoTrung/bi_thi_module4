package com.example.quan_ly_hoc_vien.repository;

import com.example.quan_ly_hoc_vien.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
