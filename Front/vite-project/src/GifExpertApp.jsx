import PropTypes from 'prop-types';
import './App.css'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () =>{

  const [categories,setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories( list =>  [...list,category]);
  }

  
  return(
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory}></AddCategory>
      {
        categories.map(
          (category,key) => 
          {
            return <li key={key}>{category}</li>
          }
        )
      }
    </>
  )
  
}


