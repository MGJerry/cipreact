import { store } from "../actions/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import CustomerHeader from "../components/CustomerHeader";
import DashboardCharts from '../components/DashboardCharts';

const defaultTheme = createTheme();

const Dashboard = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <CustomerHeader />
        <DashboardCharts />
      </Provider>
    </ThemeProvider>
  );
}

export default Dashboard;