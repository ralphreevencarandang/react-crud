import Button from "../component/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from '../axios'
import { ToastContainer, toast } from 'react-toastify';
const CreateUser = ()=>{



    const [error, setError] =  useState({
        username:"",
        email:'',
        name:'',
        phone:''
    });
    const [values, setValues] =  useState({
        username:"",
        email:'',
        name:'',
        phone:''
    });

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(values.username == ''){
            setError({...values, username:'Please enter username'});
        }else if(values.email == ''){
            setError({...values, email:'Please enter email'})
        }else if(values.name == ''){
            setError({...values, name:'Please enter name'})
        }else if(values.phone == ''){
            setError({...values, phone:'Please enter phone'})
        }
        else{
            try{
                const res = await  axios.post('/users', values);
                toast.success('User added');
                // navigate('/')    
            }catch(error){
                toast.error('Failed to add user');
                console.log(error)
            }
        }
           
  
       
    }



    
    return (
        <div className="flex flex-col justify-center items-center px-5 ">
            <h1 className="text-4xl p-4">CreateUser</h1>
            <div className="w-full max-w-md  ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label>Username</label> <br />
                        <input type="text" className="border-1 border-gray-400 rounded-lg w-full py-1 px-2" onChange={(e)=>{ 
                            setValues({...values, username: e.target.value})
                            setError({...error, username:''})
                        }
                        } value={values.username}/>

                        {values.username ? '' : <p className="text-xs text-red-600">{error.username}</p>}
              
                    </div>
                    <div className="mb-2">
                        <label>Email</label> <br />
                        <input type="email" className="border-1 border-gray-400 rounded-lg w-full py-1 px-2" onChange={(e)=>{
                            setValues({...values, email: e.target.value})
                            setError({...error, email:''})
                    }} value={values.email}/>
                        {values.email ? '' : <p className="text-xs text-red-600">{error.email}</p>}
                  

                    </div>
                    <div className="mb-2">
                        <label>Name</label> <br />
                        <input type="text" className="border-1 border-gray-400 rounded-lg w-full py-1 px-2" onChange={(e)=>{
                            setValues({...values, name:e.target.value})
                            setError({...error, name:''})
                            
                            }} value={values.name}/>
                        {values.name ? '' : <p className="text-xs text-red-600">{error.name}</p>}

                    </div>
                    <div className="mb-2">
                        <label>Phone</label> <br />
                        <input type="text" className="border-1 border-gray-400 rounded-lg w-full py-1 px-2" onChange={(e)=>{
                            setValues({...values, phone:e.target.value})
                            setError({...error, phone:''})
                            
                            }} value={values.phone}/>
                        {values.phone ? '' : <p className="text-xs text-red-600">{error.phone}</p>}

                    </div>
                    
                    <div className="mb-2">
                        <Button label='Add User' type='submit'/>
                    </div>
                    <div className="mb-2">
                        <Button label='Back'backgroundColor="bg-gray-400" onClick={()=> {navigate('/')}} />
                    </div>
                </form>
               
        
            </div>
        </div>
    );
}

export default CreateUser;