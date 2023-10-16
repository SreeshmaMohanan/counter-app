import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{height:'100vh'}} className='text-light bg-dark w-100' >
      <h1 className='text-center pt-5'>Counter Application</h1>
      <Counter/>
     
    </div>
  );
}

export default App;
