import { useEffect, useState } from "react";
import Wrapper from "../../../UX/Wrapper";
import { fetchCategory } from "../../../../supabase/supabaseFunctions";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategory = async () => { 
            const data = await fetchCategory('Category'); 
            if (data) {
                const keysArray = data.map(item => Object.keys(item)).flat();
                console.log(keysArray, 'keysarr');
                setCategories(keysArray);
            }
        };

        getCategory(); 
    }, []);

    return (
        <Wrapper type="sideBarItem">
            <ul className="text-sm h-full flex flex-wrap justify-start">
                {categories.map((category, index) => (
                    <li 
                        key={index} 
                        className="bg-[#f2f4ff] text-xs rounded-lg px-3 py-1.5 font-semibold text-[13px] leading-[19px] text-[#4661e6] mt-3 mr-3 cursor-pointer hover:bg-blue-200" 
                    >
                        {category} 
                    </li> 
                ))}
            </ul>
        </Wrapper>
    );
}

export default Category;
