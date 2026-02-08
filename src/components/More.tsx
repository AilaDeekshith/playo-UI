import playPalsIcon from '../assets/images/user.png';
import LogoutIcon from '../assets/images/exit.png';
import SupportIcon from '../assets/images/support.png';
import InviteIcon from '../assets/images/surprise.png';
import BlogIcon from '../assets/images/schedule.png';
import OfferIcon from '../assets/images/discount.png';
import BookingIcon from '../assets/images/book.png';
import PassbookIcon from '../assets/images/passbook.png';
import PrivacyIcon from '../assets/images/privacy.png'

export const More = () => {
  return (
    <div>
      <div
        style={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '7% 20% 5% 20%',
          boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
          borderRadius: '10px',
          fontSize: '2vh',
          gap: '3vh',
          padding: '2vh',
        }}
      >
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={BookingIcon} style={{height: '4%', width:'4%', padding:'0', margin:'0'}} alt="Playpals" />
          <div>
            <h6 style={{padding:'0', margin:'0'}}>My Bookings</h6>
            <p style={{padding:'0', margin:'0'}}>View Transactions & Receipts</p>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={playPalsIcon} style={{height: '4%', width:'4%', padding:'0', margin:'0'}} alt="Playpals" />
          <div>
            <h6 style={{padding:'0', margin:'0'}}>Playpals</h6>
            <p style={{padding:'0', margin:'0'}}>View & manage Players</p>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={PassbookIcon} style={{height: '4%', width:'4%', padding:'0', margin:'0'}} alt="Playpals" />
          <div>
            <h6 style={{padding:'0', margin:'0'}}>Passbook</h6>
            <p style={{padding:'0', margin:'0'}}>Manage Karma, Playo credits, etc</p>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={PrivacyIcon} style={{height: '4%', width:'4%', padding:'0', margin:'0'}} alt="Playpals" />
          <div>
            <h6 style={{padding:'0', margin:'0'}}>Preference and Privacy</h6>
            <p style={{padding:'0', margin:'0'}}>Sports, Locations, Notifications, etc</p>
          </div>
        </div>
      </div>
      <div style={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '7% 20% 5% 20%',
          boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
          borderRadius: '10px',
          fontSize: '2vh',
          gap: '3vh',
          padding: '2vh',
        }}>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={OfferIcon} style={{height: '3%', width:'3%', color:'green', padding:'0', margin:'0'}} alt="Playpals" />
          <div style={{margin:'0', padding:'0'}}>
            <h6 style={{padding:'0', margin:'0'}}>Offers</h6>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={BlogIcon} style={{height: '3%', width:'3%', color:'green', padding:'0', margin:'0'}} alt="Playpals" />
          <div style={{margin:'0', padding:'0'}}>
            <h6 style={{padding:'0', margin:'0'}}>Blogs</h6>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={InviteIcon} style={{height: '3%', width:'3%', color:'green', padding:'0', margin:'0'}} alt="Playpals" />
          <div style={{margin:'0', padding:'0'}}>
            <h6 style={{padding:'0', margin:'0'}}>Invite & Earn</h6>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={SupportIcon} style={{height: '3%', width:'3%', color:'green', padding:'0', margin:'0'}} alt="Playpals" />
          <div style={{margin:'0', padding:'0'}}>
            <h6 style={{padding:'0', margin:'0'}}>Help & Support</h6>
          </div>
        </div>
        <div style={{ padding: '2%', display: 'flex', alignContent:'center', gap: '2%', justifyItems:'center' }}>
          <img src={LogoutIcon} style={{height: '3%', width:'3%', color:'green', padding:'0', margin:'0'}} alt="Playpals" />
          <div style={{margin:'0', padding:'0'}}>
            <h6 style={{padding:'0', margin:'0'}}>Logout</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
