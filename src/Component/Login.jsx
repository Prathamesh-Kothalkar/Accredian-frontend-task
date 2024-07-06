import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { UserContext } from '../../context/UserContext';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {setIsLogin}=useContext(UserContext)
    const server = import.meta.env.VITE_BACKEND_SERVER;
    const [loading,setLoading]=useState(false);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(isValid(email,password)){
            setLoading(true);
            try{
                const response = await axios.post(`${server}/api/v1/user/signin`,{
                    email,
                    password
                })
                const token = response.data.token;
                localStorage.setItem("token",token);
                console.log(localStorage.getItem("token"));
                setIsLogin(true);
                setLoading(false);
                navigate("/")
            }
            catch(err){
                console.error(err)
                setLoading(false);
                alert("Somewent gone wrong");
            }
            
        }
        return 
    }

    return <>
        <div className="h-screen bg-blue-100 mt-18 flex justify-center align-middle">
           <div className="h-96 scroll mt-32 p-9 shadow-sm rounded-md shadow-black">
           <div className="text-center text-3xl font-semiboldmb mb-3">
                LOGIN
            </div>
            <form onSubmit={handleSubmit}>
                <TextField 
                variant='outlined'
                className=''
                type='email'
                onChange={(e)=>{setEmail(e.target.value)}}
                label='Enter Email'/> <br /><br />
                <TextField 
                variant='outlined'
                onChange={(e)=>{setPassword(e.target.value)}}
                type='password'
                label='Enter Password'/> <br /> <br />
                {
                    loading?
                     <CircularProgress/>
                    :
                    <Button variant='contained' type='submit'>Login</Button>
                }
               
            </form>
            <div className="mt-3 text-sm text-gray-500">
                Don't have an account ? <a href='/signup'>Create here</a>
            </div>
           </div>
           {console.log(import.meta.env.VITE_BACKEND_SERVER)}
        </div>
    </>
}


function isValid(email,password){
    if(!email||!password){
        alert("All fields are required");
        return false;
    }
    if(password.length<6){
        alert("Password must have 6 digit");
        return false;
    }

    return true;
}