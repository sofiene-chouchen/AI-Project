import { useState } from 'react';
import './index.css';
import Select from 'react-select';
import options from './ingredients.json';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');

  const onChange = (e: [string]) => {
    const values = e.map((item: string) => item.value);
    const joinedValues = values.join(' ');
    setData(joinedValues);
  };

  const sendData = () => {
    axios
      .get(`http://localhost:8000/?ingredients=${data}`)
      .then((response) => {
        setTitle(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  };

  return (
    <div className='container m-auto mt-8'>
      <h1 className='text-4xl font-bold mb-4 text-center mt-20'>
        Your Project Title
      </h1>

      <p className='text-lg mb-4 mt-10'>
        Choose your ingredients and click "Search" to see the result.
      </p>

      <div className='text-center'>
        <Select
          isMulti
          name='colors'
          options={options}
          placeholder='Select your ingredients'
          className='basic-multi-select text-center'
          classNamePrefix='select'
          onChange={onChange}
        />
      </div>

      <div className='text-center mt-4'>
        <button
          className='text-white rounded-md px-4 py-1 bg-blue-600'
          onClick={sendData}
        >
          Search
        </button>
      </div>

      {title && (
        <div className='bg-gray-300 bg-opacity-80 w-64 h-auto mt-8 rounded-md mx-auto p-4 flex flex-col items-center'>
          <h2 className='text-black text-lg font-bold mb-2'>Result:</h2>
          <p className='text-black text-center'>{title}</p>
        </div>
      )}
    </div>
  );
}

export default App;
