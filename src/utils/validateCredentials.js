export const validateCredentials=(email,password)=>{
     
  const emaildata= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const passworddata=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if(!emaildata) return "Email is not valid.";
  if(!passworddata) return "Password is not valid.";

  return null;
};