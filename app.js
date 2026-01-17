const express = require('express');
const app = express();
const userModel = require('./usermodel');
app.get('/', (req, res) => {   
    res.send('Hello World!');
});
app.get('/create', async (req, res) => {   
    let createdUser = await userModel.create({
        name: 'John Doe',
        email: "john@example.com",
        username: 'johndoe'
    });
    res.send(createdUser);
});
app.get('/update', async (req, res) => {   
    let updateduser = await userModel.findOneAndUpdate({username: 'johndoe'}, {name: 'nisha sah'}, {new: true});
    res.send(updateduser);

});
app.get('/read', async (req, res) => {   
    let Users = await userModel.find(); 
    res.send(Users);
});
app.get('/delete', async (req, res) => {   
    let Users = await userModel.findOne(); 
    res.send(Users);
});

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});