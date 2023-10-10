package com.example.quan_ly_hoc_vien.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
@Data
@Setter
@Getter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate date;
    private String address;
    private String phone;
    private String email;
    @ManyToOne
    @JoinColumn(name = "a_class_id")
    private Category category;

}
