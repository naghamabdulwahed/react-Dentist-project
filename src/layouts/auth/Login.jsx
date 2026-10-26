import * as React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import vector from "../../Assets/Vector.png";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import image from "../../Assets/login.jpg";

import Typography from "@mui/material/Typography";

import { useFormik } from "formik";
import * as yup from "yup";

import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),

  job: yup.string().required("Please select your account type"),
});

const Login = ({ open, onClose }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      job: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        // Frontend mock login for now
        console.log("Login successful:", values);

        // Close modal first
        onClose();

        switch (values.job) {
          case "reception":
            navigate("/reception");
            break;

          case "admin":
            navigate("/admin");
            break;

          case "Dr":
            navigate("/doctor");
            break;

          default:
            console.error("Unknown account type");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "18px",
          overflow: "hidden",

          backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ), url(${image})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: "12px",
          right: "12px",
          zIndex: 2,

          color: "#666",

          "&:hover": {
            color: "#222",
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          padding: "35px 45px 40px",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <img
            src={vector}
            alt="Logo"
            style={{
              height: "55px",
              width: "55px",
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          component="h1"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#333",
            mb: 3,
          }}
        >
          Sign in to your account
        </Typography>

        {/* Form */}
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{
            width: "100%",
          }}
        >
          {/* Email */}
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email *"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              mb: 1,
            }}
          />

          {/* Password */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          {/* Account Type */}
          <FormControl
            component="fieldset"
            sx={{
              mt: 2,
              width: "100%",
            }}
            error={formik.touched.job && Boolean(formik.errors.job)}
          >
            <FormLabel component="legend">I am:</FormLabel>

            <RadioGroup
              row
              name="job"
              value={formik.values.job}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <FormControlLabel value="Dr" control={<Radio />} label="Doctor" />

              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />

              <FormControlLabel
                value="reception"
                control={<Radio />}
                label="Receptionist"
              />
            </RadioGroup>

            {formik.touched.job && formik.errors.job && (
              <Typography variant="caption" color="error">
                {formik.errors.job}
              </Typography>
            )}
          </FormControl>

          {/* Sign In Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#2D9596",

              mt: 3,
              mb: 2,

              padding: "11px",

              borderRadius: "8px",

              fontSize: "16px",
              textTransform: "none",

              boxShadow: "none",

              ":hover": {
                bgcolor: "#247A7B",
                boxShadow: "none",
              },
            }}
          >
            Sign In
          </Button>

          {/* Forgot Password */}
          <Link
            to="/forgot"
            style={{
              display: "flex",
              justifyContent: "center",

              color: "#2D9596",

              textDecoration: "none",
            }}
          >
            Forgot password?
          </Link>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
