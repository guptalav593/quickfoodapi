import User from "../model/userModel.js";
import jwt from 'jsonwebtoken';
import Wallet from "../model/walletModel.js"; // Assuming this is the correct path for the wallet model

// Assuming this is the correct path for the wallet controller  
export const create = async (req, res) =>{

    try {

        const userData = new User(req.body);
        const {email} = userData;
        const userExist = await User.findOne({email});
        
        if(userExist)
        {
             console.log("user already exists");
             res.status(200).json("exists");
          
        }
        else
        {
            const savedUser = await userData.save();
             console.log("user is saved",savedUser);
           res.status(200).json({name});
        }
        
    } 
    catch (error) {
        res.status(500).json({error: "Internal server error"});
    }

};

export const fetch = async (req, res) => {
          try{

            const users = await User.find();
            if(users.length === 0)
            {
               return res.status(404).json({mesasge:"no user found"});
            }
            res.status(200).json(users);

          }
          catch(error){
               res.status(500).json({error: "Internal server error"});
          }
    
};


export const login = async (req, res) => {
          try{

        const userData = new User(req.body)
        const {email,password} = userData;
        const userExist = await User.findOne({email});
            if(userExist)
            {
              const _email = userExist['email'];
              const _pass = userExist['password'];
              console.log("User exists");
              if(password === _pass)
              {
                console.log("Password is matched");
                 //res.status(200).json({: ""});
              let tokenData = {_id:userExist._id,email:userExist.email};
              const secretKey = "12345";
              const jwt_expire = '1h';
              const token = jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
              res.status(200).json({status:true,token:token});
              }
             

            }
           else
           {
             console.log("user not found");
           }

          }
          catch(error){
               res.status(500).json({error: "Internal server error"});
          }
    
};


export const addtowallet = async (req, res) =>{

    try {

        const userData = new Wallet(req.body);
            const savedUser = await userData.save();
             console.log("Wallet is updated",savedUser);
           res.status(200).json(savedUser);
        
        
    } 
    catch (error) {
        res.status(500).json({error: "Internal server error"});
    }

};


export const fetchwallet = async (req, res) => {
          try{
            var amounts = 0;
            const walletData = new Wallet(req.body);
            const {userId} = walletData;
            const walletcount = await Wallet.find({userId});
            if(walletcount.length === 0)
            {
               return res.status(404).json({mesasge:"no transaction found"});
            }
             walletcount.forEach(element => {

              amounts = amounts + element.amount;
              
            });
            res.status(200).json({walletamount:amounts});
           

          }
          catch(error){
               res.status(500).json({error: "Internal server error"});
          }
    
};



