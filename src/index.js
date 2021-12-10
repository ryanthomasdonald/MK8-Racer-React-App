import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import BaseLayout from "./components/layout/BaseLayout"
import reducer from "./reducers/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// import Sample from './components/Sample';
import Builder from './components/Builder.js';
import Cart from './components/Cart';

const saveToLocalStorage = (reduxGlobalState) => {
  // serialization = converting js object into a string
  try{
    const serializeState = JSON.stringify(reduxGlobalState)
    localStorage.setItem("state", serializeState)
  }
  catch(e){
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
  // deserialize
  const deserializeState = localStorage.getItem("state")
  if(deserializeState === null){
    return undefined
  }
  else{
    return JSON.parse(deserializeState)
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  // happens every time there is a change to global state
  saveToLocalStorage(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />}/>
            {/* <Route path="/sample" element={<Sample />}/> */}
            <Route path="/builder" element={<Builder />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);