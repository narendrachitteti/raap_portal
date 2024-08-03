// import {
//   Alert,
//   AlertTitle,
//   Button,
//   FormControl,
//   TextField,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useUserStore } from "../store";
// import { fetchAPI } from "../utils/fetcher";

// let loginTimeout: number;
// interface IResponse {
//   refresh_token: string;
//   access_token: string;
// }

// function Regsiter() {
//   const navigate = useNavigate();
//   const {
//     //@ts-ignore
//     changeIsUserLoggedIn,
//   } = useUserStore((state) => state);

//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [loginError, setLoginError] = useState(false);

//   useEffect(() => {
//     clearTimeout(loginTimeout);
//     setLoginError(false);
//   }, []);

//   const onPasswordChanged = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setPassword(event.target.value);
//   };

//   const onEmailChanged = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setEmail(event.target.value);
//   };

//   const onFormSubmitted = async () => {
//     try {
//       clearTimeout(loginTimeout);

//       const response: IResponse = await fetchAPI({
//         route: "token",
//         method: "POST",
//         data: {
//           grant_type: "password",
//           username: email,
//           password,
//         },
//       });
//       if (response) {
//         const refreshToken = response.refresh_token;
//         const accessToken = response.access_token;
//         setLoginError(false);
//         changeIsUserLoggedIn(true);
//         localStorage.setItem("refresh_token", refreshToken);
//         localStorage.setItem("access_token", accessToken);
//         navigate("/landing");
//       }
//       //Redirect to protected area
//     } catch (error) {
//       setLoginError(true);
//       //@ts-ignore
//       loginTimeout = setTimeout(() => setLoginError(false), 1500);
//     }
//     // navigate("/landing");
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100%",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundImage: `url(${require("../assets/layout_pic.png")})`,
//       }}
//       className="d-flex flex-column align-items-center justify-content-center"
//     >
//       <FormControl
//         style={{
//           backgroundColor: "white",
//           width: "75%",
//           // #275317
//           height: "85%",
//           boxShadow: "-1px 1px 0px 0px",
//         }}
//         className="d-flex flex-column align-items-center justify-content-center p-5 rounded"
//       >
//         <img
//           src={require("../assets/Header/New_RaaP_Logo.png")}
//           alt="RaaP_Logo"
//           style={{
//             width: "10%",
//             left: "20%",
//             position: "absolute",
//             top: "5%",
//           }}
//         />
//         <div
//           style={{ marginTop: "15%"}}
//           className="d-flex flex-column justify-content-center align-items-center w-100"
//         >
//           <TextField
//             id="outlined-basic"
//             className="rounded"
//             value={email}
//             onChange={onEmailChanged}
//             label="Email"
//             InputLabelProps={{ shrink: true }}
//             type="email"
//             variant="outlined"
//             style={{ backgroundColor: "white", width: "20%" }}
//           />
//           <TextField
//             className="mt-5 rounded"
//             value={password}
//             onChange={onPasswordChanged}
//             id="outlined-basic"
//             InputLabelProps={{ shrink: true }}
//             type="password"
//             label="Password"
//             variant="outlined"
//             style={{ backgroundColor: "white", width: "20%" }}
//           />
//           <Button
//             onClick={onFormSubmitted}
//             className="mt-5 w-30 py-3"
//             variant="contained"
//             style={{
//               backgroundColor:"#275317",
//               borderRadius:"10%",
//               height: "15%"
//             }}
//           >
//             Login
//           </Button>
//           <Link
//             className="h5 text-primary mt-3"
//             to="https://meetings.hubspot.com/rj-mahadev?uuid=b1295ee6-5b2c-41c6-87f4-f477cd7ae711"
//           >
//             I'd like to register.
//           </Link>
//         </div>
//       </FormControl>

//       {loginError && (
//         <Alert
//           className="mt-5  position-absolute"
//           style={{
//             bottom: 100,
//             right: 40,
//           }}
//           severity="error"
//         >
//           <AlertTitle>Error</AlertTitle>
//           The information you provided is not correct
//         </Alert>
//       )}
//     </div>
//   );
// }
// export default Regsiter;
import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import { fetchAPI } from "../utils/fetcher";
import './Regsiter.css';

let loginTimeout: number;
interface IResponse {
  refresh_token: string;
  access_token: string;
}

