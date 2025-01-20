
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// function Read() {
//     const [data, setData] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const handleSubmit = () => {
//         navigate("/")
//     }
//     const handleSubmitUpdate = () => {
//         navigate("/update/" + id)
//     }
//     useEffect(() => {
//         axios
//             .get("http://localhost:3000/user/" + id)
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, [id]);
//     const buttonCss = "w-full bg-blue-500  pl-5 ml-2 text-white  font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"


//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="m-10 p-10 bg-white  border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl  text-center">
//                 <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//                     Detail Of User
//                 </h1>
//                 <h1 className="text-xl text-gray-600 mb-2">
//                     Name: {data.name}
//                 </h1>
//                 <h1 className="text-xl text-gray-600 mb-2">
//                     Email: {data.email}
//                 </h1>
//                 <h1 className="text-xl text-gray-600">
//                     Phone: {data.phone}
//                 </h1>
//                 <div className='p-1'>
                   
//                    <table >
//                     <tr>
//                         <td className='m-1 p-2'>
//                         <button onClick={handleSubmit} className={buttonCss}>
//                         Home
//                     </button>
                    
//                         </td>
//                         <td>
                        
//                     <button onClick={handleSubmitUpdate} className="w-full ml-3 bg-green-500 text-white  font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
//                         Update
//                     </button>
//                     </td>
//                     </tr>
                    
//                    </table>
                   
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Read;
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function Read() {
//     const [data, setData] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         navigate("/");
//     };

//     const handleSubmitUpdate = () => {
//         navigate("/update/" + id);
//     };

//     useEffect(() => {
//         axios
//             .get("http://localhost:3000/user/" + id)
//             .then(response => setData(response.data))
//             .catch(err => console.log(err));
//     }, [id]);

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
//             <div className="p-10 bg-white border border-gray-300 shadow-lg rounded-xl w-96 text-center">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>
//                 <div className="mb-4">
//                     <h2 className="text-lg font-semibold text-gray-700">Name</h2>
//                     <p className="text-gray-600 text-base">{data.name}</p>
//                 </div>
//                 <div className="mb-4">
//                     <h2 className="text-lg font-semibold text-gray-700">Email</h2>
//                     <p className="text-gray-600 text-base">{data.email}</p>
//                 </div>
//                 <div className="mb-4">
//                     <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
//                     <p className="text-gray-600 text-base">{data.phone}</p>
//                 </div>
//                 <div className="flex justify-center space-x-4 mt-6">
//                     <button 
//                         onClick={handleSubmit} 
//                         className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
//                         Home
//                     </button>
//                     <button 
//                         onClick={handleSubmitUpdate} 
//                         className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
//                         Update
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Read;
import axios from 'axios';
import { useEffect, useState } from 'react';
import "react-image-crop/dist/ReactCrop.css";
import { useNavigate, useParams } from 'react-router-dom';
import Profile from "./newFile/Profile";

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/home");
    };

    const handleSubmitUpdate = () => {
        navigate("/update/" + id);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/user/" + id)
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="p-10 bg-white border border-gray-300 shadow-lg rounded-xl w-96 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>
                <div >
                    <Profile>
                        
                    </Profile>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Name</h2>
                    <p className="text-gray-600 text-base">{data.name}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Email</h2>
                    <p className="text-gray-600 text-base">{data.email}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
                    <p className="text-gray-600 text-base">{data.phone}</p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                        Home
                    </button>
                    <button
                        onClick={handleSubmitUpdate}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Read;
