import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../../context/AuthContext";
import { singUpShema } from "../../schemas/sungUpSchema";
//Iconos
import { IoLogoGoogleplus, IoLogoTwitter, IoLogoOctocat } from "react-icons/io";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirm: "",
};

const SingUp = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <main className="mainFormLogin">
        <div className="mainFormLogin__logo">
          <h3>BL</h3>
          <h4>Registrate</h4>
        </div>
        <div className="mainFormLogin__card">
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={singUpShema}
          >
            <Form autoComplete="off">
              <fieldset>
                <label htmlFor="fullName">Nombre Completo</label>
                <Field name="fullName" id="fullName" type="text" autoFocus />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Correo</label>
                <Field name="email" id="email" type="email" />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="password">Contraseña</label>
                <Field name="password" id="password" type="password" />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="confirm">Confirma la Contraseña</label>
                <Field name="confirm" id="confirm" type="password" />
                <ErrorMessage
                  name="confirm"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <button type="submit">Registrarme</button>
            </Form>
          </Formik>
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
            ¿ya tienes una cuenta?{" "}
            <span onClick={() => setStep("singIn")}>Iniciar Sesión</span>
          </p>
        </div>
      </main>
    </>
  );
};
export default SingUp;