function Register() {
  const navigate = useNavigate();
  const {
    //@ts-ignore
    changeIsUserLoggedIn,
  } = useUserStore((state) => state);

  const [formType, setFormType] = useState<"login" | "register">("login");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    clearTimeout(loginTimeout);
    setLoginError(false);
  }, [formType]);

  const onPasswordChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  const onNameChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  const onEmailChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const onConfirmPasswordChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const onFormSubmitted = async () => {
    try {
      clearTimeout(loginTimeout);
      const endpoint = formType === "login" ? "token" : "register";
  
      const data =
        formType === "login"
          ? {
              grant_type: "password",
              username: email,
              password,
            }
          : {
              name,
              email,
              password,
              confirmPassword,
            };
  
      const response: IResponse = await fetchAPI({
        route: endpoint,
        method: "POST",
        data,
      });
  
      if (response) {
        const refreshToken = response.refresh_token;
        const accessToken = response.access_token;
        setLoginError(false);
        changeIsUserLoggedIn(true);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("access_token", accessToken);
        navigate("/landing");
      }
    } catch (error) {
      setLoginError(true);
      //@ts-ignore
      loginTimeout = setTimeout(() => setLoginError(false), 1500);
    }
  };
  

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${require("../assets/layout_pic.png")})`,
      }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      
      <div className={`flip-card ${formType === "register" ? "flip" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FormControl
              style={{
                backgroundColor: "white",
                width: "90%",
                height: "100%",
              }}
              className="d-flex flex-column align-items-center justify-content-center p-5 rounded"
            >
              <img
                src={require("../assets/Header/New_RaaP_Logo.png")}
                alt="RaaP_Logo"
                style={{
                  width: "10%",
                  left: "-5%",
                  position: "absolute",
                  top: "5%",
                }}
              />
              <div className="button-container">
        <Button
          onClick={() => setFormType("login")}
          className="toggle-button"
          variant="contained"
          style={{
            backgroundColor: formType === "login" ? "#275317" : "#999",
            borderRadius: "10%",
            marginRight: "10px",
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => setFormType("register")}
          className="toggle-button"
          variant="contained"
          style={{
            backgroundColor: formType === "register" ? "#275317" : "#999",
            borderRadius: "10%",
          }}
        >
          Register
        </Button>
      </div>
              <div
                style={{ marginTop: "15%" }}
                className="d-flex flex-column justify-content-center align-items-center w-100"
              >
                <div className="form-container">
                  <TextField
                    id="outlined-basic"
                    className="rounded form-item"
                    value={email}
                    onChange={onEmailChanged}
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    type="email"
                    variant="outlined"
                    style={{ backgroundColor: "white", width: "20%" }}
                  />
                  <TextField
                    className="rounded form-item"
                    value={password}
                    onChange={onPasswordChanged}
                    id="outlined-basic"
                    InputLabelProps={{ shrink: true }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    style={{ backgroundColor: "white", width: "20%" }}
                  />
                </div>
                <Button
                  onClick={onFormSubmitted}
                  className="mt-5 w-30 py-3"
                  variant="contained"
                  style={{
                    backgroundColor: "#275317",
                    borderRadius: "10%",
                    height: "15%",
                  }}
                >
                  Login
                </Button>
                <Link
                  className="h5 text-primary mt-3"
                  to="#"
                  onClick={() => setFormType("register")}
                >
                  I'd like to register.
                </Link>
              </div>
            </FormControl>
          </div>
          <div className="flip-card-back">
            <FormControl
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "100%"
              }}
              className="d-flex flex-column align-items-center justify-content-center p-5 rounded"
            >
              <img
                src={require("../assets/Header/New_RaaP_Logo.png")}
                alt="RaaP_Logo"
                style={{
                  width: "10%",
                  left: "5%",
                  position: "absolute",
                  top: "5%",
                }}
              />
              <div className="button-container">
        <Button
          onClick={() => setFormType("login")}
          className="toggle-button"
          variant="contained"
          style={{
            backgroundColor: formType === "login" ? "#275317" : "#999",
            borderRadius: "10%",
            marginRight: "10px",
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => setFormType("register")}
          className="toggle-button"
          variant="contained"
          style={{
            backgroundColor: formType === "register" ? "#275317" : "#999",
            borderRadius: "10%",
          }}
        >
          Register
        </Button>
      </div>
              <div
                style={{ marginTop: "10%" }}
                className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
              >
                <div className="form-container">
                  <TextField
                    id="outlined-basic"
                    className="rounded form-item"
                    value={name}
                    onChange={onNameChanged}
                    label="Name"
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                  />
                  <TextField
                    id="outlined-basic"
                    className="rounded form-item"
                    value={email}
                    onChange={onEmailChanged}
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    type="email"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                  />
                  <TextField
                    className="mt-5 rounded form-item"
                    value={password}
                    onChange={onPasswordChanged}
                    id="outlined-basic"
                    InputLabelProps={{ shrink: true }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                  />
                  <TextField
                    className="mt-5 rounded form-item"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChanged}
                    id="outlined-basic"
                    InputLabelProps={{ shrink: true }}
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <Button
                  onClick={onFormSubmitted}
                  className="mt-5 w-30 py-3"
                  variant="contained"
                  style={{
                    backgroundColor: "#275317",
                    borderRadius: "10%",
                    height: "15%",
                  }}
                >
                  Register
                </Button>
                <Link
                  className="h5 text-primary mt-3"
                  to="#"
                  onClick={() => setFormType("login")}
                >
                  I already have an account.
                </Link>
              </div>
            </FormControl>
          </div>
        </div>
      </div>

      {loginError && (
        <Alert
          className="mt-5  position-absolute"
          style={{
            bottom: 100,
            right: 40,
          }}
          severity="error"
        >
          <AlertTitle>Error</AlertTitle>
          The information you provided is not correct
        </Alert>
      )}
    </div>  
  );
}

export default Register;
