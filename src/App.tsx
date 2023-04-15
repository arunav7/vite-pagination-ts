import { useState, useEffect } from 'react';

import Pages from './components/Pages';
import { Posts } from './types';

import './App.css';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Posts[]>([]);
  // getting posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data as Posts[]));
  }, []);
  return (
    <div className="App">
      {data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
