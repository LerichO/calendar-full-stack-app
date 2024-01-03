package dev.lerich.plannerspring;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ToDoItemRepository extends MongoRepository<ToDoItem, ObjectId>{

    Optional<ToDoItem> findToDoItemById(ObjectId id);
}
