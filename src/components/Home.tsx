import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import sportImg1 from '../assets/images/xhmn_ai39_230329.jpg'
import sportImg2 from '../assets/images/american-football-american-football-player-professional-sport-stadium.jpg'
import sportImg3 from '../assets/images/Soccer ball on green field with goal in background Stock-Foto.jpeg'
import fire from '../assets/images/Decorate laptops, Hydro Flasks, cars and more with….jpeg'
import games from '../assets/images/6403767.jpg'
import trainer from '../assets/images/999r_x1rw_160425.jpg'
import venue from '../assets/images/331927-P9V519-667.jpg'
import group from '../assets/images/group.jpg'
import sports from '../assets/images/rhvo_pebx_230329.jpg'

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <div style={{ marginBottom: '5%' }}>
      <div
        style={{
          marginTop: '2%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            margin: '5%',
            textAlign: 'center',
            width: '150vh',
            height: '50vh',
            alignContent: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
          }}
        >
          <Slider {...settings}>
            <div>
              <img
                src={sportImg1}
                style={{
                  width: '100%',
                  height: '50vh',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
                alt='slide'
              />
            </div>
            <div>
              <img
                src={sportImg2}
                style={{
                  width: '100%',
                  height: '50vh',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
                alt='slide'
              />
            </div>
            <div>
              <img
                src={sportImg3}
                style={{
                  width: '100%',
                  height: '50vh',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
                alt='slide'
              />
            </div>
          </Slider>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0%',
        }}
      >
        <div
          style={{
            backgroundColor: 'blue',
            width: '40%',
            borderRadius: '2vh',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            padding: '0%',
          }}
        >
          <p
            style={{
              color: 'white',
              padding: '2%',
              margin: '0%',
              fontSize: '2.5vh',
            }}
          >
            Link your Google Fit
          </p>
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: '2vh',
              alignItems: 'center',
              display: 'flex',
              padding: '2%',
            }}
          >
            <div
              style={{
                width: '20%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0%',
              }}
            >
              <img
                src={fire}
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
                alt='slide'
              />
            </div>
            <div style={{ width: '80%', padding: '0%' }}>
              <p style={{ fontWeight: 'bold', fontSize: '2vh', padding: '0%' }}>
                SET YOUR WEEKLY GOAL!
              </p>
              <p>
                Set a goal for yourself and track your progress on a weekly
                basis
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5%',
          gap: '3%',
        }}
      >
        <div
          style={{
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '1vh',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2%',
            padding: '1%',
            width: '20%',
          }}
        >
          <div
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2', gridRowEnd: '3' }}
          >
            <h6 style={{ textAlign: 'start', fontWeight: 'bold' }}>Games</h6>
            <p>Join games. Meet players</p>
          </div>
          <img src={games} style={{ width: '80%', gridArea: '2/2/3/3' }} />
        </div>
        <div
          style={{
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '1vh',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2%',
            padding: '1%',
            width: '20%',
          }}
        >
          <div
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2', gridRowEnd: '3' }}
          >
            <h6 style={{ textAlign: 'start', fontWeight: 'bold' }}>Groups</h6>
            <p>Find your play tribe.</p>
          </div>
          <img src={group} style={{ width: '70%', gridArea: '2/2/3/3' }} />
        </div>
        <div
          style={{
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '1vh',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2%',
            padding: '1%',
            width: '20%',
          }}
        >
          <div
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2', gridRowEnd: '3' }}
          >
            <h6 style={{ textAlign: 'start', fontWeight: 'bold' }}>Trainers</h6>
            <p>Train with the best</p>
          </div>
          <img src={trainer} style={{ width: '25%', gridArea: '2/2/3/3' }} />
        </div>
        <div
          style={{
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '1vh',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2%',
            padding: '1%',
            width: '20%',
          }}
        >
          <div
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2', gridRowEnd: '3' }}
          >
            <h6 style={{ textAlign: 'start', fontWeight: 'bold' }}>Venues</h6>
            <p>Book turfs. Save big</p>
          </div>
          <img src={venue} style={{ width: '50%', gridArea: '2/2/3/3' }} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginBottom: '5%',
            gap: '20%',
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '1vh',
            padding: '1%',
            width: '70%',
          }}
        >
          <div>
            <h3>GAMETIME BY PLAYO</h3>
            <p>100+ games in your city</p>
          </div>
          <img src={sports} style={{ width: '25%' }} />
        </div>
      </div>
    </div>
  )
}

export default Home
