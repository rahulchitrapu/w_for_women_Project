import React, { useEffect, useState } from 'react';

import "./Navbar.css";




function Navbar({searchvaluefunc,setLogin,login}) {
    // for search value
    const [search,setSearch]=useState('')
    //sending search value to app.js
    useEffect(()=>{
        searchvaluefunc(search)
    },[search,searchvaluefunc])
    
   const onclickHandler=()=>{
    setLogin(!login)
    window.localStorage.setItem('auth','false')
   }
    
    return (
        <div className='navbar'>
            
            <div>
                <img className='logo1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuN1sQD9K-LCEZ_yiDUEe29eRurjPKwJCX0sVXtYv7v-vX05EIhFFUgiYMtih0FcKCVI&usqp=CAU' alt='image_of_product'/>
            </div>
            <div>
                <ul className='main_list'>
                    <li className='list'><b>NEW IN</b></li>
                    <li className='list'><b>TOP WEAR    </b></li>
                    <li className='list'><b>BOTTOM WEAR</b></li>
                    <li className='list'><b>COSMETICS</b></li>
                    <li className='list'><b>FOOTWEAR</b></li>
                    <li className='list'><b>WINTER WEAR</b></li>
                    <li className='list' ><b>DRAPES</b></li>
                    <li className='list'><b>WISHFUL</b></li>
                    <li className='list'><b>SALE</b></li>
                </ul>
            </div>
            <div className='searchbardiv'>
                <div className='search'>
                    <input id='inputsearch' placeholder='search'  onChange={(e)=>{setSearch(e.target.value)}} type="text"></input>
                    <button id='searchbtn'>&#128269;</button>
                   
                </div>
               
            </div>
            <div className='right'>
                <button className='login' onClick={()=>onclickHandler()}>log out</button>
                {/* <button className='wishlist'><div style={{display:'flex1'}}><h1>♡</h1><p style={{color:'red'}}>0</p></div> </button> */}
                <button className='cart'>cart</button>
                {/* <span style={{color:"red"}}>0</span> */}
            </div>
            
        </div>
    );
}

export default Navbar;