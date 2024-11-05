import { useEffect, useState } from "react";
import Wrapper from "../../../UX/Wrapper";
import { fetchCategory } from "../../../../supabase/supabaseFunctions";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategory = async () => { 
            const data = await fetchCategory('Category'); 
            if (data) {
                const valuesArray = data.map(item => Object.values(item)); // Izvlači vrednosti
                setCategories(valuesArray);
            }
        };

        getCategory(); 
    }, []);

    return (
        <Wrapper type="sideBarItem" className="bg-light-blue-100 p-4">
            <p>Category</p>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category.join(', ')}</li> // Prikazuje vrednosti kao tekst
                ))}
            </ul>
        </Wrapper>
    );
}

export default Category;
