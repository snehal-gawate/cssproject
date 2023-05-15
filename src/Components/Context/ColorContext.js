import { createContext, useState } from "react";

 export const ColorContext = createContext();
// export const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("blue");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};
