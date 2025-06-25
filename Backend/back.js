const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection=require('./config');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.set('view engine','ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render('login');
});

app.get('/signup',(req,res)=>{
    res.render('signup');
});
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = {
            name,
            email,
            password: hashedPassword,
        };

        const userdata = await collection.create(data);
        console.log(userdata);
        res.status(201).send("Data inserted successfully");
    } catch (err) {
        if (err.code === 11000) { // Duplicate email
            res.status(400).send("Email already exists");
        } else {
            res.status(500).send("Error inserting data");
        }
    }
});



const port =5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
