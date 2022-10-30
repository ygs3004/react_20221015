import logo from "./logo.svg";
import "./App.css";
import { Reset } from "styled-reset";
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Detail from "./Detail";

const routesArr = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
    children: [
      {
        path: ":userId",
        element: <Detail />,
      },
    ],
  },
];

function App() {
  const [userId, setUserId] = useState(0);

  const navigate = useNavigate();

  const element = useRoutes(routesArr);

  return (
    <>
      <AppBlock>
        {/* <Reset /> */}
        <Header />
        <input type="number" onChange={(e) => setUserId(e.target.value)} />
        <button onClick={() => navigate("/about/" + userId)}>이동</button>
        {element}

        {/* 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/*" element={<About />}></Route>
        </Routes> */}
      </AppBlock>
    </>
  );
}

// !important : 무한
// inline : 1000점
// id: 100점
// class:10점
// 태그(타입) : 1점
// *(전체) : 0점

const AppBlock = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    display: flex;
    margin-bottom: 10px;
    li {
      margin: 0 20px;
      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;

// const StyledLink = styled(Link)`
//   color: red;
// `;

export default App;
