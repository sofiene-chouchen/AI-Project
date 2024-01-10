import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID cfKsIjoDQ4IxnCjL998JDHDkCxZuN347Tk4-1kVMBfA',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
