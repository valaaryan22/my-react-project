import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createUser } from './redux/userSlice';
import { signUpSchema } from "./schemas";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            conform_password: '',
            phone: ''
        },
        validationSchema: signUpSchema,
        onSubmit: async (values, action) => {
            try {
                await dispatch(createUser(values));
                navigate('/');
                window.location.reload(); 
            } catch (err) {
                console.log(err); 
            }
            action.resetForm(); 
        }
    });

    const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
    const labelCss = "block text-gray-700 font-medium mb-1";
    const inputCss = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
    const buttonCss = "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";
    const tableCellCss = "px-3 py-2";

    return (
        <>
            <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
                <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
                    <CardTitle>
                        <h1 className="text-2xl font-bold text-white">Register User</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="container mx-auto py-8">
                        <form className={formCss} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="name">Name:</Label>
                                <Input
                                    className={inputCss}
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? <p className="text-red-800">{errors.name}</p> : null}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="password">Password:</Label>
                                <Input
                                    className={inputCss}
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Password"
                                />
                                {errors.password && touched.password ? <p className="text-red-800">{errors.password}</p> : null}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="conform_password">Confirm Password:</Label>
                                <Input
                                    className={inputCss}
                                    type="password"
                                    name="conform_password"
                                    value={values.conform_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Confirm Password"
                                />
                                {errors.conform_password && touched.conform_password ? <p className="text-red-800">{errors.conform_password}</p> : null}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="email">Email:</Label>
                                <Input
                                    className={inputCss}
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Email"
                                />
                                {errors.email && touched.email ? <p className="text-red-800">{errors.email}</p> : null}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="phone">Phone:</Label>
                                <Input
                                    className={inputCss}
                                    type="tel"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Phone Number"
                                />
                                {errors.phone && touched.phone ? <p className="text-red-800">{errors.phone}</p> : null}
                            </div>

                            <div className="flex justify-center">
                                <table>
                                    <tr>
                                        <td className={tableCellCss}>
                                            <button className={buttonCss} onClick={() => navigate('/')}>Login</button>
                                        </td>
                                        <td className={tableCellCss}>
                                            <button type="submit" className={buttonCss}>Submit</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </form>
                    </div>
                </CardContent>
                <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
            </Card>
        </>
    );
}

export default Register;
