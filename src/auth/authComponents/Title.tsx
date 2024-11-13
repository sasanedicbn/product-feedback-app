import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Get Started</h1>
            <p className="text-sm mt-2 text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
            </p>
        </div>
    );
};

export default Title;
