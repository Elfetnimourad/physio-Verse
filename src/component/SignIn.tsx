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
import SignUp from './SignUp';
import signInWithEmailAndPasswordFunction from './FirebaseConfig';
import signInWithGoogle from './FirebaseConfig';

export default function SignIn({openToSign,setGoToSign}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [username,setUsername] = React.useState<string>()

 const handleClickOpen = () => {
    setIsOpen(open);
  };

  const handleClose = () => {
    setGoToSign(!openToSign);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
    signInWithEmailAndPasswordFunction(username,email,password);
    signInWithGoogle()
  };
    const [showPassword, setShowPassword] = React.useState(false);
 const[email,setEmail] = React.useState<string>();
    const[password,setPassword] = React.useState<string>();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
    
      <Dialog open={openToSign} onClose={handleClose} className='text-center'>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
 

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
          
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
 <Button type="submit" form="subscription-form" sx={{width:'70%',m:1}} variant="contained">
            Sign In
          </Button>
           <Button variant="contained" sx={{width:'70%',m:1}} startIcon={ <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
      width="20"
      height="20"
    />}>
Sign In With Google</Button>
         
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}
