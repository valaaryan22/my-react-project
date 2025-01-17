// // // import {
// // //     Card,
// // //     CardContent,
// // //     CardFooter,
// // //     CardHeader,
// // //     CardTitle
// // // } from "@/components/ui/card";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import axios from "axios";
// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // function Create() {
// // //     const [value, setValue] = useState({
// // //         name: "",
// // //         email: "",
// // //         phone: "",
// // //     });
// // //     const navigate = useNavigate();

// // //     const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
// // //     const labelCss = "block text-gray-700 font-medium mb-1";
// // //     const inputCss =
// // //         "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
// // //     const buttonCss =
// // //         "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";
// // //     const tableCellCss = "px-3 py-2";

// // //     const handleSubmitHome = () => {
// // //         navigate("/");
// // //     };

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();
// // //         const emailReg = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
// // //         let isValid = true;

// // //         if (!emailReg.test(value.email)) {
// // //             isValid = false;
// // //         } else if (value.phone.length < 10 || value.phone.length > 10) {
// // //             isValid = false;
// // //         } else if (value.name.length === 0) {
// // //             isValid = false;
// // //         }

// // //         if (isValid) {
// // //             axios
// // //                 .post("http://localhost:3000/user", value)
// // //                 .then((response) => {
// // //                     console.log(response);
// // //                     navigate("/");
// // //                     window.location.reload();
// // //                 })
// // //                 .catch((err) => console.log(err));
// // //         } else {
// // //             alert("Please insert valid values");
// // //         }
// // //     };

// // //     return (
// // //         <>
// // //             <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
// // //                 <CardHeader className="text-center bg-blue-100 py-4 rounded-t-lg">
// // //                     <CardTitle>
// // //                         <h1 className="text-2xl font-bold text-gray-800">Add User</h1>
// // //                     </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                     <div className="container mx-auto py-8">
// // //                         <form className={formCss}>
// // //                             <div className="mb-6">
// // //                                 <Label className={labelCss} htmlFor="Name">
// // //                                     Name:
// // //                                 </Label>
// // //                                 <Input
// // //                                     className={inputCss}
// // //                                     type="text"
// // //                                     name="Name"
// // //                                     onChange={(e) =>
// // //                                         setValue({ ...value, name: e.target.value })
// // //                                     }
// // //                                     placeholder="Enter Name"
// // //                                 />
// // //                             </div>
// // //                             <div className="mb-6">
// // //                                 <Label className={labelCss} htmlFor="Email">
// // //                                     Email:
// // //                                 </Label>
// // //                                 <Input
// // //                                     className={inputCss}
// // //                                     type="email"
// // //                                     name="Email"
// // //                                     onChange={(e) =>
// // //                                         setValue({ ...value, email: e.target.value })
// // //                                     }
// // //                                     placeholder="Enter Email"
// // //                                 />
// // //                             </div>
// // //                             <div className="mb-6">
// // //                                 <Label className={labelCss} htmlFor="Phone">
// // //                                     Phone:
// // //                                 </Label>
// // //                                 <Input
// // //                                     className={inputCss}
// // //                                     type="tel"
// // //                                     name="Phone"
// // //                                     onChange={(e) =>
// // //                                         setValue({ ...value, phone: e.target.value })
// // //                                     }
// // //                                     placeholder="Enter Phone Number"
// // //                                 />
// // //                             </div>
// // //                             <div className="flex justify-center">
// // //                                 <table>
// // //                                     <tr>
// // //                                         <td className={tableCellCss}>
// // //                                             <button
// // //                                                 onClick={handleSubmitHome}
// // //                                                 className={buttonCss}
// // //                                             >
// // //                                                 Home
// // //                                             </button>
// // //                                         </td>
// // //                                         <td className={tableCellCss}>
// // //                                             <button
// // //                                                 className={buttonCss}
// // //                                                 value="submit"
// // //                                                 onClick={handleSubmit}
// // //                                             >
// // //                                                 Submit
// // //                                             </button>
// // //                                         </td>
// // //                                     </tr>
// // //                                 </table>
// // //                             </div>
// // //                         </form>
// // //                     </div>
// // //                 </CardContent>
// // //                 <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
// // //             </Card>
// // //         </>
// // //     );
// // // }

