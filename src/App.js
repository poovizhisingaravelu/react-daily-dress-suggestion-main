import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ButtonAppBar from "./components/ButtonAppBar";
import Home from "./components/Home";
import Question from "./components/Question";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="question" element={<Question />} />
            <Route path="main" element={<Main />} />
            <Route path="detail" element={<Detail />} />
            <Route path="signin" element={<SignIn />} />
          </Routes>
        </main>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </BrowserRouter>
    </div>
  );
};

export default App;
