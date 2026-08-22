import "./css/app.css";
import CoverSection from "./component/CoverSection";
import CoupleSection from "./component/CoupleSection";
import EventSection from "./component/EventSection";
import MusicPlayer from "./component/MusicPlayer";
import React from "react";
import ThreePhotoSection from "./component/ThreePhotoSection";
import WishFormSection from "./component/WishFormSection";
import WeddingGiftSection from "./component/WeddingGiftSection";
import { CONTACT_INFO } from "./constants/weddingData";
import WeddingAlbumSection from "./component/WeddingAlbumSection";
import WishCarousel from "./component/WishCarousel";

export default function App() {
  const [list, setList] = React.useState(false);
  return (
    <>
      <MusicPlayer />
      <WishCarousel  />
      <div className="app">
        <CoverSection />
        <CoupleSection />
        <EventSection />
        <ThreePhotoSection />
        <WishFormSection />
        <WeddingGiftSection />
        <WeddingAlbumSection />
      </div>
      <h3 style={{ textAlign: "center" }}>Rất vui khi được đón tiếp Quý Vị</h3>
      {/* <p style={{ textAlign: "center" }}>
        {CONTACT_INFO.BRIDE.name}: {CONTACT_INFO.BRIDE.phone}{" "}
        {CONTACT_INFO.GROOM.name}: {CONTACT_INFO.GROOM.phone}
      </p> */}
    </>
  );
}
