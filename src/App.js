import './App.css';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import Component3 from './Component3';
import { Suspense, lazy } from 'react';
const Component1 = lazy(() => import('./Component1'))
const Component2 = lazy(() => import('./Component2'))


function App() {
  return (
    <div className="App">
      <h1>lazy loading....</h1>
      <Suspense fallback={<div>Loading...component1</div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div>Loading...component2</div>}>
        <Component2 />
      </Suspense>
      <h1>hello</h1>
      <h1>the new hello branch (hello branch)</h1>
    </div>
  );
}

export default App;
