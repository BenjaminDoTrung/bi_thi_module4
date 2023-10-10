package com.example.quan_ly_hoc_vien.service.impl;


import com.example.quan_ly_hoc_vien.model.Category;
import com.example.quan_ly_hoc_vien.repository.ICategoryRepository;
import com.example.quan_ly_hoc_vien.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public List<Category> findAll() {
        return iCategoryRepository.findAll();
    }

    @Override
    public Category findById(Long id) {
        return iCategoryRepository.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        iCategoryRepository.deleteById(id);
    }

    @Override
    public void save(Category category) {
        iCategoryRepository.save(category);
    }

}
