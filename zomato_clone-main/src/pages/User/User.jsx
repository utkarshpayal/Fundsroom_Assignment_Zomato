import css from './User.module.css'

import Navbar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import UserProfileRightsideBar from '../../components/UserProfileComponents/UserProfileRightsideBar/UserProfileRightsideBar'

import UserHero from '../../utils/UserProfileUtils/UserHero/UserHero'
import LeftSideCardPanel from '../../utils/Cards/LeftSideCardPanel/LeftSideCardPanel'

import userImg from '/images/koushil.jpg';

const User = () => {

    let data1 = [ 
        {title: "Reviews", hash: "reviews"},
        {title: "Bookmarks", hash: "bookmarks"},
    ];
    let data2 = [ 
        {title: "Order History", hash: "order-history"},
        {title: "My Address", hash: "my-address"},
    ];
    let data5 = [ 
        {title: "Yours Booking", hash: "bookings"},
    ];

   


  return (<div className={css.outerDiv}>
    <div className={css.navbar}>
      <Navbar />
    </div>
    <div className={css.box}>
      <UserHero />
      <div className={css.mainbody}>
        <div className={css.leftBox}>
          <LeftSideCardPanel name='ACTIVITY' data={data1} />
          <LeftSideCardPanel name='ONLINE ORDERING' data={data2} />
          <LeftSideCardPanel name='TABLE BOOKING' data={data5} />
        
        </div>
        <div className={css.rightBox}>
          <UserProfileRightsideBar />
        </div>
      </div>
    </div>
  </div>)
}

export default User