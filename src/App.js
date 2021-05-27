import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import Loader from './components/Loader'
import LocationMarker from './components/LocationMarker'
import Header from './components/Header'

const App = () => {

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axios
    .get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    .then((res) => {
      setData(res.data.events)
      setLoading(false)
    }).catch((err) => console.log(err))
  }, [])

  const position = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }
  
  const wildfires = data.filter((event) => event.categories[0].id === 8)

  if(loading){
    return <Loader />
  } else {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <Header />
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={position.center}
          defaultZoom={position.zoom}
        >
          {wildfires && wildfires.length > 0 ? (
            wildfires.map((loc, index) => (
              <LocationMarker
                key={index}
                lat={loc.geometries[0].coordinates[1]}
                lng={loc.geometries[0].coordinates[0]}
                title={loc.title}
              />
            ))
          ) : null }
        </GoogleMapReact>
        </div>
    )
  }
}

export default App
