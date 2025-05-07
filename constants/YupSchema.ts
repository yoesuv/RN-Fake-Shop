import * as Yup from "yup";

export interface ILoginInput {
    username: string;
    password: string;
  }

export const schemaYupLogin = Yup.object().shape({
    username: Yup.string()
      .required("enter an username")
      .min(5, "username min 5 character"),
    password: Yup.string()
      .required("enter a password")
      .min(5, "password min 5 character"),
  });