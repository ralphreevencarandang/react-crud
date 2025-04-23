import { Link } from "react-router";
import axios from "../axios";
import { useEffect, useState } from "react";

const Home = () => {

    const [errorMessage, setErrorMessage] = useState();
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchUser();
    }, []);


    const fetchUser = async()=>{
        try {
            const res = await axios.get('/users')
            setData(res.data)
        }catch(error){
            console.log('Failed to fetch data: ', error)
            setErrorMessage(error);

        }
    }

  return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-[900px]">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold p-4">List of Users</h1>
                    <Link to='/create' className="border-1 px-2 py-1 rounded-lg border-slate-400 ">Add User</Link>
                </div>
                <table class="bg-white rounded-lg shadow w-full">
                    <thead>
                        <tr class="bg-gray-200 text-gray-700 text-left text-sm uppercase">
                            <th class="px-4 py-2">ID</th>
                            <th class="px-4 py-2">Username</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">Email</th>
                            <th class="px-4 py-2">Phone</th>
                            <th class="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm divide-y divide-gray-200">
                        {data.map((d,i) => 
                        <tr key={i}>
                            <td class="px-4 py-2">{d.id}</td>
                            <td class="px-4 py-2">{d.username}</td>
                            <td class="px-4 py-2">{d.name}</td>
                            <td class="px-4 py-2">{d.email}</td>
                            <td class="px-4 py-2">{d.phone}</td>
                            <td className="flex justify-center items-center gap-3 px-4 py-2">
                                <Link className="bg-blue-300 text-white px-2 rounded-lg">View</Link>
                                <Link className="bg-yellow-300 text-white px-2 rounded-lg">Edit</Link>
                                <Link className="bg-red-300 text-white px-2 rounded-lg">Delete</Link>
                            </td>

                        </tr>
                        )}
                   
                </tbody>
                </table>
            </div>
        </div>
  );
};

export default Home;
