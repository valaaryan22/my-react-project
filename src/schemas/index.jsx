import * as Yup from 'yup'
export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Name is required"),
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(8).required("Password required"),
    conform_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must be same"),
    phone:Yup.string().min(10).max(10).required("Phone number is required"),

})