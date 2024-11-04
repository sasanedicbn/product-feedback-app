import { useEffect } from "react";
import Wrapper from "../../../UX/Wrapper";
import { fetchCategory } from "../../../../supabase/supabaseFunctions";

const Category = () => {

    useEffect(() => {
        const getCategory = async () => { 
            const data = await fetchCategory('Category'); 
            console.log(data, 'category'); 
        };

        getCategory(); 
    }, []);

    return (
        <Wrapper type="sideBarItem">
            <p>Category</p>
    
        </Wrapper>
    );
}

export default Category;
