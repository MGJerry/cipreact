import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid2,
  Paper,
  Checkbox,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { BarChart, LineChart } from "@mui/x-charts";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { useSortable, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaidIcon from "@mui/icons-material/Paid";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { barChartData, lineChartData, taskData, trafficData } from "../data/dashboardData";

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

const SortableTask = ({ id, task, onToggle }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ListItem
      ref={setNodeRef}
      style={style}
      secondaryAction={
        <IconButton {...attributes} {...listeners} edge="end">
          <DragIndicatorIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => onToggle(id)}
        sx={{
          "&.Mui-checked": {
            color: "#7a3ffd",
          },
        }}
      />
      <Typography
        variant="body1"
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#aaa" : "#333",
        }}
      >
        {task.name}
      </Typography>
    </ListItem>
  );
};

export default function DashboardCharts() {
  const [tasks, setTasks] = useState(
    taskData.map((task, index) => ({ ...task, id: index.toString() }))
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);

      const updatedTasks = [...tasks];
      const [removed] = updatedTasks.splice(oldIndex, 1);
      updatedTasks.splice(newIndex, 0, removed);
      setTasks(updatedTasks);
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const chartStyles = {
    width: "80%",
    height: "70%",
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid2 container rowSpacing={4} columnSpacing={3}>
        {/* Main Grid2 layout */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Grid2 container rowSpacing={4} spacing={3}>
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

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Grid2 container rowSpacing={4} spacing={3}>
            {/* Daily Traffic */}
            <Grid2 size={12} sx={{ height: "400px" }}>
              <StyledPaper>
                <Typography variant="subtitle1">Daily Traffic</Typography>
                <Typography variant="h4" color="#7a3ffd">
                  2,579 Visitors
                </Typography>
                <Typography variant="caption" color="green">
                  +2.45%
                </Typography>
                <BarChart
                  dataset={trafficData}
                  series={[{ dataKey: "visitors", color: "#7a3ffd" }]}
                  xAxis={[{ dataKey: "hour", scaleType: "band" }]}
                  leftAxis={null}
                  sx={chartStyles}
                />
              </StyledPaper>
            </Grid2>

            {/* Today's Sales */}
            <Grid2 size={12} sx={{ height: "400px" }}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Today's Sales
                </Typography>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                  Sales Summary
                </Typography>
                {/* Sales Boxes */}
                <Box display="flex" justifyContent="flex-end" gap="20px" mt={2} width="100%">
                  {/* Total Sales */}
                  <Box
                    sx={{
                      backgroundColor: "#f4f9fc",
                      borderRadius: "16px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "40%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#5363df",
                        borderRadius: "50%",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <SignalCellularAltIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography variant="h4">$1k</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Sales
                    </Typography>
                    <Typography variant="caption" color="blue">
                      +8% from yesterday
                    </Typography>
                  </Box>
                  {/* Total Orders */}
                  <Box
                    sx={{
                      backgroundColor: "#f4f9fc",
                      borderRadius: "16px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "40%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#36b3ff",
                        borderRadius: "50%",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <TextSnippetIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography variant="h4">300</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Order
                    </Typography>
                    <Typography variant="caption" color="blue">
                      +5% from yesterday
                    </Typography>
                  </Box>
                </Box>
              </StyledPaper>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 3 }}>
          <Grid2 container rowSpacing={4} spacing={3}>
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
                    $350.4
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
                    $642.39
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
                    $574.34
                  </Typography>
                  <Typography variant="caption" color="green">
                    +23% since last month
                  </Typography>
                </Box>
              </StatBox>
            </Grid2>

            {/* Task List */}
            <Grid2 size={12}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Tasks
                </Typography>
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                  <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
                    <List>
                      {tasks.map((task) => (
                        <SortableTask key={task.id} id={task.id} task={task} onToggle={toggleTaskCompletion} />
                      ))}
                    </List>
                  </SortableContext>
                </DndContext>
              </StyledPaper>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
