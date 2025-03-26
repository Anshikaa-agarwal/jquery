/*
Create a Simple RESTful Service to manage a To-Do List. The user should be
able to perform all the CRUD operations.

    a) For adding a new task the input should be like: {“task”: “Buy
       medicines”}.The task description will be a non-empty string. Each task
       will have a unique identifier.

    b) Similarly the user must be able to delete/update the task.
*/

const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

let tasks = [];

//generate unique identifier
function generateID() {
    return tasks.length + 1;
}

//home page
app.get('/', (req, res) => {
    res.send("Home page. Navigate to add tasks, view, update and delete them.");
})

//add a task (post)
app.post('/tasks', (req, res) => {
    const { task } = req.body; 

    if(!task) {
        return res.status(400).json({error: "Enter description of task"});
    }

    const item = {id: generateID(), task};
    tasks.push(item);
    res.status(200).json(tasks)
})

//view all tasks (get)
app.get('/tasks', (req, res) => {
    res.json(tasks);
})

//update a task (put)
app.put('/tasks', (req, res) => {
    const {id} = req.params;
    const {task} = req.body;

    const item = tasks.find(t => t.id == id);
    if(!item) {
        return res.status(404).json({error: "item not found"});
    }

    item.task = task;
    res.json(task);
})

//delete (delete)
app.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const item = tasks.findIndex(p => tasks.id == id);
    if(!item) {
        return res.status(404).json({error: "item not found."});
    }

    tasks.splice(item, 1);
    res.json(tasks);
})

//hosting
app.listen(port, () => {
    console.log("Server listening to port for requests...");
})
