
import React from 'react'
import {CategoryInfos} from "./CategoryFullInfos";
import CategoryCard from './CategoryCard';
import classes from "./Category.module.css"


function Category() {
  return (
    <section className={classes.category__container}>
      {
        CategoryInfos.map((infos)=>(
            <CategoryCard data = {infos} />
        ))}
    </section>

  )
}

export default Category