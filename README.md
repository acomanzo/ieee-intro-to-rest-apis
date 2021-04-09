# ieee-intro-to-rest-apis
Code for a workshop I gave for the UAlbany IEEE Student Chapter on REST APIs

## Steps
11. make an array for holding todo list items
12. make new get that returns all items in the array
13. demonstrate the new GET
14. make a POST so that we can start adding things to the array
15. add the middleware app.use(express.json()); so that the server can parse json
16. open up Postman
    - new users will have to click 'create new' or make a new workspace or something
    - make a GET request to localhost:3000/todo to show that it's the same as the web browser
    - make a POST request, click on 'Body', click 'Raw' and make sure it's set to 'JSON', then type something like {"id": "1", "todo": "make cookies"}
    - show it in action
    - THEN do a GET to show that it worked
17. we might want to update a todo item, so make a PATCH
    - this will show concept of url parameters and error codes
18. if we're done with a todo item we'll want to delete it 
    - make a DELETE
    - demo the delete
19. make router
    - touch todoRoutes.js
    - add express
    - make router object
    - make functions for get, post, patch, delete
    - move function logic from index to router
    - make sure to keep routes like '/todo/:id'
    - make sure to copy over todoItems array
    - make sure to say module.exports = router;
    - in index.js:
        - make sure to say const todoRoutes = require('./todoRoutes');
        - make sure to say app.use('/', todoRoutes);
20. make controller
    - touch todoController.js
    - make index, create, update, delete
    - make sure to copy over todoItems array
    - make sure to do module.exports
    - make sure to update functions in routes
21. fix redundancy in routes
    - i.e. move /todo/ to index.js
