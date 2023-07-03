import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [movies,setMovies]=useState([])
useEffect(()=>{
getallmovie()
},[])
const getallmovie=async()=>{
  const response=await axios({url:"http://localhost:4000/movie/",method:"GET"})
  setMovies(response.data)
}
  return (
    <div className="App">
     {
      movies[0]&&movies.map((item)=>{
        return(
          <div className='card'>
          <h4 className='title'>
          Movie Name: {item?.name}
          </h4>
          <p className='rating'>Rating: {item.rating}</p>
          <p className='releasedate'>Releaseddate: {item.releaseddate} </p>
          </div>
        )

      })
     }
    </div>
  );
}

export default App;
