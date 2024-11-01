import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCustomer";
import { Button, ButtonGroup, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DCustomerForm from "./DCustomerForm";
import toast, { Toaster } from "react-hot-toast";

const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1),
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
    "& .MuiTableCell-head": {
        fontSize: "1.25rem"
    }
}));

const DCustomers = ({ ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllDCustomers();
    }, []);

    const onDelete = id => {
        if (window.confirm("Are you sure you want to delete this record?"))
        props.deleteDCustomer(id, () => toast.success("Deleted successfully!"))
        props.fetchAllDCustomers()
    }

    return (
        <StyledPaper>
            <Toaster />
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <DCustomerForm {...({currentId, setCurrentId})}/>
                </Grid2>
                <Grid2 size={12}>
                    <TableContainer>
                        <Table>
                            <StyledTableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Date of Birth</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </StyledTableHead>
                            <TableBody>
                                {props.dCustomerList.map((record, index) => {return (
                                    <TableRow key={index}>
                                        <TableCell>{record.id}</TableCell>
                                        <TableCell>{record.firstName}</TableCell>
                                        <TableCell>{record.lastName}</TableCell>
                                        <TableCell>{record.dateOfBirth.split("-").reverse().join("-")}</TableCell>
                                        <TableCell>
                                            {(() => {
                                                switch (record.gender) {
                                                    case 0: return "Unknown";
                                                    case 1: return "Male";
                                                    case 2: return "Female";
                                                    case 3: return "Other";
                                                    default: return "Unknown";
                                                }
                                            })()}
                                        </TableCell>
                                        <TableCell>{record.email}</TableCell>
                                        <TableCell>{record.phoneNumber}</TableCell>
                                        <TableCell>{record.address}</TableCell>
                                        <TableCell>
                                            <ButtonGroup variant="text">
                                                <Button onClick={() => {setCurrentId(record.id)}}><EditIcon color="primary" /></Button>
                                                <Button onClick={() => onDelete(record.id)}><DeleteIcon color="error" /></Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                )})}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid2>
            </Grid2>
        </StyledPaper>
    );
};

const mapStateToProps = (state) => ({
    dCustomerList: state.dCustomer.list
});

const mapActionToProps = {
    fetchAllDCustomers: actions.fetchAll,
    deleteDCustomer: actions.Delete
};

export default connect(mapStateToProps, mapActionToProps)(DCustomers);
