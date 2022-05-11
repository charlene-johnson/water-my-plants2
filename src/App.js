import React, {useState} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./ui/Theme";
import NavigationOut from "./ui/NavigationOut";
import NavigationIn from "./ui/NavigationIn";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0)
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <NavigationIn
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
