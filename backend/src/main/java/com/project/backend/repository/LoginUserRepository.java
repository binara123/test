package com.project.backend.repository;

import com.project.backend.model.LoginUser;
import com.project.backend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginUserRepository extends CrudRepository<LoginUser, Integer> {
}
