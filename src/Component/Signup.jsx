import { Button, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

export default function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate=useNavigate();
    const server = import.meta.env.VITE_BACKEND_SERVER;
    const {setIsLogin}=useContext(UserContext);
    const [loading,setLoading]=useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid(name, email, password)) {
            setLoading(true);
            try{
                const response = await axios.post(`${server}/api/v1/user/create`,{
                    name,
                    email,
                    password
                });

                console.log(response.data);
                const token=response.data.token;
                localStorage.setItem("token",token);
                alert("User Created");
                setIsLogin(true);
                setLoading(false);
                navigate("/");
                
            }
            catch(err){
                console.error(err);
                setLoading(false);
                if(err.message=="Request failed with status code 403"){
                    alert("Email alredy used");
                    return
                }
                alert("Somewent gone wrong");
            }
           
        }
        return
    }
    return <>
        <div className="h-screen bg-blue-100 mt-18 flex justify-center align-middle">
            <div className="h-96 scroll mt-32 p-6 shadow-sm rounded-md shadow-black">
                <div className="text-center text-3xl font-semiboldmb mb-3">
                    SIGN-UP
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant='outlined'
                        className=''
                        type='text'
                        onChange={(e) => { setName(e.target.value) }}
                        label='Enter Name' /> <br /><br />
                    <TextField
                        variant='outlined'
                        className=''
                        type='email'
                        onChange={(e) => { setEmail(e.target.value) }}
                        label='Enter Email' /> <br /><br />
                    <TextField
                        variant='outlined'
                        onChange={(e) => { setPassword(e.target.value) }}
                        type='password'
                        label='Enter Password' /> <br /> <br />
                        {
                            loading?
                            <CircularProgress/>:
                            <Button variant='contained' type='submit'>Sign up</Button>
                        }
                    
                </form>
                <div className="mt-2 text-sm text-gray-600">
                    Already have an account ? <span className='cursor-pointer text-blue-600' onClick={()=>{navigate("/login")}}>Login here</span>
                </div>
            </div>
        </div>
    </>
}

function isValid(name, email, password) {
    if (!name || !email || !password) {
        alert("All fields are required");
        return false;
    }

    if (name.length < 3) {
        alert("Name has atleast 3 characters");
        return false;
    }

    if (password.length < 6) {
        alert("Password has atleast 6 characters");
        return false;
    }

    return true;
}