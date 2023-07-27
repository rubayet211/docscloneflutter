const express = require('express');
const User = require('../models/user');

const authRouter =express.Router();

authRouter.post('/api/signup', async (req,res) => {
    try {
        const {name, email, profilePic} = req.body;

        let user = User.findOne({email: email});
        if(!user) {
            user = new User({
                email: email,
                profilePic: profilePic,
                name: name,
            });
            user = await user.save();
        }
      res.json({user});        
    } catch (e) {
        
    }
});

module.exports = authRouter;