import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createEvent } from './redux/eventSlice'; // Assuming you have this Redux slice for event creation
import { signUpSchema } from "./schemas";

function Create() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [editorData, setEditorData] = useState('');

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: '',
            description: '',
            images: [],
        },
        validationSchema: signUpSchema,  // You can create a custom schema for event form validation
        onSubmit: async (values, action) => {
            try {
                const formData = new FormData();
                formData.append('title', values.title);
                formData.append('description', editorData);
                images.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });
                await dispatch(createEvent(formData)); // Assume you're handling form submission with Redux
                navigate('/home');
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

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files).slice(0, 5);  // Limit to 5 images
        setImages(selectedImages);
    };

    return (
        <>
            <Card className="border border-gray-200 shadow-2xl rounded-lg mx-auto mt-10 max-w-3xl">
                <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-t-lg">
                    <CardTitle>
                        <h1 className="text-2xl font-bold text-white">Create Event</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="container mx-auto py-8">
                        <form className={formCss} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="title">Event Title:</Label>
                                <Input
                                    className={inputCss}
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Event Title"
                                />
                                {errors.title && touched.title ? <p className="text-red-800">{errors.title}</p> : null}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="description">Event Description:</Label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={editorData}
                                    onChange={(event, editor) => {
                                        setEditorData(editor.getData());
                                    }}
                                    config={{
                                        toolbar: [
                                            'bold', 'italic', 'underline', 'link', 'bulletedList', 'numberedList',
                                            'blockQuote', 'insertTable', 'imageUpload'
                                        ],
                                    }}
                                />
                                {errors.description && touched.description ? <p className="text-red-800">{errors.description}</p> : null}
                            </div>

                            <div className="mb-6">
                                <Label className={labelCss} htmlFor="images">Event Images:</Label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png"
                                    onChange={handleImageChange}
                                />
                                {images.length > 0 && (
                                    <div className="mt-4">
                                        <h3>Selected Images:</h3>
                                        <ul>
                                            {images.map((image, index) => (
                                                <li key={index}>
                                                    <img src={URL.createObjectURL(image)} alt={`image-${index}`} width="100" />
                                                    <input
                                                        type="text"
                                                        name={`caption[${index}]`}
                                                        placeholder={`Caption for image ${index + 1}`}
                                                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center">
                                <table>
                                    <tr>
                                        <td className={tableCellCss}>
                                            <button className={buttonCss} onClick={() => navigate('/home')}>Home</button>
                                        </td>
                                        <td className={tableCellCss}>
                                            <button type="submit" name="submit" className={buttonCss}>Submit</button>
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

export default Create;
