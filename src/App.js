import './App.css';
import LemonApp from './components/LemonApp';
import Lab3 from './components/lab-w3/App'
import { NewPanel , NewPoint } from './components/lab-w3/CusrorWithHOC';
import { PanelMouseLogger, PointMouseLogger } from './components/lab-w3/CusrorWithHook';
import { Form } from './components/lab-w3/Form';
import RenderPropApp from './components/lab-w3/RenderPropApp';

function App() {
  return (
    <>
  {/* 

  <LemonApp/>
  <Lab3/>
  <NewPanel/>
  <NewPoint />
  <PanelMouseLogger/>
  <PointMouseLogger/> 
  <RenderPropApp/>

  */}

<Form/>
    </>
  );
}

export default App;