// // // export default Create;  
// // // import {
// // //     Card,
// // //     CardContent,
// // //     CardFooter,
// // //     CardHeader,
// // //     CardTitle
// // // } from "@/components/ui/card";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import axios from "axios";
// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // function Create() {
// // //     const [value, setValue] = useState({
// // //         name: "",
// // //         email: "",
// // //         phone: "",
// // //     });
// // //     const navigate = useNavigate();

// // //     const handleSubmitHome = () => {
// // //         navigate("/");
// // //     };

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();
// // //         const emailReg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
// // //         let isValid = true;

// // //         if (!emailReg.test(value.email)) {
// // //             isValid = false;
// // //         } else if (value.phone.length !== 10) {
// // //             isValid = false;
// // //         } else if (value.name.trim() === "") {
// // //             isValid = false;
// // //         }

// // //         if (isValid) {
// // //             axios
// // //                 .post("http://localhost:3000/user", value)
// // //                 .then((response) => {
// // //                     console.log(response);
// // //                     navigate("/");
// // //                     window.location.reload();
// // //                 })
// // //                 .catch((err) => console.log(err));
// // //         } else {
// // //             alert("Please insert valid values");
// // //         }
// // //     };

// // //     return (
// // //         <>
// // //             <Card className="border border-gray-300 shadow-lg rounded-lg mx-auto mt-10 max-w-2xl">
// // //                 <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-6 rounded-t-lg">
// // //                     <CardTitle>
// // //                         <h1 className="text-3xl font-bold text-white">Add User</h1>
// // //                     </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                     <div className="container mx-auto py-8">
// // //                         <form className="space-y-6">
// // //                             <div>
// // //                                 <Label className="block text-gray-700 font-semibold mb-2" htmlFor="Name">
// // //                                     Name
// // //                                 </Label>
// // //                                 <Input
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                                     type="text"
// // //                                     name="Name"
// // //                                     onChange={(e) =>
// // //                                         setValue({ ...value, name: e.target.value })
// // //                                     }
// // //                                     placeholder="Enter Name"
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <Label className="block text-gray-700 font-semibold mb-2" htmlFor="Email">
// // //                                     Email
// // //                                 </Label>
// // //                                 <Input
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                                     type="email"
// // //                                     name="Email"
// // //                                     onChange={(e) =>
// // //                                         setValue({ ...value, email: e.target.value })
// // //                                     }
// // //                                     placeholder="Enter Email"
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <Label className="block text-gray-700 font-semibold mb-2" htmlFor="Phone">
// // //                                     Phone
// // //                                 </Label>
// // //                                 <Input
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                                     type="tel"
// // //                                     name="Phone"
// // //                                     onChange={(e) =>
// // //                                         setValue({ ...value, phone: e.target.value })
// // //                                     }
// // //                                     placeholder="Enter Phone Number"
// // //                                 />
// // //                             </div>
// // //                             <div className="flex justify-between mt-6">
// // //                                 <button
// // //                                     onClick={handleSubmitHome}
// // //                                     className="w-1/3 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // //                                 >
// // //                                     Home
// // //                                 </button>
// // //                                 <button
// // //                                     className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //                                     onClick={handleSubmit}
// // //                                 >
// // //                                     Submit
// // //                                 </button>
// // //                             </div>
// // //                         </form>
// // //                     </div>
// // //                 </CardContent>
// // //                 <CardFooter className="bg-gray-100 py-4 rounded-b-lg text-center">
// // //                     <p className="text-sm text-gray-500">Fill the form to add a new user</p>
// // //                 </CardFooter>
// // //             </Card>
// // //         </>
// // //     );
// // // }

