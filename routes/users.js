// const express = require('express');
const router = require('express').Router();

//Login page
router.get('/login',(req, res)=>{
     res.render('Login')
});


//register page
router.get('/register',(req, res)=>{
    res.render('register')
});

//Register Handle
router.post('/register', (req,res)=>{
    console.log(req.body);
   const { name,email,password,password2 }= req.body;
   let errors = [];

//check required fields
if(!name || !email || !password || !password2){
    errors.push({ msg : 'Please fill in all fields'});
}
 
//check password match
if(password != password2){
    errors.push({ msg: 'Passwords do not match'});
}

//Check pass length
if(password.length<6){
    errors.push({ msg : 'Password should be at least 6 charecters'});
}

if(errors.length>0){
    res.render('register',{
       errors,
       name,
       email,
       password,
       password2
    });
}else{
    res.send('pass');
}

});

module.exports = router;
