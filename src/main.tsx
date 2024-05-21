import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Oppgave1 } from "./oppgaver/Oppgave1.tsx";
import { Oppgave2 } from "./oppgaver/Oppgave2.tsx";
import { Oppgave3 } from "./oppgaver/Oppgave3.tsx";
import { Oppgave4 } from "./oppgaver/Oppgave4.tsx";
import { Oppgave5 } from "./oppgaver/Oppgave5.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>React 19 workshop</h1>,
      },
    ],
  },
  {
    path: "/oppgave",
    element: <App />,
    children: [
      {
        index: true,
        element: null,
      },
      {
        path: "1",
        element: <Oppgave1 />,
      },
      {
        path: "2",
        element: <Oppgave2 />,
      },
      {
        path: "3",
        element: <Oppgave3 />,
      },
      {
        path: "4",
        element: <Oppgave4 />,
      },
      {
        path: "5",
        element: <Oppgave5 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
