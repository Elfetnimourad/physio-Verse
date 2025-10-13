/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
 import GoogleIcon from '@mui/icons-material/Google';
 import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SignIn from './SignIn'
import {signInWithPopup,auth,provider,GoogleAuthProvider,signUpWithEmailAndPassword} from './FirebaseConfig';
import Hero from './Hero';
import {onAuthStateChanged } from "firebase/auth";
import Avatar from '@mui/material/Avatar';



export default function SignUp({open,setOpened}) {
      // const [photo,setPhoto] = React.useState()
    const [username,setUsername] = React.useState<string>("");
        const [user,setUser] = React.useState<string>();

  
  const [isOpen, setIsOpen] = React.useState(false);
  const[email,setEmail] = React.useState<string>("");
    const[password,setPassword] = React.useState<string>("");
    const[photo,setPhoto] = React.useState<string>();
    const[openHero,setOpenHero] = React.useState<boolean>(false);

    const [seccussModal, setSeccussModal] = React.useState(false);
    const [goToSign,setGoToSign] =React.useState(false);

  const theme = useTheme();
 const regUserName = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/g ;
  const regEmail = /^[a-z0-9]+@[a-z]+.[a-z]+$/g ;
  const regPass = /^[a-z0-9]+$/ ;
  React.useEffect(() => {
    console.log("chof trah",regUserName.test(username),regEmail.test(email),regPass.test(password))
  onAuthStateChanged(auth,(user)=>{
    if(user){
        setUser(user?.displayName);
        console.log("User state",user);
       
  }else{
  console.log("User Signed Out")
    }
  })
  }, [email, password, regEmail, regPass, regUserName, username]);


 const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log("with google", user);
      alert(`Welcome ${user.displayName}`);
      const data = user.photoURL;
            setPhoto(data)
setOpenHero(true)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
 const handleClickOpen = () => {
    setIsOpen(open);
  };

  const goToSignIn = () => {
    setOpened(!open);
    setGoToSign(true);
    handleClose();
    setSeccussModal(false)
  };
const handleClose = () => {
    setOpened(!open);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    // const email = formJson.email;
    console.log(email);
    handleClose();

  };
 
  const submitHand = ()=>{
    if(regUserName.test(username) && regEmail.test(email) && regPass.test(password)){
 setSeccussModal(true);
 signUpWithEmailAndPassword(username,email,password)
    }else{
      alert('There is Error')
    }

  

  }
  console.log({
  usernameValid: regUserName.test(username),
  emailValid: regEmail.test(email),
  passwordValid: regPass.test(password)
});

    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
    
      <Dialog open={open} onClose={handleClose} className='text-center'>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
Create an account

          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="username"
              label="username"
              type="text"
              fullWidth
              variant="standard"
               value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
             
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
                    <FormControl sx={{width:'100%'}} variant="standard">

              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          value={password}
              onChange={(e)=>setPassword(e.target.value)}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
           </FormControl>
          </form>
        </DialogContent>
        <DialogActions className='d-flex row justify-content-center'>
          
 <Button type="submit" form="subscription-form" sx={{width:'70%',m:1}} variant="contained" onClick={submitHand}>
            Sign Up
          </Button>
           <Button variant="contained" onClick={signInWithGoogle} sx={{width:'70%',m:1}} startIcon={ <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
      width="20"
      height="20"
    />}>
Sign Up With Google</Button>
         
        </DialogActions>
      </Dialog>
       <Dialog
        fullScreen={fullScreen}
        open={seccussModal}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        {username},  Welcome to PhysioVerse 🎉
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your account has been created successfully!  
          Start discovering and exploring the world of physiotherapy
          with PhysioVerse.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>setSeccussModal(false)}>
            Disagree
          </Button>
          <Button onClick={goToSignIn} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
       <SignIn openToSign={goToSign} setGoToSign={setGoToSign}/>
    </React.Fragment>
  );
}
