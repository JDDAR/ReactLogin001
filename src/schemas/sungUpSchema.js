import * as Yup from "yup";

export const singUpShema = Yup.object().shape({
  fullName: Yup.string("El nombre no pueden ser numeros").required(
    "El nombre completo es necesario",
  ),
  email: Yup.string()
    .email("Ingrese un correo valido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(8, "la contraseña debe tener minimo 8 caracteres")
    .matches(
      /(?=.*[\w])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "La contraseña debe tener Mayusculas,minusculas y simbolos",
    )
    .required("La contraseña en obligatoria"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las contraseñas no coinciden",
  ),
});
