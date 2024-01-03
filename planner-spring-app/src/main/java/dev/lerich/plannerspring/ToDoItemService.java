package dev.lerich.plannerspring;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ToDoItemService {

    @Autowired
    private ToDoItemRepository toDoItemRepository;

    public Optional<ToDoItem> getToDoItem(ObjectId toDoItemId){
        return toDoItemRepository.findToDoItemById(toDoItemId);
    }

    /* save date as String or its own data structure (?) */
    public ToDoItem createToDoItem(String title, String description, LocalDateTime date, boolean completed){

        ToDoItem toDoItem = toDoItemRepository.insert(new ToDoItem(title, description, date, completed));

        return new ToDoItem();
    }

}
