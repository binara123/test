package com.project.backend.service;

import com.project.backend.model.LoginUser;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public interface LoginUserService {

    public List<LoginUser> getLoginUser();
}