// // // export default Create;
// // import {
// //     Card,
// //     CardContent,
// //     CardFooter,
// //     CardHeader,
// //     CardTitle
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import axios from "axios";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Create() {
// //     const [value, setValue] = useState({
// //         name: "",
// //         email: "",
// //         phone: "",
// //     });
// //     const [errors, setErrors] = useState({});
// //     const navigate = useNavigate();

// //     const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
// //     const labelCss = "block text-gray-700 font-medium mb-1";
// //     const inputCss =
// //         "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
// //     const buttonCss =
// //         "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";
// //     const tableCellCss = "px-3 py-2";

// //     const handleSubmitHome = () => {
// //         navigate("/");
// //     };

// //     const validate = () => {
// //         const emailReg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
// //         const phoneReg = /^[0-9]{10}$/;
// //         let newErrors = {};

// //         if (!value.name.trim()) {
// //             newErrors.name = "Name is required.";
// //         }

// //         if (!emailReg.test(value.email)) {
// //             newErrors.email = "Invalid email format.";
// //         }

// //         if (!phoneReg.test(value.phone)) {
// //             newErrors.phone = "Phone number must be 10 digits.";
// //         }

// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();

// //         if (validate()) {
// //             axios
// //                 .post("http://localhost:3000/user", value)
// //                 .then((response) => {
// //                     console.log(response);
// //                     navigate("/");
// //                     window.location.reload();
// //                 })
// //                 .catch((err) => console.log(err));
// //         } else {
// //             console.log("Validation errors", errors);
// //         }
// //     };

// //     return (
// //         <>
// //             <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
// //                 <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
// //                     <CardTitle>
// //                         <h1 className="text-2xl font-bold text-white">Add User</h1>
// //                     </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                     <div className="container mx-auto py-8">
// //                         <form className={formCss}>
// //                             <div className="mb-6">
// //                                 <Label className={labelCss} htmlFor="Name">
// //                                     Name:
// //                                 </Label>
// //                                 <Input
// //                                     className={inputCss}
// //                                     type="text"
// //                                     name="Name"
// //                                     value={value.name}
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, name: e.target.value })
// //                                     }
// //                                     placeholder="Enter Name"
// //                                 />
// //                                 {errors.name && (
// //                                     <p className="text-red-500 text-sm mt-1">{errors.name}</p>
// //                                 )}
// //                             </div>
// //                             <div className="mb-6">
// //                                 <Label className={labelCss} htmlFor="Email">
// //                                     Email:
// //                                 </Label>
// //                                 <Input
// //                                     className={inputCss}
// //                                     type="email"
// //                                     name="Email"
// //                                     value={value.email}
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, email: e.target.value })
// //                                     }
// //                                     placeholder="Enter Email"
// //                                 />
// //                                 {errors.email && (
// //                                     <p className="text-red-500 text-sm mt-1">{errors.email}</p>
// //                                 )}
// //                             </div>
// //                             <div className="mb-6">
// //                                 <Label className={labelCss} htmlFor="Phone">
// //                                     Phone:
// //                                 </Label>
// //                                 <Input
// //                                     className={inputCss}
// //                                     type="tel"
// //                                     name="Phone"
// //                                     value={value.phone}
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, phone: e.target.value })
// //                                     }
// //                                     placeholder="Enter Phone Number"
// //                                 />
// //                                 {errors.phone && (
// //                                     <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
// //                                 )}
// //                             </div>
// //                             <div className="flex justify-center">
// //                                 <table>
// //                                     <tr>
// //                                         <td className={tableCellCss}>
// //                                             <button
// //                                                 onClick={handleSubmitHome}
// //                                                 className={buttonCss}
// //                                             >
// //                                                 Home
// //                                             </button>
// //                                         </td>
// //                                         <td className={tableCellCss}>
// //                                             <button
// //                                                 className={buttonCss}
// //                                                 value="submit"
// //                                                 onClick={handleSubmit}
// //                                             >
// //                                                 Submit
// //                                             </button>
// //                                         </td>
// //                                     </tr>
// //                                 </table>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </CardContent>
// //                 <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
// //             </Card>
// //         </>
// //     );
// // }

