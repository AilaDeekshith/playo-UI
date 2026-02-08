import { useCallback, useEffect, useState } from 'react'
import cricketImage from '../assets/images/cricket.jpeg'

type Venue = {
  createdAt: Date
  id: number
  name: string
  latitude: number
  longitude: number
}

export const Venues = () => {
  const [venues, setVenues] = useState<Venue[]>([])

  const fetchVenues = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/venues/venues')
      // console.log('Fetched venues response:', await response.json())
      const data = await response.json()
      console.log('Fetched venues data:', data?.data)
      return data?.data
    } catch (error) {
      console.error('Error fetching venues:', error)
    }
  }, [])

  useEffect(() => {
    fetchVenues()
      ?.then((data) => setVenues(data))
      ?.catch((error) => console.error(error))
  }, [fetchVenues])

  return (
    <div className='container-fluid' style={{ margin: '7% 0% 5% 0%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '5% 2%',
        }}
      >
        {venues?.map((venue: Venue) => (
          <div
            key={venue.id}
            style={{
              borderRadius: '10px',
              boxShadow: '0 0px 5px 2px rgba(0,0,0,0.2)',
              padding: '1vh',
            }}
          >
            <div
              style={{
                backgroundImage: `url(${cricketImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '16 / 9',
                width: '100%',
                borderRadius: '10px',
              }}
            />
            <div
              style={{
                margin: '0%',
                padding: '2% 0%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p style={{ fontWeight: 'bold', fontSize:'2vh' }}>{venue.name}</p>
                <p>Kondapur</p>
              </div>
              <div style={{ padding: '2%', display: 'flex', gap: '5%' }}>
                <p style={{ fontWeight: 'bold', color: 'green' }}>4.5</p>
                <p>(120)</p>
              </div>
            </div>
            <hr style={{ margin: '0%', padding: '0%' }}></hr>
            <div style={{ paddingTop: '2%', display: 'flex', justifyContent: 'space-between', fontSize:'1.8vh' }}>
              <p>Pricing starts from</p>
              <p style={{fontWeight:'bold'}}>INR 600 onwards</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
