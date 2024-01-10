import { useEffect, useState } from 'react';
import './index.css';
import Select from 'react-select';
import options from './ingredients.json';
import axios from 'axios';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const onChange = (e: [string]) => {
    const values = e.map((item: string) => item.value);
    setIngredients(values);
    const joinedValues = values.join(' ');
    setData(joinedValues);
  };

  const sendData = () => {
    axios
      .get(`http://localhost:8000/?ingredients=${data}`)
      .then(async (response) => {
        setTitle(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  };
  const search = async (term) => {
    setImages(await searchImages(term));
  };

  useEffect(() => {
    // Define search function inside useEffect to use the latest title value
    const search = async (term) => {
      setImages(await searchImages(term));
    };

    // Check if title is not empty and call search
    if (title) {
      search(title + ' food');
    }
  }, [title]);

  return (
    <>
      <Navbar />
      <div className='container m-auto mt-8'>
        {/* <h1 className='text-4xl font-bold mb-4 text-center mt-20 uppercase'>
          recipe.io
        </h1> */}

        <p className='text-lg mb-4 mt-10'>
          Choose your ingredients and click "Search" to see the result.
        </p>

        <div className='flex gap-4'>
          <Select
            isMulti
            name='colors'
            options={options}
            placeholder='Select your ingredients'
            className='basic-multi-select text-center w-[100%] text-xl border-2 border-[#F1797E] rounded-md uppercase'
            classNamePrefix='select'
            onChange={onChange}
          />
          <button
            className='text-white rounded-md px-4 py-1 bg-[#F1797E] font-bold text-xl'
            onClick={sendData}
          >
            Search
          </button>
        </div>

        <div className='text-center mt-4'></div>

        {title && (
          <div className='flex justify-between p-8'>
            <div className=' bg-opacity-80  h-auto rounded-md flex flex-col'>
              <h2 className='text-black text-2xl font-bold mb-2 '>
                Recipe for
                <span className='text-[#F1797E] ml-2'>{title}</span>
              </h2>

              {/* Display ingredients list if available */}
              {ingredients && (
                <div className='mt-4'>
                  <p className='text-black font-semibold text-2xl '>
                    Ingredients:
                  </p>
                  <ul className='list-disc ml-4 mt-4'>
                    {ingredients.map((ingredient, index) => (
                      <li key={index} className='text-black text-xl uppercase'>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='w-1/2'>
              <ImageList images={images} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
