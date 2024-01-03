package dev.lerich.plannerspring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{username}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable String username){
        return new ResponseEntity<Optional<User>>(userService.getUser(username), HttpStatus.OK);
    }

    @PostMapping("/createUser")
    public ResponseEntity<String> createUser(String username, String password){

        //service method is to be completed later
        return new ResponseEntity<String>("", HttpStatus.OK);
    }

//    @GetMapping("/{username}/update/planner")
}
