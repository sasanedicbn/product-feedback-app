import { useEffect, useState } from "react";
import Wrapper from "../../../UX/Wrapper";
import { fetchCategory } from "../../../../supabase/supabaseFunctions";
import SingleCategory from "../../../UX/SingleCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const data = await fetchCategory("Category");
      if (data) {
        const keysArray = data.map((item) => Object.values(item)).flat();
        setCategories(keysArray as any);
      }
    };

    getCategory();
  }, []);

  return (
    <Wrapper type="sideBarItem">
      <ul className="text-sm h-full flex flex-wrap justify-start">
        {categories.map((category, index) => (
          <SingleCategory key={index} category={category} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Category;
