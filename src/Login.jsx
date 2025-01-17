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
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);

    const validate = () => {
        const errors = {};
        if (!formValues.email) errors.email = "Email is required.";
        if (!formValues.password) errors.password = "Password is required.";
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const user = data.find(
            user => user.email === formValues.email && user.password === formValues.password
        );

        if (user) {
            alert(`Welcome, ${user.name}!`);
            navigate("/");
        } else {
            alert("Invalid email or password.");
        }
    };

    const formCss = "bg-gray-50 p-8 rounded-lg shadow-md max-w-lg mx-auto";
    const labelCss = "block text-gray-700 font-medium mb-1";
    const inputCss = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200";
    const buttonCss = "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200";

    return (
        <>
            <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
                <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
                    <CardTitle>
                        <h1 className="text-2xl font-bold text-white">Login</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="container mx-auto py-8">
                        <form className={formCss} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="email">Email:</Label>
                                <Input
                                    className={inputCss}
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                />
                                {errors.email && <p className="text-red-800">{errors.email}</p>}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="password">Password:</Label>
                                <Input
                                    className={inputCss}
                                    type="password"
                                    name="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    placeholder="Enter Password"
                                />
                                {errors.password && <p className="text-red-800">{errors.password}</p>}
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className={buttonCss}>Login</button>
                            </div>
                        </form>
                    </div>
                </CardContent>
                <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
            </Card>
        </>
    );
}

export default Login;
