package dev.lerich.plannerspring;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//if possible, maybe refactor the back-end / db to include planner items directly under the user
@RestController
@RequestMapping("/api/todo")
public class ToDoItemController {

    @Autowired
    private ToDoItemService toDoItemService;

    @GetMapping("/{toDoItemId}")
    public ResponseEntity<Optional<ToDoItem>> getToDoItem(ObjectId id){
        return new ResponseEntity<Optional<ToDoItem>>(toDoItemService.getToDoItem(id), HttpStatus.OK);
    }

    @PostMapping("/createToDo")
    public ResponseEntity<String> createToDoItem(){

        //service method is to be completed later
        return new ResponseEntity<String>("", HttpStatus.OK);
    }


}
