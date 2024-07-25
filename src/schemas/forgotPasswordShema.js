import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("ingrese un correo valido "),
});
