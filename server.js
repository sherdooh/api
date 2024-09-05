import express from "express";
const app = express();
const port = 8080;

// Array to store data across requests
const data = [];

// Middleware to parse JSON bodies
app.use(express.json());

// GET route for the root URL
app.get('/', (req, res) => {
    res.send('Howdy');
});

// POST route to handle adding data
app.post('/add', (req, res) => {
    data.push(req.body);  // Add the received data to the array

    // Send back a response confirming the data received
    res.status(201).json({
        message: "Data added successfully",
        data: data  // Return the updated data array
    });
});

// Start the server 
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
