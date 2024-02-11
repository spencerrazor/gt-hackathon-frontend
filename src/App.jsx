import { React, useState} from 'react';
import { Search } from './components/Search';
import Map from './components/Map';
import { Chart } from './components/Chart';
import { Navbar } from './components/Navbar';

const App = () => {
  
  const [searchMade, setSearchMade] = useState(false);
  const trigger = () => setSearchMade(true)

// App.jsx
return (
  <>
    <Navbar />
    <div className="pt-[72px] md:pt-[48px] w-full"> 
      <div className='w-full flex flex-col'>
        <div className='bg-white'>
          <div className='flex flex-col items-center mx-auto w-3/4 h-full gap-8 p-8 pt-16'>
            <Search trigger={trigger}/>

          </div>
        </div>
        <div className='h-[75vh] flex flex-col lg:flex-row w-full'>
          {searchMade && <Map />}
          {/* {searchMade && <Chart />} */}
        </div>
      </div>
    </div>
  </>
);
};

export default App;