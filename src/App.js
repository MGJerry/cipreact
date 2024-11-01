import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCustomers from './components/DCustomers';
import { Container, createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme();

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <Container maxWidth="lg">
          <DCustomers />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
