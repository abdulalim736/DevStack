
import { Suspense } from 'react';
import Banner from './components/Banner';
import Navber from './components/Navber';
import Technologies from './components/Technologies/Technologies';
import type { Technology } from './Types';
import Sidebar from './components/Technologies/Sidebar';

const technologiesFetch = async (): Promise<Technology[]> => {
  const res = await fetch('./JsonData/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Navber />
      <Banner />
      <main>
        <section className='container mx-auto px-12 py-6'>
          <div className='flex justify-between'>
            <div>
              <Suspense fallback={<div><h1>Loading...</h1></div>}>
                <Technologies technologiesPromise={technologiesPromise} />
              </Suspense>
            </div>
            <div>
              <Sidebar
                stack={[]}
                handleRemoveFromStack={() => {}}
                handleRemoveAll={() => {}}
              />
            </div>
          </div>
        </section>
      </main>


    </>
  );
}

export default App;
