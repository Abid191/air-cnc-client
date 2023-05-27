import React from "react";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <div>
      <>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
          {categories?.map((item) => (
            <CategoryBox key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Categories;
