import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import css from "./UserProfileRightsideBar.module.css";

import {
  bookmarksPage,
  orderhistoryPage,
  myaddressPage,
  bookingsPage,
} from "../../../helpers/constants";

import ImgSrc from "/images/proandproplus.jpg";

import UserReviewedCard from "../../../utils/UserProfileUtils/UserProfile/Activity/UserReviewedCard/UserReviewedCard";

import UserBookmarks from "../../../utils/UserProfileUtils/UserProfile/Activity/UserBookmarks/UserBookmarks";

import OrderHistory from "../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/OrderHistory/OrderHistory";
import MyAddresses from "../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/MyAddresses/MyAddresses";
import YoursBooking from "../../../utils/UserProfileUtils/UserProfile/TableBooking/YoursBooking/YoursBooking";

let UserProfileRightsideBar = () => {
  let [currComp, setCurrComp] = useState(<h1>Some thing Went Wrong!</h1>);

  let { userId, hashId } = useParams();

  let data = [
    {
      imgSrc: ImgSrc,
      title: "Paradise Biryani",
      address: "Jhunjhunu, Raj",
      stars: 5,
      days: 10,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: ImgSrc,
      userId: userId,
    },
   
    {
      imgSrc: ImgSrc,
      title: "Desi Kabab",
      address: "Jhunjhunu, Rah",
      stars: 5,
      days: 1,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: ImgSrc,
      userId: userId,
    },
    {
      imgSrc: ImgSrc,
      title: "Churma Dal",
      address: "Hisar, Haryana",
      stars: 5,
      days: 6,
      votes: 100,
      comments: 21,
      id: 124,
      userImg: ImgSrc,
      userId: userId,
    },
  ];

  useEffect(() => {
    switch (hashId) {
      case bookmarksPage:
        setCurrComp(<UserBookmarks hashId={hashId} />);
        break;

      case orderhistoryPage:
        setCurrComp(<OrderHistory hashId={hashId} />);
        break;
      case myaddressPage:
        setCurrComp(<MyAddresses hashId={hashId} />);
        break;

      case bookingsPage:
        setCurrComp(<YoursBooking hashId={hashId} />);
        break;
      default:
        setCurrComp(
          data?.map((val, index) => {
            return <UserReviewedCard data={val} key={index} />;
          })
        );
    }
  }, [hashId]);

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.title}>Reviews</div>
        <div className={css.contectBox}>{currComp}</div>
      </div>
    </div>
  );
};

export default UserProfileRightsideBar;
