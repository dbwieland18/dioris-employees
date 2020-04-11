import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "./index.css";
import Header from "../src/componentes/header/header";
import Table from "./componentes/table/table";
import SearchInput from "./componentes/searchInput/searchInput";
import { AppContext } from "./AppContext";
import { AppEventContext } from "./AppContext";


function App() {
  const [searchText, setSearchText] = React.useState('');

  const handleInputChange = (event) => {
    console.log(event)

    setSearchText(event.currentTarget.value);

  } 

  const appContext = {
    searchText,
  }

  const appEventContext = {
    onSeachInputChange: handleInputChange
  }

  return (
    <AppContext.Provider value={appContext}>
       <AppEventContext.Provider value={appEventContext}>
      <div className="App">
        <Header />
        <SearchInput />
        <Table />
      </div>
      </AppEventContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
