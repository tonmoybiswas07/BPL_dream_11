import { Suspense } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import type TPlayers from "./type";

const playerPromise = async (): Promise<TPlayers[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <Suspense fallback={<h2>Player data loading .......</h2>}>
        <Players playerPromise={playerPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
