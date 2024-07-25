import { useFormik } from "formik";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { forgotPasswordSchema } from "../../schemas/forgotPasswordShema";

const ForgotPassword = () => {
  let { setStep } = useContext(AuthContext);
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  function onSubmit() {
    console.log(values);
  }

  return (
    <>
      <main className="mainFormLogin">
        <div className="mainFormLogin__logo">
          <h3>BL</h3>
          <h4>Recupera tu contraseña </h4>
        </div>
        <div className="mainFormLogin__card">
          <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset>
              <label htmlFor="email">Correo de recuperación</label>
              <input
                type="email"
                id="email"
                autoFocus
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </fieldset>
            <button type="submit">Recuperar contraseña</button>
          </form>
        </div>

        <div className="mainFormLogin__social">
          <p className="socialCrear">
            ¿ya tienes una cuenta?{" "}
            <span onClick={() => setStep("singIn")}>Iniciar Sesión</span>
          </p>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
