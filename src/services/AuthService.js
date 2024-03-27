import axios from "../utils/axios";
import { setToken } from "./TokenService"; //getToken,

export async function login(credentials) {
  //try catch remains
  const { data } = await axios.post(
    "/login",
    credentials
    // { //Already set in axios file
    //   headers: {
    //     Accept: "application/json",
    //   },
    // }
  );
  await setToken(data.token);
}

export async function register(registerInfo) {
  const { data } = await axios.post("/register", registerInfo);
  await setToken(data.token);
}

export async function sendPasswordResetLink(email) {
  const { data } = await axios.post("/forgot-password", { email });
  return data.status;
}

export async function loadUser() {
  //credentials
  const token = await getToken();
  const { data: user } = await axios.get(
    "/user" // {
    //   headers: {
    //     // Accept: "application/json",  // already set in axios file
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  return user;
}

export async function logout() {
  // const token = await getToken();
  await axios.post(
    "/logout",
    {}
    // { //already set in axios file as interseptor as if token is not nullm then add bearer token in Header
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  await setToken(null);
}

// async function handleLogin(params) {
//   setErrors({}); //reset Errors
//   try {
//   } catch (e) {
//     if (e.response?.status === 422) {
//       setErrors(e.response.data.errors);
//     }
//   }
//   // console.log(email, password);
// }
