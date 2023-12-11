import { useState } from 'react';
import './index.css';
import Select from 'react-select';
import options from './ingredients.json';

function App() {
  const [data, setData] = useState({});
  console.log(data);

  const onChange = (e: object) => {
    setData(e);
  };

  const sendData = () => {
    console.log(data);
  };
  return (
    <div className=''>
      <div className='container m-auto mt-36 '>
        <div className=''>
          <Select
            isMulti
            name='colors'
            options={options}
            placeholder='select  your ingredients'
            className='basic-multi-select text-center'
            classNamePrefix='select'
            onChange={onChange}
          />
        </div>
        <div className='text-center'>
          <button
            className='text-white rounded-md px-4 py-1 bg-blue-600 mt-3'
            onClick={sendData}
          >
            Recherche
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
