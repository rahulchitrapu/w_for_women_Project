import React from 'react';
import './ViewDetail.css';

function ViewDetail({setView,viewDetail}) {
    
    const sizeString=(str)=>{
        str=str.replaceAll('[',' ').replaceAll(']',' ')
        let arr=(str.split(','))
       

       return arr
   }
    return (
        <div>
            {viewDetail && <div className='viewdetails'>
                <h4 className='cancel' onClick={()=>{setView(false)}}>X</h4>
                <div className='details'>
                    <div className='view_image'>
                        <img src={viewDetail.image} alt=''/>
                    </div>
                    <div className='backgroundimage'>

                    
                        <div className='view_details' >
                            <h1>{viewDetail.name}</h1>
                            <h4>{`Price:  ${viewDetail.selling_price} /-`}</h4>
                            
                            <h4>{`Sizes Available: ${sizeString(viewDetail.size)}`}</h4>
                            {viewDetail.length && <h4>{`Length: ${viewDetail.length}`}</h4>}
                            {viewDetail.name_of_manufacturer && <h4>{`Manufacturer: ${viewDetail.name_of_manufacturer}`}</h4>}
                            {viewDetail.neck && <h4>{`Neck Type: ${viewDetail.neck}`}</h4>}
                            {viewDetail.description && <h3>{`Discription:    ${viewDetail.description}`}</h3>}
                        </div>
                    </div>

                   
                </div>
                
            </div>}
        </div>
    );
}

export default ViewDetail;