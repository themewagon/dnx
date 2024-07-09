import { useState, ChangeEvent, FormEvent } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import paths from 'routes/paths';

interface User {
  [key: string]: string;
}

const Signup = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <Typography align="center" variant="h4">
        SignUp
      </Typography>
      <Stack direction="column" mt={3} spacing={2} width={1}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<IconifyIcon icon="logos:google-icon" />}
          sx={{ bgcolor: 'info.main', '&:hover': { bgcolor: 'info.main' } }}
        >
          Sign Up with Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<IconifyIcon icon="logos:apple" />}
          sx={{ bgcolor: 'info.main', '&:hover': { bgcolor: 'info.main' } }}
        >
          Sign Up with Apple
        </Button>
      </Stack>
      <Divider sx={{ my: 4 }}>or Signup with</Divider>
      <Stack onSubmit={handleSubmit} component="form" direction="column" gap={2}>
        <TextField
          id="name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Name"
          autoComplete="name"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Email"
          autoComplete="email"
          fullWidth
          required
        />
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: user.password ? 1 : 0,
                  pointerEvents: user.password ? 'auto' : 'none',
                }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ border: 'none', bgcolor: 'transparent !important' }}
                  edge="end"
                >
                  <IconifyIcon
                    icon={showPassword ? 'fluent-mdl2:view' : 'fluent-mdl2:hide-3'}
                    color="neutral.light"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" size="medium" fullWidth sx={{ mt: 1.5 }}>
          Submit
        </Button>
        <Typography
          mt={3}
          letterSpacing={0.25}
          color="text.secondary"
          variant="body2"
          align="center"
        >
          Already have an account? <Link href={paths.signin}>Signin</Link>
        </Typography>
      </Stack>
    </>
  );
};

export default Signup;
