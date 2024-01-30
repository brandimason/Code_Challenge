import { useEffect, useState } from 'react';
import SkiResortTile from './components/SkiResortTile';
import Modal from './components/Modal';
import Header from './components/Header';
import { ThreeCircles } from 'react-loader-spinner';

function fetchData() {
  return fetch('http://127.0.0.1:5000/')
    .then((res) => {
      return res.json()
    })
}

function App() {
  const [listSkiResorts, setListSkiResorts] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(()=>{
    fetchData()
      .then((res) => {
        setIsLoaded(true)
        setListSkiResorts(res.resorts.data.map((resort) => 
          <SkiResortTile name={resort.name} region={resort.region} country={resort.country} weather={resort.weather} />
        
        ))
      })
  },[])

  return (
    isLoaded === true ? 
      <div>
        <Header/>
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {listSkiResorts}
            <Modal/>
          </div>
      </div> :
      <div className='flex justify-center items-center h-screen w-screen'>
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#0000CD"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass="" 
        />
      </div>
      
  );
}

export default App;