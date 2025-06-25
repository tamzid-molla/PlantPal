import Banner from "../Components/Banner";
import Expert from "../Components/Expert";
import Achivments from "../Components/Achivments";
import NewPlants from "../Components/NewPlants";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [homeLoading, setHomeLoading] = useState(true);
  useEffect(() => {
    document.title = "PlantPal || Home";
    fetch("https://assignment-10-server-bice-tau.vercel.app/plants/recent")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setHomeLoading(false);
      })
      .catch((err) => {
        setHomeLoading(false);
      });
  }, []);
  return (
    <>
      {homeLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Banner></Banner>
          <NewPlants allData={allData}></NewPlants>
          <Expert></Expert>
          <Achivments></Achivments>
        </div>
      )}
    </>
  );
};

export default Home;
