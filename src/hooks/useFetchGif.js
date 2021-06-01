import { useState, useEffect }from 'react';

import { getGif } from "../helpers/getGifs";

const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGif(category).then(
      img => {
          console.table(img);
          setState({ 
            data: img, 
            loading: false
          });
      }
    );
  }, [category]);

  return state;
}

export default useFetchGif;
