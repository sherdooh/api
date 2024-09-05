import express from "express";


const app = express();
const port = 8080;

const data = [];

app.use(express.json())

app.get('/', (req,res) => {

    
    res.send('This is Node');
})

app.post('/add', (req, res) => {
    
    data.push(req.body);  

    res.status(201).json({
        message: "Data added successfully",
        data : data,
    });

})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})


