import fetch from "node-fetch";


 console.log("akash");

 // harry async await

// async function harry()
// {
//     console.log('inside harry function')
//     const response = await fetch('http://api.github.com/user/1');
//     console.log('response received'+ response);
//     const users = await response.json();
//     console.log('user resolved');
//     return users;

// }

// console.log("before harry");
// let a = harry();
// console.log(a);
// console.log("after harry");
// a.then(data=>console.log(data))
// console.log("last line");


// callable


const data =[
    {name:"akash",profession:"sde"},
    {name:'vishal',profession:"se"}
]

function getData()
{
    setTimeout(() => {
    data.forEach((x)=>console.log(x));
    },1000);
    
}

// function addData(x,callback)
// {
//     setTimeout(()=>{
      
//         data.push(x)
//         callback();
//     },2000)

// }

//Promise

function addData(x)
{

    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            data.push(x)
            let error = true;
            if(!error)
            resolve();
            else
            reject("Error catched")
            
        },2000)

    })
 

}

const newUser = {name:'Vivek',profession:'JEN'}

console.log("before addData call")
//addData(newUser,getData).then(getData).catch((err)=>console.log(err));


//// async await
async function start()
{

    try{
         await addData(newUser,getData);
         getData()
    }
    catch(err)
    {
        console.log(err)
    }

}

start();

