export const checkValidateData=(email,password)=>{
let checkEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
let checkPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

if(!checkEmail)
return 'Email Id is not valid'

if(!checkPassword)
return 'Password is not valid'

return null;
}