import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';

function App() {
  




  return (
    <div className="App">
      <h1 className="text-success"> Welcome to Toyo Store</h1>

      <Shop> </Shop>

      <h6>1. How React JS works?</h6>

      <p>
        React JS is a javascript library, that consists of syntactical sugar of
        HTMP. The Javascript XML (JSX) is used to write codes in React JS. React
        JS uses babel transpiler to compile JSX files into plain HTML to render
        at Browser dom. React js application is a collection of Components.
        Components are a javascript function that renders function and data in
        the UI. React js is fastest than others in that, it creates virtual dom
        at Ui and applies the only changes by user interactions by comparing in
        virtual dom.
      </p>

      <h6>2.Difference between props and state</h6>
      <p>
        Props are a special kind of attribute of React, that allows to pass or
        send data to other components. States are used to hold data inside the
        component. Props can not be modified, props are only readable, but
        states are changeable. Props are only useable for the child components.
        States are used to initialize data and update dynamically. state has a
        special function to update the state.Props consider as immutable,but states are changeable.
      </p>
    </div>
  );
}

export default App;
