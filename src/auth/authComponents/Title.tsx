import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Title = () => {
    const titleArr = ['Geet Started'];
    const [title, setTitle] = useState('');

    useEffect(() => {
        const letters = titleArr[0].split('');
        let index = 0;

        const interval = setInterval(() => {
            setTitle(prevTitle => prevTitle + letters[index]);
            index++;

            if (index === letters.length -1) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">
                {title.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: -20 }}  
                        animate={{ opacity: 1, y: 0 }}    
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </h1>
            <p className="text-sm mt-2 text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
            </p>
        </div>
    );
};

export default Title;
