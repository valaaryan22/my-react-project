
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null); // Track dropdown for each user

    // Fetch data from API
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = () => {
        if (userIdToDelete) {
            axios.delete(`http://localhost:3000/user/${userIdToDelete}`)
                .then(() => {
                    setData(prevData => prevData.filter(user => user.id !== userIdToDelete));
                    setOpenDropdown(null); // Close the dropdown after delete
                })
                .catch(err => {
                    console.error("Error deleting user:", err);
                });
        }
    };

    const handleClick = (id) => {
        setUserIdToDelete(id);
    };

    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">User Management System</h1>
            </header>

            <div className="text-right mb-6">
                <Link
                    to={`/register`}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
                >
                    Register
                </Link>
                <Link
                    to={`/login`}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
                >
                    Login
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">ID</th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Name</th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Email</th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Phone</th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{i + 1}</td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.name}</td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.email}</td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.phone}</td>
                                <td className="px-6 py-4 border-b text-center">
                                    <div className="relative inline-block text-left">
                                        <button
                                            className="bg-gray-400 text-white px-4 py-2 rounded-full"
                                            onClick={() => setOpenDropdown(openDropdown === i ? null : i)} // Toggle dropdown visibility
                                        >
                                            &#8230;
                                        </button>

                                        {openDropdown === i && (
                                            <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-40">
                                                <Link
                                                    to={`/Read/${d.id}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Read
                                                </Link>
                                                <Link
                                                    to={`/Update/${d.id}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Edit
                                                </Link>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <button
                                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                            onClick={() => handleClick(d.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Deleting this user cannot be undone.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel
                                                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300"
                                                            >
                                                                Cancel
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction
                                                                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                                                                onClick={handleDelete}
                                                            >
                                                                Confirm
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
