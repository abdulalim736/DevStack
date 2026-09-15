
import { Suspense } from 'react';
import './App.css';
import Banner from './components/Banner';
import Navber from './components/Navber';
import type { iDeveloper } from './devtype';
import Developers from './components/Technologies/Developers';


const developersFetch = async (): Promise<iDeveloper[]> => {
  const res = await fetch("./JsonData/data.json");
  const data = await res.json();
  return data;
}

function App() {

  const developersPromise = developersFetch();
  return (
    <>
      <Navber />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Developers developersPromise={developersPromise} />
      </Suspense>
    </>
  )
}

export default App
