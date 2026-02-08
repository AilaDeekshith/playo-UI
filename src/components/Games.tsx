import { useCallback, useEffect, useState } from 'react'
import badmintonImage from '../assets/images/badminton.png'

type Sport = {
  id: number
  name: string
  createAt: Date
}

const Games = () => {
  const [sports, setSports] = useState([])

  const fetchSports = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/sports/sports')
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }, [])
  useEffect(() => {
    fetchSports()?.then((data) => {
      if (data) {
        setSports(data?.data)
      }
    })
  }, [fetchSports])

  return (
    <>
      {sports?.length > 0 ? (
        <div className='container-fluid' style={{marginTop: '5%'}}>
          <div
            className='hide-scrollbar'
            style={{
              overflowX: 'auto',
              display: 'flex',
              justifyContent: 'space-around',
              gap: '2%',
              padding: '1%',
            }}
          >
            {sports.map((sport: Sport, index: number) => (
              <div className='col-2' key={index}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2%',
                    borderRadius: '10px',
                    gap: '10%',
                    border: '1px solid rgba(0,0,0,0.5)',
                  }}
                >
                  <img
                    src={badmintonImage}
                    alt={sport?.name}
                    style={{ width: '10%', height: '10%' }}
                  />
                  <h6 style={{ margin: '0', padding: '0', fontWeight: 'bold' }}>
                    {sport?.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading users...</p>
      )}

      <div>
        <h2>Games Page</h2>
      </div>
    </>
  )
}

export default Games
