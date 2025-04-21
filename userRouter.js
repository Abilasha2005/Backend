const express = require('express');
const routes = express.Router;

const users =[
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"},
];

app.get('./users',(req,res)=>{
    res.status(200).json({
        messeage:"Fetched all data",
        user:users
    })
});

app.post('/users', (req, res) => {
    const { id, username, email } = req.body;
    const newUser = { id, username, email };
    users.push(newUser);
  
    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });
  });


module.exports = routes