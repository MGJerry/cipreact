import { store } from "../actions/store";
import { Provider } from "react-redux";
import SpreadsheetView from "../components/SpreadsheetView";
import { createTheme, ThemeProvider } from "@mui/material";
import CustomerHeader from "../components/CustomerHeader";

const defaultTheme = createTheme();

const Report = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <CustomerHeader />
        <SpreadsheetView />
      </Provider>
    </ThemeProvider>
  );
}

export default Report;