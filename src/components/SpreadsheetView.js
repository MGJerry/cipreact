import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box, MenuItem, FormControl, Select, Button, Menu, TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import * as customerActions from "../actions/dCustomer";
import * as productActions from "../actions/dProduct";
import * as transActions from "../actions/dTransaction";
import * as transdetailActions from "../actions/dTransactionDetail";

// Styled components
const StyledButton = styled(Button)({
  backgroundColor: "#f0f1ff",
  color: "#333",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  border: "1px solid #e1e4f6",
  "&:hover": {
    backgroundColor: "#e2e4f8",
  },
});

const StyledSelect = styled(Select)({
  backgroundColor: "#f0f1ff",
  borderRadius: "8px",
  minWidth: "180px",
  border: "1px solid #e1e4f6",
  "& .MuiSelect-select": {
    paddingRight: "32px",
  },
});

const SearchField = styled(TextField)({
  backgroundColor: "#fff",
  borderRadius: "8px",
  minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
});

const SpreadsheetView = ({
  dCustomerList,
  dProductList,
  dTransactionList,
  dTransactionDetailList,
  fetchAllDCustomers,
  fetchAllDProducts,
  fetchAllDTransactions,
  fetchAllDTransactionDetails,
}) => {
  const [anchorElExport, setAnchorElExport] = useState(null);
  const [currentPage, setCurrentPage] = useState("Customers");
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    // Fetch all data on mount
    fetchAllDCustomers();
    fetchAllDProducts();
    fetchAllDTransactions();
    fetchAllDTransactionDetails();
  }, [
    fetchAllDCustomers,
    fetchAllDProducts,
    fetchAllDTransactions,
    fetchAllDTransactionDetails,
  ]);

  useEffect(() => {
    // Update columns and rows whenever the current page or data changes
    switch (currentPage) {
      case "Customers":
        setColumns([
          { field: "id", headerName: "ID", width: 90 },
          { field: "firstName", headerName: "First Name", width: 150 },
          { field: "lastName", headerName: "Last Name", width: 150 },
          { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
          { field: "gender", headerName: "Gender", width: 120 },
          { field: "email", headerName: "Email", width: 250 },
          { field: "phoneNumber", headerName: "Phone Number", width: 150 },
          { field: "address", headerName: "Address", width: 400 },
        ]);
        setRows(
          dCustomerList.map((customer) => ({
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            dateOfBirth: customer.dateOfBirth,
            gender:
              customer.gender === 1
                ? "Male"
                : customer.gender === 2
                ? "Female"
                : "Unknown",
            email: customer.email,
            phoneNumber: customer.phoneNumber,
            address: customer.address,
          }))
        );
        break;
      case "Products":
        setColumns([
          { field: "id", headerName: "Product ID", width: 90 },
          { field: "name", headerName: "Name", width: 150 },
          { field: "price", headerName: "Price (VND)", width: 150 },
        ]);
        setRows(
          dProductList.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
          }))
        );
        break;
      case "Transactions":
        setColumns([
          { field: "id", headerName: "Transaction ID", width: 150 },
          { field: "customerId", headerName: "Customer ID", width: 150 },
          { field: "timeStamp", headerName: "Timestamp", width: 200 },
          { field: "type", headerName: "Type", width: 150 },
          { field: "method", headerName: "Method", width: 150 },
          { field: "total", headerName: "Total (VND)", width: 150 },
        ]);
        setRows(
          dTransactionList.map((transaction) => ({
            id: transaction.id,
            customerId: transaction.customerId,
            timeStamp: transaction.timeStamp,
            type: transaction.type,
            method: transaction.method,
            total: transaction.total,
          }))
        );
        break;
      case "TransactionDetails":
        setColumns([
          { field: "id", headerName: "Detail ID", width: 150 },
          { field: "transactionId", headerName: "Transaction ID", width: 150 },
          { field: "productId", headerName: "Product ID", width: 150 },
          { field: "amount", headerName: "Amount", width: 150 },
          { field: "subtotal", headerName: "Subtotal (VND)", width: 150 },
        ]);
        setRows(
          dTransactionDetailList.map((detail) => ({
            id: detail.id,
            transactionId: detail.transactionId,
            productId: detail.productId,
            amount: detail.amount,
            subtotal: detail.subtotal,
          }))
        );
        break;
      default:
        setColumns([]);
        setRows([]);
        break;
    }
  }, [
    currentPage,
    dCustomerList,
    dProductList,
    dTransactionList,
    dTransactionDetailList,
  ]);

  useEffect(() => {
    // Filter rows based on search text
    if (searchText === "") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(
        rows.filter((row) =>
          Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
          )
        )
      );
    }
  }, [searchText, rows]);

  const handleExportClick = (event) => {
    setAnchorElExport(event.currentTarget);
  };

  const handleExportClose = () => {
    setAnchorElExport(null);
  };

  const handlePageSwitch = (event) => {
    setCurrentPage(event.target.value);
    setSearchText(""); // Clear search when switching pages
  };

  const exportToFile = (format) => {
    const dataToExport = filteredRows.map((row) => {
      const exportedRow = {};
      columns.forEach((col) => {
        exportedRow[col.headerName] = row[col.field];
      });
      return exportedRow;
    });

    if (format === "csv") {
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const csvData = XLSX.utils.sheet_to_csv(worksheet, { FS: "," });
      const blob = new Blob(["\uFEFF" + csvData], { type: "text/csv;charset=utf-8;" }); // Add BOM for UTF-8
      saveAs(blob, `${currentPage}.csv`);
    } else if (format === "excel") {
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, currentPage);
      const excelData = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelData], { type: "application/octet-stream" });
      saveAs(blob, `${currentPage}.xlsx`);
    }

    handleExportClose();
  };

  return (
    <Box sx={{ padding: 2, maxWidth: "1600px", margin: "0 auto" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        {/* Export Button */}
        <StyledButton onClick={handleExportClick}>Export</StyledButton>
        <Menu
          anchorEl={anchorElExport}
          open={Boolean(anchorElExport)}
          onClose={handleExportClose}
        >
          <MenuItem onClick={() => exportToFile("csv")}>Export to CSV</MenuItem>
          <MenuItem onClick={() => exportToFile("excel")}>Export to Excel</MenuItem>
        </Menu>

        {/* Search Bar */}
        <SearchField
          size="small"
          placeholder="Search..."
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginLeft: 2 }}
        />

        {/* Spacer to push dropdown to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Page Name Dropdown */}
        <FormControl variant="outlined" size="small" sx={{ marginLeft: 2 }}>
          <StyledSelect value={currentPage} onChange={handlePageSwitch}>
            <MenuItem value="Customers">Customers</MenuItem>
            <MenuItem value="Products">Products</MenuItem>
            <MenuItem value="Transactions">Transactions</MenuItem>
            <MenuItem value="TransactionDetails">Transaction Details</MenuItem>
          </StyledSelect>
        </FormControl>
      </Box>

      {/* DataGrid */}
      <Box sx={{ width: "100%", marginTop: 3 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          components={{
            Toolbar: GridToolbarContainer,
          }}
          componentsProps={{
            toolbar: {
              children: <GridToolbarExport />,
            },
          }}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  dCustomerList: state.dCustomer.list,
  dProductList: state.dProduct.list,
  dTransactionList: state.dTransaction.list,
  dTransactionDetailList: state.dTransactionDetail.list,
});

const mapActionToProps = {
  fetchAllDCustomers: customerActions.fetchAll,
  fetchAllDProducts: productActions.fetchAll,
  fetchAllDTransactions: transActions.fetchAll,
  fetchAllDTransactionDetails: transdetailActions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(SpreadsheetView);
