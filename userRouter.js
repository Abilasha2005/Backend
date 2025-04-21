const express = require('express');
const routes = express.Router();



const users =[
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"},
];

routes.get('./users',(req,res)=>{
    res.status(200).json({
        messeage:"Fetched all data",
        user:users
    })
});

routes.post('/users', (req, res) => {
    const { id, username, email } = req.body;
    const newUser = { id, username, email };
    users.push(newUser);
  
    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });
  });


  routes.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    let user = users.find(user => user.id === id);
    
    if (user) {
      user.username = username;
      user.email = email;
      res.status(200).json({
        message: 'User updated successfully',
        user: user
      });
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  });
  
  routes.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    
    res.status(200).json({
      message: 'User deleted successfully'
    });
  });


module.exports = routes