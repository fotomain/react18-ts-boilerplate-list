
import React from "react";
import {Dictionary, useDictionary} from "./hooks/useDirectory";
import {List} from "./components/List";

const App = () => {

  const dictionary:Dictionary = useDictionary();
  return (
      <div className="app">
        <div className="header">
          <div>
            <span>React Virtualized List</span>
          </div>
        </div>
        <div className="content"
             onScroll={(e)=>{
                 console.log("=== onScroll ",e)
             }}
        >
            {/* eslint-disable-next-line react/jsx-no-undef */}
          <List items={dictionary} />
        </div>
      </div>
  )

}

export default App
