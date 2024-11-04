import { store } from "../actions/store";
import { Provider } from "react-redux";
import DCustomers from '../components/DCustomers';
import { Container, createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme();

const Report = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <Container maxWidth="lg">
          <DCustomers />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default Report;