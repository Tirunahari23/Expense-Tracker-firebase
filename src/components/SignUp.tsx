import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { signup } from "./componentStyles.ts";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import banner from "../assets/signupBanner.png";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config.ts";
import { useNavigate } from "react-router-dom";
import addNotification, { Notifications } from "react-push-notification";

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  username: yup
    .string()
    .min(4, "username should be of minimum 4 characters length")
    .required("username is required"),
});
const validationSchema2 = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  username: yup
    .string()
    .min(4, "username should be of minimum 4 characters length")
    .required("username is required"),
});
const SignUp = () => {
  const [toggle, setToggle] = useState(true);
  const [showPassword, setShowpassword] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSignUp = async () => {
    const { email, password } = formik2.values;
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        if (user) {
          localStorage.setItem("user", JSON.stringify({ email, password }));
          navigate("/home");
        }
        console.log("user:", user);
      }
    );
  };
  const handleLogin = async () => {
    const { username, password } = formik.values;
    const response = await signInWithEmailAndPassword(auth, username, password);
    if (response) {
      navigate("/home");
    } else {
      alert("invalid user");
    }
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin();
    },
  });
  const formik2 = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      handleSignUp();
    },
  });
  
  return (
    <Box sx={signup.main}>
      <Box sx={signup.imgSection}>
        <Box component={"img"} src={banner} sx={signup.img} />
      </Box>
      <Box sx={signup.cardContainer}>
        <Stack direction={"column"} gap={4} width={"65%"} alignItems={"center"}>
          <Stack width={"100%"} alignItems={"flex-end"}>
            <Typography sx={signup.header}> Your Logo</Typography>
          </Stack>
          <Typography sx={signup.header}>welcome sai</Typography>
          <Stack sx={signup.headerBtn} direction={"row"}>
            <Button
              sx={{
                ...signup.btn,
                bgcolor: `${toggle ? "#9e896a" : "#f8eddd"}`,
              }}
              onClick={handleToggle}
            >
              Login
            </Button>
            <Button
              sx={{
                ...signup.btn,
                bgcolor: `${toggle ? "#f8eddd" : "#9e896a"}`,
              }}
              onClick={handleToggle}
            >
              Register
            </Button>
          </Stack>
          <Typography width={"90%"}>
            Lorem ipsum dolor sit amet Laudantium at iste velit earum tenetur
            quaerat sed corporis ex,
          </Typography>
        </Stack>
        {toggle ? (
          <Box
            component={"form"}
            onSubmit={formik.handleSubmit}
            sx={signup.container}
          >
            <Stack direction={"column"} width={"90%"}>
              <InputLabel>Username</InputLabel>
              <TextField
                placeholder="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                sx={signup.inputs}
              />
            </Stack>
            <Stack direction={"column"} width={"90%"}>
              <InputLabel>Password</InputLabel>
              <TextField
                placeholder="password"
                name="password"
                sx={signup.inputs}
                type={`${showPassword ? "text" : "password"}`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowpassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack
              width={"90%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>
                <Checkbox /> Remember me
              </Typography>
              <Typography>Forgot Password ?</Typography>
            </Stack>
            <Stack direction={"row"} width={"90%"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                variant="contained"
                sx={{ ...signup.font, ...signup.btn }}
              >
                Login
              </Button>
            </Stack>
          </Box>
        ) : (
          <Box
            component={"form"}
            onSubmit={formik2.handleSubmit}
            sx={signup.container}
          >
            <Stack direction={"column"} width={"90%"}>
              <InputLabel>Email</InputLabel>
              <TextField
                placeholder="email"
                name="email"
                value={formik2.values.email}
                onChange={formik2.handleChange}
                onBlur={formik2.handleBlur}
                error={formik2.touched.email && Boolean(formik2.errors.email)}
                helperText={formik2.touched.email && formik2.errors.email}
                sx={signup.inputs}
              />
            </Stack>
            <Stack direction={"column"} width={"90%"}>
              <InputLabel>Username</InputLabel>
              <TextField
                placeholder="Username"
                name="username"
                value={formik2.values.username}
                onChange={formik2.handleChange}
                onBlur={formik2.handleBlur}
                error={
                  formik2.touched.username && Boolean(formik2.errors.username)
                }
                helperText={formik2.touched.username && formik2.errors.username}
                sx={signup.inputs}
              />
            </Stack>
            <Stack direction={"column"} width={"90%"}>
              <InputLabel>Password</InputLabel>
              <TextField
                placeholder="password"
                name="password"
                sx={signup.inputs}
                type={`${showPassword ? "text" : "password"}`}
                value={formik2.values.password}
                onChange={formik2.handleChange}
                onBlur={formik2.handleBlur}
                error={
                  formik2.touched.password && Boolean(formik2.errors.password)
                }
                helperText={formik2.touched.password && formik2.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowpassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction={"row"} width={"90%"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                // onClick={signIn}
                variant="contained"
                sx={signup.btn}
              >
                sign up
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SignUp;
