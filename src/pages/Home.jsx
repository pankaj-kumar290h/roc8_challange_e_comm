import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import {AllProducts} from "../constant/baseUrl"
import "../styles/homePage.scss"
import Loader from '../components/util/Loader'
import { useSelector,useDispatch } from 'react-redux'
import { addProduct } from '../store/action/productAction'
const Home = () => {
    
    const [searchQuery,setSearchQuery] =useState("");
    const dispatch = useDispatch();
    const data = useSelector(e=>e.AllProducts);
    


    useEffect(()=>{
        fetch(AllProducts).then(data=>data.json())
        .then(data=>{
          dispatch(addProduct(data))
          
        }).catch(err=>console.log(err))

    },[])
    
    const handleSearch = (e)=>{
      setSearchQuery(e.target.value);

    }

    if(!data.length) return <Loader/>

  return (<>
  <div className='search'>
    <input placeholder='Search' onChange={handleSearch} type={"text"}/>
  </div>

    <div className='all_Product_display'>
      {/* render search query result or render all data*/}
      { searchQuery.length?data.filter(e=>e.title.toLowerCase().includes(searchQuery)).map(e=> <Card key={crypto.randomUUID()} props={e}/>) : data.map(e=> <Card key={crypto.randomUUID()} props={e}/>)}</div>
  </>
  )
}

export default Home