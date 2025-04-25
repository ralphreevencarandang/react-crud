import { useParams } from "react-router";
import Button from "../component/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "../axios";

const ViewUser = ()=>{
    const [error, setError] = useState('');
    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const res = await axios.get(`/users/${id}`)
                console.log(res.data)
                setData(res.data)
            }catch(error){
                console.log('Failed to fetch user', error)
                setError(error);
            }
        }
        fetchUser();

    }, []);

    return (
        <section className="flex flex-col justify-center items-center w-screen px-5">
            <h1 className="text-4xl p-5">ViewUser</h1>

            <div className=" max-w-[500px] max-h-[500px] w-full h-screen rounded-lg shadow-2xl">
                <div className="h-full border-1 flex flex-col justify-between">

                    <div>
                        <p className="text-center text-2xl py-2">ID: {data.id}</p>
                        <p className="text-center text-2xl py-2">Username:  {data.username}</p>
                        <p className="text-center text-2xl py-2">Name:  {data.name}</p>
                        <p className="text-center text-2xl py-2">Email:  {data.email}</p>
                        <p className="text-center text-2xl py-2">Phone:  {data.phone}</p>
                    </div>
                    
                    <div className="px-10 my-10 ">
                        <Button label='Back' backgroundColor="bg-gray-400" onClick={()=> navigate('/')}/>
                    </div>
                </div>

              
            </div>
        </section>
    );
}

export default ViewUser;