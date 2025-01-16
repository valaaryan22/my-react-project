
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
//     CardTitle
// } from "@/components/ui/card";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function Update() {
//     const [values, setValue] = useState({
//         name: '',
//         email: '',
//         phone: ''
//     })
//     const navigate = useNavigate()
//     const { id } = useParams();
//     useEffect(() => {
//         axios.get("http://localhost:3000/user/" + id)
//             .then(response => setValue(response.data))
//             .catch(err => console.log(err));
//     }, [id]);
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const emaillReg = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
//         let isValid = true
//         if (!emaillReg.test(values.email)) {
//             isValid = false
//         }
//         else if (values.phone.length < 10) {
//             isValid = false
//         }
//         else if (values.phone.length > 10) {
//             isValid = false

//         }
//         else if (values.name.length === 0) {
//             isValid = false
//         }
//         if (isValid) {
//             axios.put("http://localhost:3000/user/" + id, values)
//                 .then(response => console.log(response.data))
//                 .catch(err => console.log(err));
//             navigate('/')
//             window.location.reload();
//         }
//         else {
//             alert("Update proper values")
//         }

//     }
//     const handleSubmitHome = () => {
//         navigate("/")
//     }
//     const formCss = "bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto"
//     const lableCss = "block text-gray-700 font-medium mb-2"
//     const inputCss = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//     const buttonCss = "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"

//     return (<>
        
//         <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
//             <CardHeader className="text-center bg-blue-100 py-4 rounded-t-lg">
//                 <CardTitle>
//                     <h1 className="text-2xl font-bold text-gray-800">Update User</h1>
//                 </CardTitle>
//             </CardHeader>
//             <CardContent>
//                 <div className="container m-8 p-10 flex-auto">
//                     <form

//                         action=""
//                         className={formCss}
//                     >
//                         <div className="mb-4">
//                             <label
//                                 className={lableCss}
//                                 htmlFor="Name"
//                             >
//                                 Name:
//                             </label>
//                             <input
//                                 className={inputCss}
//                                 type="text"
//                                 name="Name"
//                                 value={values.name}
//                                 onChange={e => setValue({
//                                     ...values, name: e.target.value
//                                 })}
//                                 placeholder="Enter Name"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 className={lableCss}
//                                 htmlFor="Email"

//                             >
//                                 Email:
//                             </label>
//                             <input
//                                 className={inputCss}
//                                 type="email" name="Email"
//                                 value={values.email}
//                                 onChange={e => setValue({
//                                     ...values, email: e.target.value
//                                 })}
//                                 placeholder="Enter Email"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 className={lableCss}
//                                 htmlFor="Phone"
//                             >
//                                 Phone:
//                             </label>
//                             <input
//                                 className={inputCss}
//                                 type="tel"
//                                 name="Phone"
//                                 value={values.phone}
//                                 onChange={e => setValue({
//                                     ...values, phone: e.target.value
//                                 })}
//                                 placeholder="Enter Phone Number"
//                             />
//                         </div>

//                         <table className='content-center' >
//                             <tr>
//                                 <td className='m-1 p-5'>
//                                     <button onClick={handleSubmitHome} className={buttonCss}>
//                                         Home
//                                     </button>

//                                 </td>
//                                 <td>
//                                     <button
//                                         className={buttonCss}
//                                         value="submit"
//                                         onClick={handleSubmit}
//                                     >
//                                         Update
//                                     </button>

//                                 </td>
//                             </tr>

//                         </table>
//                     </form>
//                 </div>
//             </CardContent>
//             <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
//         </Card>
//     </>

//     )
// }

// // export default Update
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
//     CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function Update() {
//     const [values, setValues] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         axios
//             .get(`http://localhost:3000/user/${id}`)
//             .then((response) => setValues(response.data))
//             .catch((err) => console.error(err));
//     }, [id]);

//     const validate = () => {
//         const emailReg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//         const phoneReg = /^[0-9]{10}$/;
//         let newErrors = {};

//         if (!values.name.trim()) {
//             newErrors.name = "Name is required.";
//         }

//         if (!emailReg.test(values.email)) {
//             newErrors.email = "Invalid email format.";
//         }

//         if (!phoneReg.test(values.phone)) {
//             newErrors.phone = "Phone number must be 10 digits.";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (validate()) {
//             axios
//                 .put(`http://localhost:3000/user/${id}`, values)
//                 .then((response) => {
//                     console.log(response.data);
//                     navigate("/");
//                     window.location.reload();
//                 })
//                 .catch((err) => console.error(err));
//         } else {
//             alert("Please correct the highlighted errors.");
//         }
//     };

