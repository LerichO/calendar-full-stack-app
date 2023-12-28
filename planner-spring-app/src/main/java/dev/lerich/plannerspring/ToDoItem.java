package dev.lerich.plannerspring;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "planners")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoItem {

    @Id
    private ObjectId id;
    private String title;
    private String description;
    private String date;
    private boolean completed;
}
