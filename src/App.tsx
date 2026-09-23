

import 'react-toastify/dist/ReactToastify.css';
import Navber from './components/Navber';
import Banner from './components/Banner';
import Footer from './components/Footer';
import TechList from './components/Technologies/TechList';
import Sidebar from './components/Technologies/Sidebar';
import { Suspense, useState } from 'react';
import type { Technology } from './Types';
import { toast } from 'react-toastify';

const techDataFetch = async () => {
  const res = await fetch('/public/JsonData/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const [stack, setStack] = useState<Technology[]>([]);
  const technologiesPromise = techDataFetch();



  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.find((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Item removed from stack");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="font-sans text-gray-800">
      <Navber />
      <Banner />
      <main>

        <section className=" container mx-auto px-12 py-6 items-center">

          <div className='mb-10'>
            <h1 className='text-[30px] font-bold'>Explore the <span className='text-brand-gradient'>Technologies</span></h1>
            <p className='text-[#475569]'>Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className='grid grid-cols-4 gap-5'>
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
