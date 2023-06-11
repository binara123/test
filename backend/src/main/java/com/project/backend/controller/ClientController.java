package com.project.backend.controller;

import com.project.backend.model.LoginUser;
import com.project.backend.model.User;
import com.project.backend.service.LoginUserService;
import com.project.backend.service.UserService;
import com.project.backend.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ClientController {

    @Autowired
    private UserService userService;
    private LoginUserService loginUserService;


    @PostMapping("/add")
    public String adduser(@RequestBody User user){
        System.out.println("hhh");
        userService.addUser(user);
        return "User Added Successfully...";
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        System.out.println("Users..");
        return userService.getUser();
    }

    @GetMapping("/loginusers")
    public List<LoginUser> getLoginUsers(){
        System.out.println("LoginUsers..");
        return loginUserService.getLoginUser();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUserByid(id);
    }

    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user){
        userService.updateUser(id, user);
        return "User Updated Successfully...";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") int id){
        userService.deleteUser(id);
        return "User Deleted Successfully...";
    }



}
