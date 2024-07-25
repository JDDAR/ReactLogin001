import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext.js";

//iconos
import { IoLogoGoogleplus } from "react-icons/io";
import { IoLogoOctocat } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import InputPassword from "./InputPassword.jsx";

const SingIn = () => {
  let { setStep } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Focus de los inputs del formulario
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const handlerSumit = (e) => {
    //2enviar el envio de datos al backend
    e.preventDefault();
    console.log("sending data backend ... ");
    console.log(`El usuario digito: ${email} y ${password}`);
  };

  return (
    <>
      <main className="mainFormLogin">
        <div className="mainFormLogin__logo">
          <h3>BL</h3>
          <h4>¡Hola! Estas de vueta </h4>
        </div>
        <div className="mainFormLogin__card">
          <form onSubmit={handlerSumit} autoComplete="off">
            <fieldset>
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                autoFocus
                required
                onBlur={() => setEmailFocused(true)}
                data-focused={emailFocused}
              />
              <p className="error">El correo no es valido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="password">Contraseña</label>
              {/*
              <InputPassword />
              */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                pattern="(?=.*[\w])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
                onBlur={() => setPasswordFocused(true)}
                data-focused={passwordFocused}
              />
              <p className="error">Contraseña incorrecta</p>
              <div className="inputCheck">
                <span>
                  <input type="checkbox" id="recordarme" />
                  <label htmlFor="recordarme">Recordarme</label>
                </span>
                <p className="forgot" onClick={() => setStep("forgot")}>
                  ¿Olvidaste su contraseña?
                </p>
              </div>
            </fieldset>
            <button type="submit">Iniciar Sesion</button>
          </form>
        </div>

        <div className="mainFormLogin__social">
          <div className="or">
            <hr className="hrSocial" />
            <p>Ó</p>
            <hr className="hrSocial" />
          </div>
          <section className="iconSocial">
            <a href="">
              <IoLogoGoogleplus />
            </a>
            <a href="">
              <IoLogoOctocat />
            </a>
            <a href="">
              <IoLogoTwitter />
            </a>
          </section>
          <p className="socialCrear">
            ¿No tiene una cuenta?{" "}
            <span onClick={() => setStep("singUp")}>Crear Cuenta</span>
          </p>
        </div>
      </main>
    </>
  );
};
export default SingIn;
