import { v4 as uuidv4 } from 'uuid';

let user =[
    {
        id:1,
        name:"Akash",
        age:24,
        gender:"M"
    },
    {
        id:2,
        name:"Aman",
        age:24,
        gender:"M"
    },
    {
        id:3,
        name:"Akshay",
        age:24,
        gender:"M"
    }
]

export const getusers =(req,res)=>{

 res.send(user)
    
}

export const getuser =(req,res)=>{

    const foundUser = user.find((user)=>user.id==req.params.id);
    res.send(foundUser);
}

export const createUser =(req,res)=>{
    const newUser = req.body;
    const usertoPush = {...newUser,id:uuidv4()}
    user.push(usertoPush);

    console.log(`new user has been pushed ${newUser}`)
    res.send('User Added')
}

export const deleteUser =(req,res)=>{

    user= user.filter((user)=>user.id!=req.params.id);
    res.send("User deleted")
 }

 export const updateUser = (req,res)=>{

    const {name,age,gender} = req.body
    const userToBeUpdate = user.find((user)=>user.id==req.params.id);

    if(name)
    userToBeUpdate.name=name;
    if(age)
    userToBeUpdate.age=age;
    if(gender)
    userToBeUpdate.gender=gender;

    res.send(`user with ${req.params.id} is updated`);

}