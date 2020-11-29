import React from 'react';
import {H1, H2} from './components/Headings/index';

const App = () => {
  return (
    <div>
      <H1 text="Template TypeScript Application" />
      <H2 text="With Tailwind CSS" addClass="mb-5 mt-6" />
    </div>
  );
};

export default App;
