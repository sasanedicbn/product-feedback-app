const Textarea = ({ placeholder, rows = 3, additionalStyles = "" }) => {
    const baseStyles = "w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500";

    return (
        <textarea
            className={`${baseStyles} ${additionalStyles}`}
            rows={rows}
            placeholder={placeholder}
        />
    );
};

export default Textarea;
