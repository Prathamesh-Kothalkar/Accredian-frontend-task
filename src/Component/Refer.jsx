import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CircularProgress, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    borderRadius:'25px',
    border: '1px solid #fff',
    boxShadow: 24,
    p: 4,
};

export default function Refer() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {isLogin}=useContext(UserContext);
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [course,setCourse]=useState();
    const server=import.meta.env.VITE_BACKEND_SERVER;
    const [loading,setLoading]=useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(isValid(name,course,email)){
            setLoading(true);
           try{
            const response = await axios.post(`${server}/api/v1/user/refer`,{
                refereeName:name,
                refereeEmail:email,
                course
            },{
                
                    headers:{
                        authorization:"Bearer "+localStorage.getItem("token")
                    }
                }
            )
            console.log(response.data);
            setLoading(false);
            alert("sucessfully send");
           }
           catch(err){
            setLoading(false)
             console.error(err);
             alert("Somewent gone wrong");
           }
        }
        return 

    }
    return <>
        {
            isLogin?
            <Button
            onClick={handleOpen}
            variant="contained"
            color="primary">Refer Now</Button>
            :
            <Button
            onClick={()=>{alert("You are  not Login. Login First");navigate("/login")}}
            variant="contained"
            color="primary">Refer Now</Button>
        }
        

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                   Refer Your Friend
                </Typography>
                <Typography id="modal-modal-description" className='text-sm text-gray-500' sx={{ mt: 2 }}>
                    - Refer and Earn <br />
                    - Don't Refer to Bot <br />
                    - Don't Spam <br />
                </Typography>
                <br />
                <div className="p-2">
                    <form onSubmit={handleSubmit}>
                        <TextField  
                        variant='outlined'
                        onChange={(e)=>{setName(e.target.value)}} 
                        label={"Referrer  Name"}/> <br /><br />
                        <TextField  
                        variant='outlined' type='email'
                        onChange={(e)=>{setEmail(e.target.value)}}
                        label={"Referrer  Email id"}/> <br /><br />
                        <TextField 
                        variant='outlined'
                        onChange={(e)=>{setCourse(e.target.value)}}
                        label={"Course Name"}/> <br /><br />
                        {
                            loading?
                            <CircularProgress/>:
                            <Button  variant='contained'type='submit'>Refer</Button>
                        }
                        
                    </form>
                </div>
            </Box>
        </Modal>
    </>
}

function isValid(name,email,course){
    if(!name || !email|| !course){
        alert("All fields are required");
        return false;
    }
    return true
}