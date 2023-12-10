import { useState } from 'react';
import './index.css';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'tomato', label: 'tomato' },
];


function App() {
  const [data , setData] = useState('');
  console.log(data);
  
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
            
          />
        </div>
        <div className='text-center'>
          <button className='text-white rounded-md px-4 py-1 bg-blue-600 mt-3'>
            Recherche
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