// // export default Create;
// // import {
// //     Card,
// //     CardContent,
// //     CardFooter,
// //     CardHeader,
// //     CardTitle
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import axios from "axios";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Create() {
// //     const [value, setValue] = useState({
// //         name: "",
// //         email: "",
// //         phone: "",
// //     });
// //     const navigate = useNavigate();

// //     const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
// //     const labelCss = "block text-gray-700 font-medium mb-1";
// //     const inputCss =
// //         "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
// //     const buttonCss =
// //         "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";
// //     const tableCellCss = "px-3 py-2";

// //     const handleSubmitHome = () => {
// //         navigate("/");
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         const emailReg = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
// //         let isValid = true;

// //         if (!emailReg.test(value.email)) {
// //             isValid = false;
// //         } else if (value.phone.length < 10 || value.phone.length > 10) {
// //             isValid = false;
// //         } else if (value.name.length === 0) {
// //             isValid = false;
// //         }

// //         if (isValid) {
// //             axios
// //                 .post("http://localhost:3000/user", value)
// //                 .then((response) => {
// //                     console.log(response);
// //                     navigate("/");
// //                     window.location.reload();
// //                 })
// //                 .catch((err) => console.log(err));
// //         } else {
// //             alert("Please insert valid values");
// //         }
// //     };

// //     return (
// //         <>
// //             <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
// //                 <CardHeader className="text-center bg-blue-100 py-4 rounded-t-lg">
// //                     <CardTitle>
// //                         <h1 className="text-2xl font-bold text-gray-800">Add User</h1>
// //                     </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                     <div className="container mx-auto py-8">
// //                         <form className={formCss}>
// //                             <div className="mb-6">
// //                                 <Label className={labelCss} htmlFor="Name">
// //                                     Name:
// //                                 </Label>
// //                                 <Input
// //                                     className={inputCss}
// //                                     type="text"
// //                                     name="Name"
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, name: e.target.value })
// //                                     }
// //                                     placeholder="Enter Name"
// //                                 />
// //                             </div>
// //                             <div className="mb-6">
// //                                 <Label className={labelCss} htmlFor="Email">
// //                                     Email:
// //                                 </Label>
// //                                 <Input
// //                                     className={inputCss}
// //                                     type="email"
// //                                     name="Email"
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, email: e.target.value })
// //                                     }
// //                                     placeholder="Enter Email"
// //                                 />
// //                             </div>
// //                             <div className="mb-6">
// //                                 <Label className={labelCss} htmlFor="Phone">
// //                                     Phone:
// //                                 </Label>
// //                                 <Input
// //                                     className={inputCss}
// //                                     type="tel"
// //                                     name="Phone"
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, phone: e.target.value })
// //                                     }
// //                                     placeholder="Enter Phone Number"
// //                                 />
// //                             </div>
// //                             <div className="flex justify-center">
// //                                 <table>
// //                                     <tr>
// //                                         <td className={tableCellCss}>
// //                                             <button
// //                                                 onClick={handleSubmitHome}
// //                                                 className={buttonCss}
// //                                             >
// //                                                 Home
// //                                             </button>
// //                                         </td>
// //                                         <td className={tableCellCss}>
// //                                             <button
// //                                                 className={buttonCss}
// //                                                 value="submit"
// //                                                 onClick={handleSubmit}
// //                                             >
// //                                                 Submit
// //                                             </button>
// //                                         </td>
// //                                     </tr>
// //                                 </table>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </CardContent>
// //                 <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
// //             </Card>
// //         </>
// //     );
// // }

