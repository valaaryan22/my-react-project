
// // import {
// //     AlertDialog,
// //     AlertDialogAction,
// //     AlertDialogCancel,
// //     AlertDialogContent,
// //     AlertDialogDescription,
// //     AlertDialogFooter,
// //     AlertDialogHeader,
// //     AlertDialogTitle,
// //     AlertDialogTrigger,
// // } from "@/components/ui/alert-dialog";
// // import axios from "axios";
// // import { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';

// // function Home() {
// //     const [data, setData] = useState([]);

// //     useEffect(() => {
// //         axios.get("http://localhost:3000/user")
// //             .then(response => setData(response.data))
// //             .catch(err => console.log(err));
// //     }, []);

// //     const handleClick = (id) => {
// //         const confirm = true;
// //         if (confirm) {
// //             axios.delete(`http://localhost:3000/user/${id}`)
// //                 .then(() => window.location.reload())
// //                 .catch(err => console.log(err));
// //         }
// //     };

// //     return (
// //         <div className="p-6 bg-gray-100 min-h-screen">
// //             <div className="text-right mb-4">
// //                 <Link
// //                     to={`/create`}
// //                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md"
// //                 >
// //                     + Create
// //                 </Link>
// //             </div>

// //             <table className="w-full border border-gray-300 bg-white shadow-lg rounded-lg">
// //                 <thead className="bg-gray-200">
// //                     <tr>
// //                         <th className="border px-4 py-2 text-gray-600">Id</th>
// //                         <th className="border px-4 py-2 text-gray-600">Name</th>
// //                         <th className="border px-4 py-2 text-gray-600">Email</th>
// //                         <th className="border px-4 py-2 text-gray-600">Phone</th>
// //                         <th className="border px-4 py-2 text-gray-600">Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {data.map((d, i) => (
// //                         <tr key={i} className="hover:bg-gray-50">
// //                             <td className="border px-4 py-2 text-center text-gray-700">{i + 1}</td>
// //                             <td className="border px-4 py-2 text-gray-700">{d.name}</td>
// //                             <td className="border px-4 py-2 text-gray-700">{d.email}</td>
// //                             <td className="border px-4 py-2 text-gray-700">{d.phone}</td>
// //                             <td className="border px-4 py-2 text-center space-x-2">
// //                                 <Link
// //                                     to={`/Read/${d.id}`}
// //                                     className="bg-lime-500 text-white px-3 py-1 rounded-lg hover:bg-lime-600 shadow-sm"
// //                                 >
// //                                     Read
// //                                 </Link>
// //                                 <Link
// //                                     to={`/Update/${d.id}`}
// //                                     className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 shadow-sm"
// //                                 >
// //                                     Edit
// //                                 </Link>
// //                                 <AlertDialog>
// //                                     <AlertDialogTrigger
// //                                         className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 shadow-sm cursor-pointer"
// //                                     >
// //                                         Delete
// //                                     </AlertDialogTrigger>
// //                                     <AlertDialogContent className="bg-gray-50 shadow-lg rounded-lg">
// //                                         <AlertDialogHeader>
// //                                             <AlertDialogTitle className="text-xl font-semibold text-gray-800">
// //                                                 Are you absolutely sure?
// //                                             </AlertDialogTitle>
// //                                             <AlertDialogDescription className="text-gray-600">
// //                                                 This will permanently delete the user data.
// //                                             </AlertDialogDescription>
// //                                         </AlertDialogHeader>
// //                                         <AlertDialogFooter className="flex justify-end space-x-2">
// //                                             <AlertDialogCancel
// //                                                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
// //                                             >
// //                                                 Cancel
// //                                             </AlertDialogCancel>
// //                                             <AlertDialogAction
// //                                                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
// //                                                 onClick={() => handleClick(d.id)}
// //                                             >
// //                                                 Confirm
// //                                             </AlertDialogAction>
// //                                         </AlertDialogFooter>
// //                                     </AlertDialogContent>
// //                                 </AlertDialog>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default Home;


// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import axios from "axios";
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:3000/user")
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleClick = (id) => {
//         const confirm = true;
//         if (confirm) {
//             axios.delete(`http://localhost:3000/user/${id}`)
//                 .then(() => window.location.reload())
//                 .catch(err => console.log(err));
//         }
//     };

//     return (
//         <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//             <header className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-800">
//                     User Management System
//                 </h1>
//                 <p className="text-gray-600">Manage your users efficiently and effortlessly</p>
//             </header>

//             <div className="text-right mb-6">
//                 <Link
//                     to={`/create`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     + Create
//                 </Link>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">ID</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Name</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Email</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Phone</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((d, i) => (
//                             <tr
//                                 key={i}
//                                 className={`${
//                                     i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
//                                 } hover:bg-gray-100`}
//                             >
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{i + 1}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.name}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.email}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.phone}</td>
//                                 <td className="px-6 py-4 border-b text-center space-x-2">
//                                     <Link
//                                         to={`/Read/${d.id}`}
//                                         className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600"
//                                     >
//                                         Read
//                                     </Link>
//                                     <Link
//                                         to={`/Update/${d.id}`}
//                                         className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600"
//                                     >
//                                         Edit
//                                     </Link>
//                                     <AlertDialog>
//                                         <AlertDialogTrigger
//                                             className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 cursor-pointer"
//                                         >
//                                             Delete
//                                         </AlertDialogTrigger>
//                                         <AlertDialogContent className="bg-white shadow-lg rounded-lg p-6">
//                                             <AlertDialogHeader>
//                                                 <AlertDialogTitle className="text-lg font-bold text-gray-800">
//                                                     Are you sure?
//                                                 </AlertDialogTitle>
//                                                 <AlertDialogDescription className="text-sm text-gray-600">
//                                                     Deleting this user cannot be undone.
//                                                 </AlertDialogDescription>
//                                             </AlertDialogHeader>
//                                             <AlertDialogFooter className="flex justify-end space-x-4">
//                                                 <AlertDialogCancel
//                                                     className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300"
//                                                 >
//                                                     Cancel
//                                                 </AlertDialogCancel>
//                                                 <AlertDialogAction
//                                                     className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//                                                     onClick={() => handleClick(d.id)}
//                                                 >
//                                                     Confirm
//                                                 </AlertDialogAction>
//                                             </AlertDialogFooter>
//                                         </AlertDialogContent>
//                                     </AlertDialog>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import axios from "axios";
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//     const [data, setData] = useState([]);
//     const [userIdToDelete, setUserIdToDelete] = useState(null);
//     const [openDropdown, setOpenDropdown] = useState(null); // Track dropdown for each user

//     useEffect(() => {
//         axios.get("http://localhost:3000/user")
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, []);
//     const handleDelete = () => {
//         if (userIdToDelete) {
//             axios
//                 .delete(`http://localhost:3000/user/${userIdToDelete}`)
//                 .then(() => {
//                     setData((prevData) => prevData.filter((user) => user.id !== userIdToDelete));
                    
//                 })
//                 .catch((err) => {
//                     console.error("Error deleting user:", err);
//                 });
//         }
//     };
//     const handleClick = (id) => {
//         setUserIdToDelete(id);
//     };


//     return (
//         <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//             <header className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-800">
//                     User Management System
//                 </h1>
//             </header>

//             <div className="text-right mb-6">
//                 {/* <Link
//                     to={`/create`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     + Create
//                 </Link> */}
//                 <Link
//                     to={`/register`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     Register
//                 </Link>
//                 <Link
//                     to={`/login`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     Login
//                 </Link>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">ID</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Name</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Email</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Phone</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((d, i) => (
//                             <tr
//                                 key={i}
//                                 className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
//                                     } hover:bg-gray-100`}
//                             >
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{i + 1}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.name}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.email}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.phone}</td>
//                                 <td className="px-6 py-4 border-b text-center space-x-2">
//                                     <div className="relative inline-block text-left">
//                                         <button
//                                             className="bg-gray-400 text-white px-4 py-2 rounded-full"
//                                             onClick={() => setOpenDropdown(openDropdown === i ? null : i)} // Toggle dropdown visibility
//                                         >
//                                             &#8230;
//                                         </button>

