package dev.lerich.plannerspring;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "planners")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoItem {

    @Id
    private ObjectId id;
    private String title;
    private String description;
    private LocalDateTime date; /* keep as String or a dedicated data structure (?) */
    private boolean completed;

    public ToDoItem(String title, String description, LocalDateTime date, boolean completed){
        this.title = title;
        this.description = description;
        this.date = date;
        this.completed = completed;
    }
}
