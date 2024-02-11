import { React, useState} from 'react';
import { Search } from './Search';
import Map from './Map';
import { Chart } from './Chart';
import { Navbar } from './Navbar';

export const Dashboard = () => {
  
  const [searchMade, setSearchMade] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const trigger = () => setSearchMade(true)

  const handleServiceClick = (event) => {
    event.preventDefault();
    const buttonValue = event.target.value;
    setSelectedService(buttonValue)
    trigger();
  };

  const getInsurance = (insurance) => {
    setSelectedInsurance(insurance)
  }

  const getHospital = (hospital) => {
    setSelectedHospital(hospital);
    console.log(hospital)
  }




// App.jsx
return (
  <>
    <Navbar />
    <div className="pt-[72px] md:pt-[48px] w-full"> 
      <div className='w-full flex flex-col'>
        <div className='bg-white'>
          <div className='flex flex-col items-center mx-auto w-3/4 h-full gap-8 p-8 pt-16'>
            <Search serviceClick={handleServiceClick}  getInsurance={getInsurance}/>

          </div>
        </div>
        {searchMade && 
        <div className='h-[75vh] flex flex-col lg:flex-row w-full'>
          <Map selectedService={selectedService} selectedInsurance={selectedInsurance} getHospital={getHospital} />
          {selectedHospital && <Chart selectedHospital={selectedHospital} selectedService={selectedService} selectedInsurance={selectedInsurance}/>}
        </div>
        
        }
      </div>
    </div>
  </>
);
};