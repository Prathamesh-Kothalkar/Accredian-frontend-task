import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { UserContext } from '../../context/UserContext';

export default function Navbar() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const {isLogin,setIsLogin}=useContext(UserContext);
    useEffect(()=>{
        if(localStorage.getItem("token")){
           setIsLogin(true)
        }
    },[isLogin])

    return (
        <>  
            <div className="bg-slate-200 flex items-center justify-between p-2 fixed top-0 left-0 right-0 z-10">
                <div className="flex gap-x-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/0815/78d9/872c740534629bce867325cd8ecbc7df?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AkCDnOkRxgDJVPEAtWCP-AhRGmxrTfnfZJmBaycqw9AZzARvvxQJrJ24fglgA39dz2hhQ-X9KBn9mMfX5P~2AkmQcxD4auXGrpS1ce7jdZYHKDx0Lq6ai0Rs7tDk2aL9wbWCigQ02zXeNzskOUEHo1XM6WkrJWlmkcQIhUz2VWmLcAWACmkhmwQxwKdz8GBLoNsvb8s7ZB-Yb5ZR4bIYvU1e94ru3qHuBjvjVePAavj5mYcxXnrrpYLRnOfngSRFNnbEC-NQK4jhD4bVQY7pM2c39nEeSacoLw8ryD~iLWedPRpkj2ZwzeAuIGhk8TuBGavvsGFBqmmH5ukaG6qeuA__"
                        alt="Logo"
                        height={"80px"}
                        width={"80px"}
                        className='object-contain'
                        onClick={()=>{navigate("/")}}
                    />
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="flex space-x-3">
                        <li className="text-sm font-bold">Refer & Earn</li>
                        <li className="text-sm font-bold">Resources</li>
                        <li className="text-sm font-bold">About Us</li>
                    </ul>
                    <div className="flex space-x-4 ml-4 text-sm font-bold">
                        <div className="px-2">
                        {
                                isLogin?
                                <Button 
                            variant='contained' 
                            color='inherit'
                            onClick={()=>{localStorage.clear();setIsLogin(false);navigate("/login")}}
                            className="text-sm font-bold w-full">Log out</Button>:
                            <Button 
                            variant='contained' 
                            color='inherit'
                            onClick={()=>{navigate("/login")}}
                            className="text-sm font-bold w-full">Log in</Button>
                            }
                        </div>
                        <div className="px-2 text-sm font-bold">
                            <Button variant='contained'
                            className="text-sm font-bold">Try for free</Button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </Button>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-64 bg-slate-200 h-full z-20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col p-4">
                    <ul className="flex flex-col space-y-3">
                        <li className="text-sm font-bold">Refer & Earn</li>
                        <li className="text-sm font-bold">Resources</li>
                        <li className="text-sm font-bold">About Us</li>
                    </ul>
                    <div className="flex flex-col space-y-4 mt-4 text-sm font-bold">
                        <div>
                            {
                                isLogin?
                                <Button 
                            variant='contained' 
                            color='inherit'
                            onClick={()=>{localStorage.clear();setIsLogin(false);navigate("/login")}}
                            className="text-sm font-bold w-full">Log out</Button>:
                            <Button 
                            variant='contained' 
                            color='inherit'
                            onClick={()=>{navigate("/login")}}
                            className="text-sm font-bold w-full">Log in</Button>
                            }
                            
                            
                        </div>
                        <div>
                            <Button variant='contained'
                            className="text-sm font-bold w-full">Try for free</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
