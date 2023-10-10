package com.example.quan_ly_hoc_vien.service;

import java.util.List;


public interface IGenerrateService<E> {
    public List<E> findAll();
    public E findById(Long id);
    public void deleteById(Long id);
    public void save(E e);

}
