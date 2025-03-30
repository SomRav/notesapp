import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

// const promise = axios.get("http://localhost:3001/notes");
// console.log(promise);
// promise.then((response) => {
//   const notes = response.data;
//   console.log(notes);
// });
// axios
//   .get("http://example.com/probably_will_fail")
//   .then((response) => {
//     console.log("success!");
//   })
//   .catch((error) => {
//     console.log("fail");
//   });
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
