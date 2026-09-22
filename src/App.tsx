

import 'react-toastify/dist/ReactToastify.css';
import Navber from './components/Navber';
import Banner from './components/Banner';
import Footer from './components/Footer';
import TechList from './components/Technologies/TechList';
import Sidebar from './components/Technologies/Sidebar';
import { Suspense, useState } from 'react';
import type { Technology } from './Types';

const techDataFetch = async () => {
  const res = await fetch('/public/JsonData/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const [stack, setStack] = useState<any[]>([]);
  const technologiesPromise = techDataFetch();

  const handleAddToStack = (technology: Technology) => {
    setStack((prevStack) =>
      prevStack.some((item) => item?.id === technology?.id)
        ? prevStack
        : [...prevStack, technology]
    );
  };

  const handleRemoveFromStack = (technologyId: string) => {
    setStack((prevStack) =>
      prevStack.filter((item) => item?.id !== technologyId)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="font-sans text-gray-800">
      <Navber />
      <Banner />
      <main>

        <section className=" container mx-auto px-12 py-6 flex justify-between items-center">

          <div className='grid grid-cols-4 '>
            <Suspense fallback={<div>Loading Data...</div>}>
              <TechList
                technologiesPromise={technologiesPromise}
                stack={stack}
                handleAddToStack={handleAddToStack}
              />
            </Suspense>

            <Sidebar
              stack={stack}
              handleRemoveFromStack={handleRemoveFromStack}
              handleRemoveAll={handleRemoveAll}
            />
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
