export type SignUpFormTp = {
  name?: string;
  Labelname1?: string;
  Labelname2?: string;
  Email?: string;
  inputEmail?: string;
  Password?: string;
  inpupassword1?: string;
  inpupassword2?: string;
};

export const signUpFormProps: SignUpFormTp = {
  name: "Name",
  Labelname1: "First Name",
  Labelname2: "Last Name",
  Email: "Email",
  inputEmail: "Enter your email",
  Password: "Password",
  inpupassword1: "Enter password",
  inpupassword2: "Re-password"
};