//                                         {openDropdown === i && (
//                                             <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-40">
//                                                 <Link
//                                                     to={`/Read/${d.id}`}
//                                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                                 >
//                                                     Read
//                                                 </Link>
//                                                 <Link
//                                                     to={`/Update/${d.id}`}
//                                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                                 >
//                                                     Edit
//                                                 </Link>
//                                                 <AlertDialog>
//                                                     <AlertDialogTrigger asChild>
//                                                         <button
//                                                             className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                                                             onClick={() => handleClick(d.id)}
//                                                         >
//                                                             Delete
//                                                         </button>
//                                                     </AlertDialogTrigger>
//                                                     <AlertDialogContent>
//                                                         <AlertDialogHeader>
//                                                             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                                                             <AlertDialogDescription>
//                                                                 Deleting this user cannot be undone.
//                                                             </AlertDialogDescription>
//                                                         </AlertDialogHeader>
//                                                         <AlertDialogFooter>
//                                                             <AlertDialogCancel
//                                                                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300"
//                                                             >
//                                                                 Cancel
//                                                             </AlertDialogCancel>
//                                                             <AlertDialogAction
//                                                                 className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//                                                                 onClick={handleDelete}
//                                                             >
//                                                                 Confirm
//                                                             </AlertDialogAction>
//                                                         </AlertDialogFooter>
//                                                     </AlertDialogContent>
//                                                 </AlertDialog>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"; // Import Chakra UI components for the menu
// import axios from "axios";
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//     const [data, setData] = useState([]);
//     const [userIdToDelete, setUserIdToDelete] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:3000/user")
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = () => {
//         if (userIdToDelete) {
//             axios
//                 .delete(`http://localhost:3000/user/${userIdToDelete}`)
//                 .then(() => {
//                     setData((prevData) => prevData.filter((user) => user.id !== userIdToDelete));
//                 })
//                 .catch((err) => {
//                     console.error("Error deleting user:", err);
//                 });
//         }
//     };

//     const handleClick = (id) => {
//         setUserIdToDelete(id);
//     };

//     return (
//         <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//             <header className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-800">User Management System</h1>
//             </header>

//             <div className="text-right mb-6">
//                 <Link
//                     to={`/register`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     Register
//                 </Link>
//                 <Link
//                     to={`/login`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     Login
//                 </Link>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">ID</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Name</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Email</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Phone</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((d, i) => (
//                             <tr
//                                 key={i}
//                                 className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
//                             >
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{i + 1}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.name}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.email}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.phone}</td>
//                                 <td className="px-6 py-4 border-b text-center space-x-2">
//                                     <Menu>
//                                         <MenuButton
//                                             as="button"
//                                             className="bg-gray-500 text-white px-4 py-2 rounded-full shadow hover:bg-gray-600"
//                                         >
//                                             ⋮ 
//                                         </MenuButton>
//                                         <MenuList>
//                                             <MenuItem>
//                                                 <Link
//                                                     to={`/Read/${d.id}`}
//                                                     className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600"
//                                                 >
//                                                     Read
//                                                 </Link>
//                                             </MenuItem>
//                                             <MenuItem>
//                                                 <Link
//                                                     to={`/Update/${d.id}`}
//                                                     className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600"
//                                                 >
//                                                     Edit
//                                                 </Link>
//                                             </MenuItem>
//                                             <MenuItem>
//                                                 <AlertDialog>
//                                                     <AlertDialogTrigger asChild>
//                                                         <button
//                                                             className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600"
//                                                             onClick={() => handleClick(d.id)}
//                                                         >
//                                                             Delete
//                                                         </button>
//                                                     </AlertDialogTrigger>
//                                                     <AlertDialogContent>
//                                                         <AlertDialogHeader>
//                                                             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                                                             <AlertDialogDescription>
//                                                                 Deleting this user cannot be undone.
//                                                             </AlertDialogDescription>
//                                                         </AlertDialogHeader>
//                                                         <AlertDialogFooter>
//                                                             <AlertDialogCancel className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300">
//                                                                 Cancel
//                                                             </AlertDialogCancel>
//                                                             <AlertDialogAction
//                                                                 className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//                                                                 onClick={handleDelete}
//                                                             >
//                                                                 Confirm
//                                                             </AlertDialogAction>
//                                                         </AlertDialogFooter>
//                                                     </AlertDialogContent>
//                                                 </AlertDialog>
//                                             </MenuItem>
//                                         </MenuList>
//                                     </Menu>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//     const [data, setData] = useState([]);
//     const [userIdToDelete, setUserIdToDelete] = useState(null);
//     const [openDropdown, setOpenDropdown] = useState(null); // Track dropdown for each user

