import { React, useState} from 'react';
import { Search } from './Search';
import Map from './Map';
import { Chart } from './Chart';
import { Navbar } from './Navbar';

export const Dashboard = () => {
  
  const [searchMade, setSearchMade] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState({"insurance_name": 'No Insurance Other', "id": 68});
  const [selectedHospital, setSelectedHospital] = useState(null);
  const trigger = () => setSearchMade(true)

  // const handleServiceClick = (event) => {
  //   event.preventDefault();
  //   const buttonValue = event.target.value;
  //   console.log(event)
  //   setSelectedService(buttonValue)
  //   trigger();
  // };

  const getService = (service) => {
    console.log(service)
    setSelectedService(service)
  }

  const getInsurance = (insurance) => {
    setSelectedInsurance(insurance)
  }

  const getHospital = (hospital) => {
    setSelectedHospital(hospital);
    console.log(hospital)
  }




// App.jsx
// return (
//   <>
//     <Navbar />
//     <div className="pt-[72px] md:pt-[48px] w-full h-[calc(100vh - 48px)]"> 
//     <div className="flex flex-col h-full">
//           <div className='basis-1 flex flex-col items-center mx-auto w-3/4 h-full gap-8 p-8 pt-16'>
//             <Search serviceClick={handleServiceClick}  getInsurance={getInsurance}/>
//           </div>
//         {searchMade ?
//         <div className='h-[75vh] flex flex-col lg:flex-row w-full'>
//           <Map selectedService={selectedService} selectedInsurance={selectedInsurance} getHospital={getHospital} />
//           {selectedHospital && <Chart selectedHospital={selectedHospital} selectedService={selectedService} selectedInsurance={selectedInsurance}/>}
//         </div>
//         :
//         <div className="h-full">hi</div>
//         }
//     </div>
//     </div>
//   </>
// );

return (
    <div className="flex flex-col h-screen">
    <Navbar />
    <div className="flex-grow pt-[72px] md:pt-[48px] w-full">
    <div className='basis-1 mx-auto w-3/4 h-full gap-8 p-8 pt-16'>
            <Search getService={getService}  getInsurance={getInsurance}/>
          </div>
        {selectedService &&
        <div className='h-[75vh] flex flex-col lg:flex-row w-full'>
          <Map selectedService={selectedService} selectedInsurance={selectedInsurance} getHospital={getHospital} />
          {selectedHospital && <Chart selectedHospital={selectedHospital} selectedService={selectedService} selectedInsurance={selectedInsurance}/>}
        </div>
        }
    </div>
  </div>
)
};
