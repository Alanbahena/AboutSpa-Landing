import React from "react";
import ReactMapGL, {
  Marker,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import location from "../../assets/images/location-icon.png";
import phone from "../../assets/images/phone-icon.png";
import clock from "../../assets/images/clock-icon.png";

import clasess from "./Contact.module.scss";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; // eslint-disable-line

const Contact = () => {
  const token = process.env.REACT_APP_MAPBOX_KEY;
  const longitude = -117.02593334086971;
  const latitude = 32.529973628248555;
  const zoom = 13;

  return (
    <div className={clasess.container} id="#contact">
      <div className={clasess["container-text"]}>
        <h2>CONTACT US</h2>
        <div className={clasess["container-text__box"]}>
          <img src={location} alt="Location Icon"></img>
          <span>
            Paseo de los Héroes #9211, Local 108. Edicifio Xtal, Zona Urbano
            Rio, 22020 Tijuana, B.C.
          </span>
        </div>
        <div className={clasess["container-text__box"]}>
          <img src={phone} alt="Location Icon"></img>
          <span>
            +52 663 3218 306 <br></br>
            619 706 0205
          </span>
        </div>
        <div className={clasess["container-text__box"]}>
          <img src={clock} alt="Location Icon"></img>
          <span>
            Monday - Friday | 10am - 5pm <br></br>
            Saturdays | 9am - 5pm <br></br>
            Sundays | 10am - 2pm
          </span>
        </div>
      </div>
      <div className={clasess["container-map"]}>
        <ReactMapGL
          initialViewState={{
            longitude,
            latitude,
            zoom,
          }}
          mapboxAccessToken={token}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Marker
            longitude={longitude}
            latitude={latitude}
            color="purple"
          ></Marker>
          <NavigationControl position="bottom-right" />
          <GeolocateControl />
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Contact;
