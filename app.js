const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Register_data = require('./models/register')
require("./db/conn")
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();

// access path of all files
const static_path = path.join(__dirname, "public");
// middleware
app.use(express.static(static_path));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
});
// post register
app.post('/register', async (req, res) => { 
    try {
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobileno: req.body.mobileno,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        }
        const user_detail = new Register_data(data)
        const result = await user_detail.save();
        res.status(200).render('login');
        console.log(result);

    } catch (error) {
        res.status(400).send(error);
    }
});
// post login
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const username = await Register_data.findOne({ email, password },{ email:1, password:1 });
        if (username) {
            return res.json({ success: true });

        }
        return res.status(401).json({ error: 'Incorrect username or password' });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));