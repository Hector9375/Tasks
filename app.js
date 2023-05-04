const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
// middleware
app.use(express.json());

app.use('/api/v1/tasks', tasks);

// router
app.get('/hello', (req, res)=>{
    res.send('Task Manager App');
});


// app.get('/api/v1/tasks')     // - get all the tasks
// app.post('/api/v1/tsaks')    // - create a new task
// app.get('/api/v1/tsaks/:id')    // - get single task
// app.patch('/api/v1/tsaks/:id')  // - update task
// app.delete('/api/v1/tsaks/:id') // - delete task

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}..`));


