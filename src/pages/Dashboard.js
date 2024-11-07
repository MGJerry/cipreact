import { store } from "../actions/store";
import { Provider } from "react-redux";
import DCustomers from '../components/DCustomers';
import { Container, createTheme, ThemeProvider } from "@mui/material";
import CustomerHeader from "../components/CustomerHeader";

const defaultTheme = createTheme();

const Dashboard = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <CustomerHeader />
        <Container maxWidth="lg">
          <DCustomers />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default Dashboard;