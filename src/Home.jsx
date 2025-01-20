
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./newFile/Profile";
import axiosHttp from "./utils/axios"; 

function Home() {
    const [data, setData] = useState([]);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        axiosHttp
            .get("/user") 
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = () => {
        if (userIdToDelete) {
            axiosHttp
                .delete(`/user/${userIdToDelete}`) 
                .then(() => {
                    setData((prevData) =>
                        prevData.filter((user) => user.id !== userIdToDelete)
                    );
                })
                .catch((err) => {
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
                <h1 className="text-3xl font-bold text-gray-800">
                    User Management System
                </h1>
            </header>

            <div className="text-right mb-6">
                <Link
                    to={`/create`}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
                >
                    + Create
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-3 border-b text-center text-sm font-semibold text-gray-600">
                                Profile Img
                            </th>

                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">
                                Name
                            </th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">
                                Email
                            </th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">
                                Phone
                            </th>
                            <th className="px-6 py-3 border-b text-sm text-center font-semibold text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr
                                key={i}
                                className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                            >
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">
                                    <Profile />
                                </td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">
                                    {d.name}
                                </td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">
                                    {d.email}
                                </td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">
                                    {d.phone}
                                </td>
                                <td className="px-6 py-4 border-b text-center">
                                    <div className="relative inline-block text-left">
                                        <button
                                            className="bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-500 transition-all"
                                            onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                                        >
                                            <i className="fas fa-ellipsis-h text-lg"></i>
                                        </button>

                                        {openDropdown === i && (
                                            <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-64">
                                                <div className="flex space-x-4 p-2">
                                                    <Link
                                                        to={`/Read/${d.id}`}
                                                        className="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all"
                                                    >
                                                        <i className="fas fa-eye mr-2"></i>
                                                    </Link>
                                                    <Link
                                                        to={`/Update/${d.id}`}
                                                        className="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all"
                                                    >
                                                        <i className="fas fa-edit mr-2"></i>
                                                    </Link>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <button
                                                                className="flex items-center text-sm text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-all"
                                                                onClick={() => handleClick(d.id)}
                                                            >
                                                                <i className="fas fa-trash mr-2"></i>
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
                                                                <AlertDialogCancel className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300">
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
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-left mt-6">
                <Link
                    to="/"
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow hover:from-red-600 hover:to-pink-600 focus:ring-4 focus:ring-red-300 transition-all"
                >
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Home;
