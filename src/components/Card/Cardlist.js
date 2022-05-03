import React from 'react';

import Card from './Card';
import "./Cardlist.css";

function Cardlist({filteredData,setViewDetail,setView}) {

    return (
        <div className='cardList'>
           {    
              filteredData.map((product)=>{
                  return <Card key={product.id_product} setView={setView} setViewDetail={setViewDetail} product={product}/>
              }) 
           }
          
        </div>
    );
}

export default Cardlist;