// // export default Create;  
// // import {
// //     Card,
// //     CardContent,
// //     CardFooter,
// //     CardHeader,
// //     CardTitle
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import axios from "axios";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Create() {
// //     const [value, setValue] = useState({
// //         name: "",
// //         email: "",
// //         phone: "",
// //     });
// //     const navigate = useNavigate();

// //     const handleSubmitHome = () => {
// //         navigate("/");
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         const emailReg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
// //         let isValid = true;

// //         if (!emailReg.test(value.email)) {
// //             isValid = false;
// //         } else if (value.phone.length !== 10) {
// //             isValid = false;
// //         } else if (value.name.trim() === "") {
// //             isValid = false;
// //         }

// //         if (isValid) {
// //             axios
// //                 .post("http://localhost:3000/user", value)
// //                 .then((response) => {
// //                     console.log(response);
// //                     navigate("/");
// //                     window.location.reload();
// //                 })
// //                 .catch((err) => console.log(err));
// //         } else {
// //             alert("Please insert valid values");
// //         }
// //     };

// //     return (
// //         <>
// //             <Card className="border border-gray-300 shadow-lg rounded-lg mx-auto mt-10 max-w-2xl">
// //                 <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-indigo-500 py-6 rounded-t-lg">
// //                     <CardTitle>
// //                         <h1 className="text-3xl font-bold text-white">Add User</h1>
// //                     </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                     <div className="container mx-auto py-8">
// //                         <form className="space-y-6">
// //                             <div>
// //                                 <Label className="block text-gray-700 font-semibold mb-2" htmlFor="Name">
// //                                     Name
// //                                 </Label>
// //                                 <Input
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                                     type="text"
// //                                     name="Name"
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, name: e.target.value })
// //                                     }
// //                                     placeholder="Enter Name"
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <Label className="block text-gray-700 font-semibold mb-2" htmlFor="Email">
// //                                     Email
// //                                 </Label>
// //                                 <Input
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                                     type="email"
// //                                     name="Email"
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, email: e.target.value })
// //                                     }
// //                                     placeholder="Enter Email"
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <Label className="block text-gray-700 font-semibold mb-2" htmlFor="Phone">
// //                                     Phone
// //                                 </Label>
// //                                 <Input
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                                     type="tel"
// //                                     name="Phone"
// //                                     onChange={(e) =>
// //                                         setValue({ ...value, phone: e.target.value })
// //                                     }
// //                                     placeholder="Enter Phone Number"
// //                                 />
// //                             </div>
// //                             <div className="flex justify-between mt-6">
// //                                 <button
// //                                     onClick={handleSubmitHome}
// //                                     className="w-1/3 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
// //                                 >
// //                                     Home
// //                                 </button>
// //                                 <button
// //                                     className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                                     onClick={handleSubmit}
// //                                 >
// //                                     Submit
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </CardContent>
// //                 <CardFooter className="bg-gray-100 py-4 rounded-b-lg text-center">
// //                     <p className="text-sm text-gray-500">Fill the form to add a new user</p>
// //                 </CardFooter>
// //             </Card>
// //         </>
// //     );
// // }

// // export default Create;
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
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Create() {
//     const [value, setValue] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
//     const labelCss = "block text-gray-700 font-medium mb-1";
//     const inputCss =
//         "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
//     const buttonCss =
//         "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";
//     const tableCellCss = "px-3 py-2";

//     const handleSubmitHome = () => {
//         navigate("/");
//     };

//     const validate = () => {
//         const emailReg = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//         const phoneReg = /^[0-9]{10}$/;
//         let newErrors = {};

//         if (!value.name.trim()) {
//             newErrors.name = "Name is required.";
//         }

//         if (!emailReg.test(value.email)) {
//             newErrors.email = "Invalid email format.";
//         }

//         if (!phoneReg.test(value.phone)) {
//             newErrors.phone = "Phone number must be 10 digits.";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (validate()) {
//             axios
//                 .post("http://localhost:3000/user", value)
//                 .then((response) => {
//                     console.log(response);
//                     navigate("/");
//                     window.location.reload();
//                 })
//                 .catch((err) => console.log(err));
//         } else {
//             console.log("Validation errors", errors);
//         }
//     };

//     return (
//         <>
//             <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
//                 <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
//                     <CardTitle>
//                         <h1 className="text-2xl font-bold text-white">Add User</h1>
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="container mx-auto py-8">
//                         <form className={formCss}>
//                             <div className="mb-6">
//                                 <Label className={labelCss} htmlFor="Name">
//                                     Name:
//                                 </Label>
//                                 <Input
//                                     className={inputCss}
//                                     type="text"
//                                     name="Name"
//                                     value={value.name}
//                                     onChange={(e) =>
//                                         setValue({ ...value, name: e.target.value })
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
//                                     value={value.email}
//                                     onChange={(e) =>
//                                         setValue({ ...value, email: e.target.value })
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
//                                     value={value.phone}
//                                     onChange={(e) =>
//                                         setValue({ ...value, phone: e.target.value })
//                                     }
//                                     placeholder="Enter Phone Number"
//                                 />
//                                 {errors.phone && (
//                                     <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                                 )}
//                             </div>
//                             <div className="flex justify-center">
//                                 <table>
//                                     <tr>
//                                         <td className={tableCellCss}>
//                                             <button
//                                                 onClick={handleSubmitHome}
//                                                 className={buttonCss}
//                                             >
//                                                 Home
//                                             </button>
//                                         </td>
//                                         <td className={tableCellCss}>
//                                             <button
//                                                 className={buttonCss}
//                                                 value="submit"
//                                                 onClick={handleSubmit}
//                                             >
//                                                 Submit
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </form>
//                     </div>
//                 </CardContent>
//                 <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
//             </Card>
//         </>
//     );
// }

// export default Create;