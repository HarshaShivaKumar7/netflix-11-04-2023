import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/featured/uvwzff0j1u9i4otf.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">KGF Chapter 2</h1>
        <div className="banner__buttons">
          <button className="banner__button">PLay</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
          accusamus tempore exercitationem deleniti tenetur ex maxime cumque
          autem voluptas.
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
