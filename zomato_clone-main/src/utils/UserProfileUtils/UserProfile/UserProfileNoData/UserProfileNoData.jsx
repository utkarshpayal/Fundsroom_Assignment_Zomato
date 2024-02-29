import { useState, useEffect } from "react";

import css from "./UserProfileNoData.module.css";

import {
  reviewPage,
  bookmarksPage,
  orderhistoryPage,
  myaddressPage,
} from "../../../../helpers/constants";

import photos from "/icons/nophotos.png";
import bookmarks from "/icons/nobookmarks.png";

import reservations from "/icons/noreservations.png";

const UserProfileNoData = ({ hashId }) => {
  let [page, setPage] = useState(photos);

  useEffect(() => {
    switch (hashId) {
      case reviewPage:
        setPage(photos);
        break;

      case bookmarksPage:
        setPage(bookmarks);
        break;

      case orderhistoryPage:
        setPage(reservations);
        break;
      case myaddressPage:
        setPage(reservations);
        break;

      default:
        null;
    }
  }, [hashId]);

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.imgBox}>
          <img src={page} className={css.img} />
          <div className={css.txt}>Nothing here yet!</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileNoData;
