import { createContext } from "react";

import { useState } from "react";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const [color, setColor] = useState("white");

  const handlemode = (value) => {
        if(value === true){
            setColor("black")
        }else if(value === false){
            setColor("white");
        }
  };

  return (
    <DashboardContext.Provider value={{ handlemode, color}}>
      {children}
    </DashboardContext.Provider>
  );
};
