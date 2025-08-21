import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLocation } from "../../actions/location";
import Meteo from "../../components/meteo";
import { motion } from "framer-motion";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        axios
          .get(
            `${process.env.REACT_APP_API_ENDPOINT}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          )
          .then((res) => {
            dispatch(setLocation(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      });
      // dispatch(setLocation({ coord: { lon: 2.361, lat: 48.8637 }, weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" },], base: "stations", main: { temp: 23.94, feelsLike: 23.98, tempMin: 23.16, tempMax: 25.4, pressure: 1011, humidity: 61, seaLevel: 1011, grndLevel: 1001, }, visibility: 10000, wind: { speed: 5.14, deg: 190 }, clouds: { all: 0 }, dt: 1755622911, sys: { type: 2, id: 2012208, country: "FR", sunrise: 1755578944, sunset: 1755629977, }, timezone: 7200, id: 2978048, name: "Saint-Merri", cod: 200, }))
    }, 1750);
  }, [dispatch]);

  const city = useSelector((state) => state.location.currentCity);

  const [bgImg, setBgImg] = useState(null);

  if (city) {
    import(`../../assets/meteo/${city.bgImg}`).then((module) => {
      setBgImg(module.default);
    });
  }

  return (
    <>
      {city && bgImg && (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 1.6, ease: "easeInOut" }}
        >
          <img className="hero" src={bgImg} alt="" />
          <Meteo />
        </motion.div>
      )}
    </>
  );
};

export default Home;
