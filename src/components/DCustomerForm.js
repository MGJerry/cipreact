import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Grid2, TextField, FormControl, InputLabel, Select, MenuItem, styled, Button, FormHelperText } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { enGB } from "date-fns/locale";
import useForm from "./useForm";
import * as actions from "../actions/dCustomer";
import toast from "react-hot-toast";

const Root = styled("form")(({ theme }) => ({
    "& .MuiTextField-root": {
        margin: theme.spacing(2),
        minWidth: 200,
    }
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(2),
    minWidth: 200,
}));

const SmMarginButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(2),
}));

const initialFieldValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: 0,
    email: "",
    phoneNumber: "",
    address: ""
};

const DCustomerForm = (props) => {

    //validate()
    //validate({firstName:'Nguyen'})
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ("dateOfBirth" in fieldValues)
            temp.dateOfBirth = fieldValues.dateOfBirth ? "" : "This field is required."
        if ("gender" in fieldValues)
            temp.gender = fieldValues.gender ? "" : "This field is required."
        if ("email" in fieldValues)
            temp.email = ((/^$|.+@.+..+/).test(fieldValues.email) && fieldValues.email) ? "" : "Email is not valid."
        if ("phoneNumber" in fieldValues)
            temp.phoneNumber = (/^0\d{9,10}$/).test(fieldValues.phoneNumber) ? "" : "This field is required."
        if ("address" in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."
        setErrors({
            ...temp
        })

        //only return if all present or when submit
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, validate, props.setCurrentId );

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        if (inputLabel.current) {
            setLabelWidth(inputLabel.current.offsetWidth);
        }
    }, []);

    const handleDateChange = (date) => {
        handleInputChange({ name: "dateOfBirth", value: date });
    };

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(values)
        if(validate()) {
            // window.alert("Validation succeeded!")
            //toasts
            const onSuccess = () => {
                resetForm()
                toast.success("Submitted successfully!")
            }

            if(props.currentId == 0)
                props.createDCustomer(values, onSuccess)
            else
                props.updateDCustomer(values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            const customer = props.dCustomerList.find(x => x.id === props.currentId);
            setValues({
                ...customer,
                dateOfBirth: customer.dateOfBirth ? new Date(customer.dateOfBirth) : null
            });
            setErrors({})
        }
    }, [props.currentId]);

    return (
        <Root autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
                <Grid2 size={3}>
                    <TextField
                        name="firstName"
                        variant="outlined"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        {...(errors.firstName && { error: true, helperText: errors.firstName })}
                    />
                    <TextField
                        name="lastName"
                        variant="outlined"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        {...(errors.lastName && { error: true, helperText: errors.lastName })}
                    />
                </Grid2>
                <Grid2 size={3}>
                    <StyledFormControl
                        variant="outlined"
                        {...(errors.gender && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Gender</InputLabel>
                        <Select
                            name="gender"
                            label="Gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value={0}>Unknown</MenuItem>
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Female</MenuItem>
                            <MenuItem value={3}>Other</MenuItem>
                        </Select>
                        {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
                    </StyledFormControl>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
                        <DatePicker
                            label="Date of Birth"
                            views={['day', 'month', 'year']}
                            value={values.dateOfBirth}
                            onChange={handleDateChange}
                            {...(errors.dateOfBirth && { error: true, helperText: errors.dateOfBirth })}
                        />
                    </LocalizationProvider>
                </Grid2>
                <Grid2 size={3}>
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />
                    <TextField
                        name="phoneNumber"
                        variant="outlined"
                        label="Phone Number"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                        {...(errors.phoneNumber && { error: true, helperText: errors.phoneNumber })}
                    />
                </Grid2>
                <Grid2 size={3}>
                    <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                        {...(errors.address && { error: true, helperText: errors.address })}
                    />
                    <div>
                        <SmMarginButton
                            variant="contained"
                            color="primary"
                            type="submit"
                        >Submit</SmMarginButton>
                        <SmMarginButton
                            variant="outlined"
                            onClick={resetForm}
                        >Reset</SmMarginButton>
                    </div>
                </Grid2>
            </Grid2>
        </Root>
    );
};

const mapStateToProps = (state) => ({
    dCustomerList: state.dCustomer.list
});

const mapActionToProps = {
    createDCustomer: actions.create,
    updateDCustomer: actions.update
};

export default connect(mapStateToProps, mapActionToProps)(DCustomerForm);
