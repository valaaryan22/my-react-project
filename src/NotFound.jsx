
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
            <p className="text-gray-600 mt-2">
                Sorry, the page you are looking for does not exist.
            </p>
           
        </div>
    );
};

export default NotFound;
