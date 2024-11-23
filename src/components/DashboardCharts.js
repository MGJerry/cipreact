import React from "react";
import { Box, Typography, Grid2, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaidIcon from "@mui/icons-material/Paid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import { barChartData, lineChartData, churnData } from "../data/dashboardData";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: "16px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "100%",
  textAlign: "left",
}));

const StatBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  textAlign: "left",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export default function DashboardCharts() {
  const chartStyles = {
    width: "80%",
    height: "70%",
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid2 container rowSpacing={4} columnSpacing={3}>
        {/* Main Grid2 layout */}
        <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
          <Grid2 container rowSpacing={6} spacing={3}>
            {/* Total Revenue */}
            <Grid2 size={12} sx={{ height: "400px" }}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Total Revenue
                </Typography>
                <BarChart
                  dataset={barChartData}
                  series={[
                    { dataKey: "online", label: "Online Sales", color: "#7a3ffd" },
                    { dataKey: "offline", label: "Offline Sales", color: "#32c5ff" },
                  ]}
                  xAxis={[{ dataKey: "day", scaleType: "band" }]}
                  leftAxis={null}
                  bottomAxis={null}
                  slotProps={{
                    legend: {
                      position: { vertical: "bottom", horizontal: "middle" },
                    },
                  }}
                  sx={chartStyles}
                />
              </StyledPaper>
            </Grid2>

            {/* Customer Satisfaction */}
            <Grid2 size={12} sx={{ height: "400px" }}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Customer Satisfaction
                </Typography>
                <LineChart
                  dataset={lineChartData}
                  series={[
                    { dataKey: "lastMonth", label: "Last Month", color: "#7a3ffd" },
                    { dataKey: "thisMonth", label: "This Month", color: "#32c5ff" },
                  ]}
                  xAxis={[{ dataKey: "date", scaleType: "band" }]}
                  leftAxis={null}
                  bottomAxis={null}
                  slotProps={{
                    legend: {
                      position: { vertical: "bottom", horizontal: "middle" },
                    },
                  }}
                  sx={chartStyles}
                />
              </StyledPaper>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Grid2 container rowSpacing={6} spacing={3}>
            {/* Customer Churn */} 
            <Grid2 size={12} sx={{ height: "400px" }}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Customer Churn
                </Typography>
                <Typography variant="h4" color="#FF6F61" sx={{ marginBottom: "16px" }}>
                  6%
                </Typography>
                <BarChart
                  dataset={churnData}
                  series={[
                    { dataKey: "churn", stack: 'customer', label: "Churn", color: "#ED948C" },
                    { dataKey: "expansion", stack: 'customer', label: "Expansion", color: "#3D3088" },
                  ]}
                  xAxis={[{ dataKey: "month", scaleType: "band" }]}
                  leftAxis={null}
                  bottomAxis={null}
                  slotProps={{
                    legend: {
                      position: { vertical: "bottom", horizontal: "middle" },
                    },
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </StyledPaper>
            </Grid2>


            {/* Today's Sales */}
            <Grid2 size={12} sx={{ height: "400px" }}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Customer Demographic
                </Typography>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 46.6, label: 'Nam', color: "#061EBD" },
                        { id: 1, value: 53.4, label: 'Nữ', color: "#AF02B8" },
                      ],
                    },
                  ]}
                />
              </StyledPaper>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
          <Grid2 container rowSpacing={1} spacing={3}>
            {/* Stat Boxes */}
            <Grid2 size={12}>
              <StatBox>
                <Box
                  sx={{
                    backgroundColor: "#f4f7fe",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BarChartIcon sx={{ color: "#7a3ffd", fontSize: "30px" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Earnings</Typography>
                  <Typography variant="h4" color="#7a3ffd">
                    ₫3.572.300
                  </Typography>
                </Box>
              </StatBox>
            </Grid2>
            <Grid2 size={12}>
              <StatBox>
                <Box
                  sx={{
                    backgroundColor: "#f4f7fe",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PaidIcon sx={{ color: "#7a3ffd", fontSize: "30px" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Spend This Month</Typography>
                  <Typography variant="h4" color="#7a3ffd">
                    ₫2.213.900
                  </Typography>
                </Box>
              </StatBox>
            </Grid2>
            <Grid2 size={12}>
              <StatBox>
                <Box
                  sx={{
                    backgroundColor: "#f4f7fe",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PointOfSaleIcon sx={{ color: "#7a3ffd", fontSize: "30px" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Total Sales</Typography>
                  <Typography variant="h4" color="#7a3ffd">
                    ₫5.572.300
                  </Typography>
                  <Typography variant="caption" color="green">
                    +23% since last month
                  </Typography>
                </Box>
              </StatBox>
            </Grid2>
            <Grid2 size={12}>
              <StatBox>
                <Box
                  sx={{
                    backgroundColor: "#f4f7fe",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TrendingUpIcon sx={{ color: "#7a3ffd", fontSize: "30px" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Growth Rates</Typography>
                  <Typography variant="h4" color="#7a3ffd">
                    8.29%
                  </Typography>
                  <Typography variant="caption" color="green">
                    +1.3% since last month
                  </Typography>
                </Box>
              </StatBox>
            </Grid2>

            {/* Today's Sales */}
            <Grid2 size={12}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Today's Sales
                </Typography>
                <Box display="flex" flexDirection="column" gap="20px" mt={2} width="100%">
                  {/* Total Sales */}
                  <StatBox
                    sx={{
                      backgroundColor: "#f4f9fc",
                      borderRadius: "16px",
                      padding: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#5363df",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <SignalCellularAltIcon sx={{ color: "white", fontSize: "30px" }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">Total Sales</Typography>
                      <Typography variant="h4" color="text.secondary">
                        ₫798.100
                      </Typography>
                      <Typography variant="caption" color="blue">
                        +8% from yesterday
                      </Typography>
                    </Box>
                  </StatBox>
                  {/* Total Orders */}
                  <StatBox
                    sx={{
                      backgroundColor: "#f4f9fc",
                      borderRadius: "16px",
                      padding: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#36b3ff",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TextSnippetIcon sx={{ color: "white", fontSize: "30px" }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">Total Orders</Typography>
                      <Typography variant="h4" color="text.secondary">
                        137
                      </Typography>
                      <Typography variant="caption" color="blue">
                        +8% from yesterday
                      </Typography>
                    </Box>
                  </StatBox>
                </Box>
              </StyledPaper>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
