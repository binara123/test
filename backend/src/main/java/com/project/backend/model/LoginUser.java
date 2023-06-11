package com.project.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "loginuser_table")
public class LoginUser {
    @Id // unique+not null
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String pass;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPass() { return pass; }

    public void setPass(String pass) { this.pass = pass; }
}
