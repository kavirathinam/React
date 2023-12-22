import './App.css';
import AndCondition from './components/AndCondition';
import ChildClass from './components/ChildClass';
import ChildComponent from './components/ChildComponent';
import ConditionalRendering from './components/ConditionalRendering';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import Navbar from './components/Navbar';
import TernaryCondition from './components/TernaryCondition';
function App() {
  const msg="Hi from parent component-app"
  const msg1="Hi from parent component class"
  return (

    <div className="App">
      {/*<ChildComponent message={msg}/>*/}
      {/*<ChildClass message={msg1}/>*/}
      {/*<Counter/>*/}
      {/*<CounterClass/>*/}
      {/*<ConditionalRendering/>*/}
      {/*<TernaryCondition/>*/}
      {/*<AndCondition/>*/}
      <Navbar/>
    </div>
  );
}

export default App;
