import { Link } from "react-router";
import axios from "../axios";
import { useEffect, useState } from "react";
import Spinner from "../component/Spinner";
import useFetch from "../hooks/useFetch";
const Home = () => {

    const [loading, data, errorMessage] = useFetch('/users');

    const hanldeDelete = async (id)=>{
        const confirmDelete = confirm('Are you sure you want to delete this record? ');
        if(confirmDelete) {
            try{
                const res = await axios.delete(`/users/${id}`);
                console.log(res)
            }catch(error){
                console.log(error)
            }
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-[900px]">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold p-4">List of Users</h1>
                    <Link to='/create' className="border-1 px-2 py-1 rounded-lg border-slate-400 ">Add User</Link>
                </div>
                {loading ? (<Spinner/>) : 
                    <table className="bg-white rounded-lg shadow w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left text-sm uppercase">
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Username</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
                                {data.map((d,i) => 
                                <tr key={i}>
                                    <td className="px-4 py-2">{d.id}</td>
                                    <td className="px-4 py-2">{d.username}</td>
                                    <td className="px-4 py-2">{d.name}</td>
                                    <td className="px-4 py-2">{d.email}</td>
                                    <td className="px-4 py-2">{d.phone}</td>
                                    <td className="flex justify-center items-center gap-3 px-4 py-2">
                                        <Link to={`/view/${d.id}`} className="bg-blue-300 text-white px-2 rounded-lg">View</Link>
                                        <Link to={`/update/${d.id}`} className="bg-yellow-300 text-white px-2 rounded-lg">Edit</Link>
                                        <button className="bg-red-300 text-white px-2 rounded-lg" onClick={()=> hanldeDelete(d.id)}>Delete</button>
                            
                                    </td>
                                </tr>
                                )}
                            </tbody>
                    </table>
                 
                 }
                    
                     
            </div>
        </div>
    );
};

export default Home;
