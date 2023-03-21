import React, {Suspense} from 'react';
import './App.css';
import Loading from './components/common/loading/loading';

import Router from './components/common/router/router'
import Layout from './components/common/layout';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Router />
      </Layout>
    </Suspense>
  );  
}

export default App;