//     // Fetch data from API
//     useEffect(() => {
//         axios.get("http://localhost:3000/user")
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = () => {
//         if (userIdToDelete) {
//             axios.delete(`http://localhost:3000/user/${userIdToDelete}`)
//                 .then(() => {
//                     setData(prevData => prevData.filter(user => user.id !== userIdToDelete));
//                     setOpenDropdown(null); // Close the dropdown after delete
//                 })
//                 .catch(err => {
//                     console.error("Error deleting user:", err);
//                 });
//         }
//     };

//     const handleClick = (id) => {
//         setUserIdToDelete(id);
//     };

//     return (
//         <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//             <header className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-800">User Management System</h1>
//             </header>

//             <div className="text-right mb-6">
//                 <Link
//                     to={`/register`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     Register
//                 </Link>
//                 <Link
//                     to={`/login`}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-500 ml-2 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600"
//                 >
//                     Login
//                 </Link>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">ID</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Name</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Email</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Phone</th>
//                             <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((d, i) => (
//                             <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{i + 1}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.name}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.email}</td>
//                                 <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.phone}</td>
//                                 <td className="px-6 py-4 border-b text-center">
//                                     <div className="relative inline-block text-left">
//                                         <button
//                                             className="bg-gray-400 text-white px-4 py-2 rounded-full"
//                                             onClick={() => setOpenDropdown(openDropdown === i ? null : i)} // Toggle dropdown visibility
//                                         >
//                                             &#8230;
//                                         </button>

//                                         {openDropdown === i && (
//                                             <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-40">
//                                                 <Link
//                                                     to={`/Read/${d.id}`}
//                                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                                 >
//                                                     Read
//                                                 </Link>
//                                                 <Link
//                                                     to={`/Update/${d.id}`}
//                                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                                 >
//                                                     Edit
//                                                 </Link>
//                                                 <AlertDialog>
//                                                     <AlertDialogTrigger asChild>
//                                                         <button
//                                                             className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                                                             onClick={() => handleClick(d.id)}
//                                                         >
//                                                             Delete
//                                                         </button>
//                                                     </AlertDialogTrigger>
//                                                     <AlertDialogContent>
//                                                         <AlertDialogHeader>
//                                                             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                                                             <AlertDialogDescription>
//                                                                 Deleting this user cannot be undone.
//                                                             </AlertDialogDescription>
//                                                         </AlertDialogHeader>
//                                                         <AlertDialogFooter>
//                                                             <AlertDialogCancel
//                                                                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300"
//                                                             >
//                                                                 Cancel
//                                                             </AlertDialogCancel>
//                                                             <AlertDialogAction
//                                                                 className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//                                                                 onClick={handleDelete}
//                                                             >
//                                                                 Confirm
//                                                             </AlertDialogAction>
//                                                         </AlertDialogFooter>
//                                                     </AlertDialogContent>
//                                                 </AlertDialog>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;
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
import axios from "axios";
import { useEffect, useState } from 'react';
import "react-image-crop/dist/ReactCrop.css";
import { Link } from 'react-router-dom';
import Profile from "./newFile/Profile";
function Home() {
    const [data, setData] = useState([]);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = () => {
        if (userIdToDelete) {
            axios
                .delete(`http://localhost:3000/user/${userIdToDelete}`)
                .then(() => {
                    setData((prevData) => prevData.filter((user) => user.id !== userIdToDelete));
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
                            <th className="px-6 py-3 border-b text-center text-sm font-semibold text-gray-600">Profile Img</th>
                            
                            <th className="px-6 py-3 border-b text-sm  font-semibold text-gray-600">Name</th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Email</th>
                            <th className="px-6 py-3 border-b text-sm font-semibold text-gray-600">Phone</th>
                            <th className="px-6 py-3 border-b text-sm text-center font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr
                                key={i}
                                className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    } hover:bg-gray-100`}
                            >
                                <td className="px-6 py-4 border-b text-gray-800 text-sm"><Profile></Profile></td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.name}</td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.email}</td>
                                <td className="px-6 py-4 border-b text-gray-800 text-sm">{d.phone}</td>
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
