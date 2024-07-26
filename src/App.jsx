import { useState } from "react";

import AuthContext from "./context/AuthContext";

import ForgotPassword from "./components/formLogin/ForgotPassword";
import SingIn from "./components/formLogin/SingIn";
import SingUp from "./components/formLogin/SingUp";
import ContentLeft from "./components/contentLeft/ContentLeft";
import NavPrimary from "./components/NavPrimary/NavPrimary";

function App() {
  const [step, setStep] = useState("singUp");

  return (
    <AuthContext.Provider value={{ step, setStep }}>
      <NavPrimary />
      <section className="sectionContainer">
        <ContentLeft />
        <section className="formSection">
          {step === "singIn" && <SingIn />}
          {step === "singUp" && <SingUp />}
          {step === "forgot" && <ForgotPassword />}
        </section>
      </section>
    </AuthContext.Provider>
  );
}

export default App;
