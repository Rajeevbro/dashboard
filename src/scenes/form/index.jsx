// import { useFormik } from "formik";
import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { Formik, useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      addressOne: "",
      addressTwo: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3} p={"2% 10%"}>
        <Typography color={colors.greenAccent[400]}>
          Create a New User Profile
        </Typography>
        <Box display={"flex"} width="100%" justifyContent={"space-between"}>
          <TextField
            variant="filled"
            id="firstName"
            label="First Name"
            sx={{ width: "45%" }}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          <TextField
            variant="filled"
            id="lastName"
            label="Last Name"
            sx={{ width: "45%" }}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            helperText={"I am helper"}
          />
        </Box>

        <TextField
          id="email"
          label="Email"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.eamil}
          onBlur={formik.handleBlur}
        />
        <TextField
          label="Contact Number"
          id="contactNumber"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.contactNumber}
          onBlur={formik.handleBlur}
        />
        <TextField
          label="Address1"
          id="addressOne"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.addressOne}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="addressTwo"
          label="Address2"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.addressTwo}
          onBlur={formik.handleBlur}
          error={formik.errors.addressTwo}
        />
        <Button
          sx={{ background: colors.greenAccent[400], width: "20%" }}
          type="submit"
        >
          Create User
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