//     const handleBackHome = () => {
//         navigate("/");
//     };

//     const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
//     const labelCss = "block text-gray-700 font-medium mb-1";
//     const inputCss =
//         "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
//     const buttonCss =
//         "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";

//     return (
//         <>
//             <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
//                 <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
//                     <CardTitle>
//                         <h1 className="text-2xl font-bold text-white">Update User</h1>
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="container mx-auto py-8">
//                         <form className={formCss} onSubmit={handleSubmit}>
//                             <div className="mb-6">
//                                 <Label className={labelCss} htmlFor="Name">
//                                     Name:
//                                 </Label>
//                                 <Input
//                                     className={inputCss}
//                                     type="text"
//                                     name="Name"
//                                     value={values.name}
//                                     onChange={(e) =>
//                                         setValues({ ...values, name: e.target.value })
//                                     }
//                                     placeholder="Enter Name"
//                                 />
//                                 {errors.name && (
//                                     <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                                 )}
//                             </div>
//                             <div className="mb-6">
//                                 <Label className={labelCss} htmlFor="Email">
//                                     Email:
//                                 </Label>
//                                 <Input
//                                     className={inputCss}
//                                     type="email"
//                                     name="Email"
//                                     value={values.email}
//                                     onChange={(e) =>
//                                         setValues({ ...values, email: e.target.value })
//                                     }
//                                     placeholder="Enter Email"
//                                 />
//                                 {errors.email && (
//                                     <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                                 )}
//                             </div>
//                             <div className="mb-6">
//                                 <Label className={labelCss} htmlFor="Phone">
//                                     Phone:
//                                 </Label>
//                                 <Input
//                                     className={inputCss}
//                                     type="tel"
//                                     name="Phone"
//                                     value={values.phone}
//                                     onChange={(e) =>
//                                         setValues({ ...values, phone: e.target.value })
//                                     }
//                                     placeholder="Enter Phone Number"
//                                 />
//                                 {errors.phone && (
//                                     <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                                 )}
//                             </div>
//                             <div className="flex justify-center gap-4">
//                                 <button type="button" onClick={handleBackHome} className={buttonCss}>
//                                     Back Home
//                                 </button>
//                                 <button type="submit" className={buttonCss}>
//                                     Update
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </CardContent>
//                 <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
//             </Card>
//         </>
//     );
// }

// export default Update;

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => setValues(response.data))
            .catch((err) => console.error(err));
    }, [id]);

    const validate = () => {
        const emailReg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        const phoneReg = /^[0-9]{10}$/;
        let newErrors = {};

        if (!values.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!emailReg.test(values.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!phoneReg.test(values.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            axios
                .put(`http://localhost:3000/user/${id}`, values)
                .then((response) => {
                    console.log(response.data);
                    navigate("/");
                    window.location.reload();
                })
                .catch((err) => console.error(err));
        } else {
            alert("Please correct the highlighted errors.");
        }
    };

    const handleBackHome = () => {
        navigate("/");
    };

    const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
    const labelCss = "block text-gray-700 font-medium mb-1";
    const inputCss =
        "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
    const buttonCss =
        "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";

    return (
        <>
            <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
                <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
                    <CardTitle>
                        <h1 className="text-2xl font-bold text-white">Update User</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="container mx-auto py-8">
                        <form className={formCss} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="Name">
                                    Name:
                                </Label>
                                <Input
                                    className={inputCss}
                                    type="text"
                                    name="Name"
                                    value={values.name}
                                    onChange={(e) =>
                                        setValues({ ...values, name: e.target.value })
                                    }
                                    placeholder="Enter Name"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="Email">
                                    Email:
                                </Label>
                                <Input
                                    className={inputCss}
                                    type="email"
                                    name="Email"
                                    value={values.email}
                                    onChange={(e) =>
                                        setValues({ ...values, email: e.target.value })
                                    }
                                    placeholder="Enter Email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="Phone">
                                    Phone:
                                </Label>
                                <Input
                                    className={inputCss}
                                    type="tel"
                                    name="Phone"
                                    value={values.phone}
                                    onChange={(e) =>
                                        setValues({ ...values, phone: e.target.value })
                                    }
                                    placeholder="Enter Phone Number"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>
                            <div className="flex justify-center gap-4">
                                <button type="button" onClick={handleBackHome} className={buttonCss}>
                                    Back Home
                                </button>
                                <button type="submit" className={buttonCss}>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </CardContent>
                <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
            </Card>
        </>
    );
}

export default Update;
