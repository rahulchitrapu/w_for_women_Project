
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidemenu from './components/Sidemenu/Sidemenu';
import Homepage from './components/Homepage/Homepage';
import ViewDetail from './components/Card/ViewDetail';
import { useState,useEffect } from 'react';
import Nodata from './components/Homepage/Nodata';
import Loading from './components/Homepage/Loading';

import Loginpage from './components/Homepage/Loginpage';



function App() {
  //for search value
  const [searchedValue,setSearchvalue]=useState('');

  // for taking data from api
  const [data,setData]=useState([]);

  // for string attched to api
  const [filter,setFilter]=useState('')

  const [loading,setLoading]=useState(false)
  const [viewDetail,setViewDetail]=useState({})
  const [view,setView]=useState(false)
  const [responsive,setResponsive]=useState(false)
  const [login,setLogin]=useState(true)
  
  //for what are filters to aplied to api
  const [appliedFilters,setAppliedFilters]=useState([]);
  // initial stage of filter object
  const [mainState, setMainState] = useState({
    priceFilter: [],
    occasionFilter: [],
    sizeFilter:[],
    colorFilter:[]
  });
  // to clear all aplied filters 
  const clearFilter=()=>{
    const obj={
      priceFilter: [],
      occasionFilter: [],
      sizeFilter:[],
      colorFilter:[]
    }
    setMainState(obj)
    setFilter('')
  }


  // for make a string by using all the filters
  const filterString=(obj)=>{
    const array=Object.keys(obj);
    let string="";
    //here array1 is used for showing applied filters
    let array1=[];
    array.forEach((e)=>{
      
      // here e will be element in array
      obj[e].forEach((ele)=>{
        if(e==="colorFilter"){
          string+=`color-${ele},`
          array1.push(`Color:${ele}`)

        }
        if(e==="priceFilter"){
          string+=`selling_price-${ele},`
          array1.push(`Price:${ele}`)
        }
        if(e==="sizeFilter"){
          string+=`size-${ele},`
          array1.push(`Size:${ele}`)
        }
        if(e==="occasionFilter"){
          string+=`occasion-${ele},`
          array1.push(`Occasion:${ele}`)

        }
        //if you unchecked all the filters
        if(obj[e].length===0){
          string+=''
        }
        
      })
    })
    //this is for applied filters
    setAppliedFilters(array1)
    //remove last character from string
    return(string.slice(0,string.length-1))
  }
  useEffect(()=>{
    if(window.localStorage.getItem('auth')==='true'){
      setLogin(false)
    }
  },[])


  //useEffect for fetching 
    useEffect(()=>{
        const dataFetching=async()=>{
          
          const api= await fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=${filter}`)
          const fetchedData=await api.json()
          setData(fetchedData.result.products);
          let filteredString=filterString(mainState)
          setFilter(filteredString)
          setLoading(true)
        }
        
        dataFetching();
        
        
        
        
    },[mainState,filter,login])



  //for taking search value from Navbar
  const searchvaluefunc=(value)=>{
      setSearchvalue(value)
  }
  
  const onclickHandler=()=>{
    
    setResponsive(!responsive)
  }
  

  return (
    <div >
        {login ?<Loginpage setLogin={setLogin}/>:
         <div >
          <Navbar searchvaluefunc={searchvaluefunc} login={login} setLogin={setLogin} /> 
        
        
          <div className={login?'loginpage':null}>
            {data ?<div>{view ?<ViewDetail viewDetail={viewDetail} setView={setView}/>:<div>{loading ? <Homepage searchedValue={searchedValue} setViewDetail={setViewDetail} setView={setView} data={data}/>:<Loading/>}</div>}</div>:<Nodata/>}
            <div className='sidemenu_app' >{view===false  && <Sidemenu setMainState={setMainState} clearFilter={clearFilter} appliedFilters={appliedFilters} />}</div>
            {<div className='button'><button onClick={onclickHandler}>{responsive===false?'☰':<div style={{color:"red"}}>X</div>}</button></div>}
            {responsive && <div>{view===false  && <Sidemenu setMainState={setMainState} clearFilter={clearFilter} appliedFilters={appliedFilters} />}</div>}
          </div>
        </div>}
      
       
     
    </div>
  );
}

export default App;
