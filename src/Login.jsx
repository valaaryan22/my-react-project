import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosHttp from "./utils/axios";

function Login() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        axiosHttp.get("/user")
            .then(response => setUsers(response.data))
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    const validateForm = () => {
        const errors = {};
        if (!formValues.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Please enter a valid email.";
        }

        if (!formValues.password) {
            errors.password = "Password is required.";
        } else if (formValues.password.length < 6) {
            errors.password = "Password must be at least 6 characters long.";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: "" }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        const user = users.find(
            user => user.email === formValues.email && user.password === formValues.password
        );

        if (user) {
            localStorage.setItem("log",true)
            alert(`Welcome, ${user.name}!`);
            navigate("/home");
        } else {
            alert("Invalid email or password. Please try again.");
        }
        setIsSubmitting(false);
    };

    return (
        <Card className="border border-gray-300 shadow-lg rounded-lg mx-auto mt-16 max-w-md">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 py-4 rounded-t-lg">
                <CardTitle className="text-center">
                    <h1 className="text-2xl font-bold text-white">Login</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-6">
                            <Label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email:
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password:
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
                                    isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                                }`}
                            >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-700">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="text-blue-500 hover:underline font-semibold"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </CardContent>
            <CardFooter className="bg-gray-100 py-3 rounded-b-lg"></CardFooter>
        </Card>
    );
}

export default Login;