import { AppBar, Container, Typography, Box, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs'; 

export default function SignUpPage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Flashcard SaaS
          </Typography>
          <Button color="inherit" component={Link} href="/sign-in">
            Sign In
          </Button>
          <Button color="inherit" component={Link} href="/sign-up">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }} 
      >
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <SignUp />
      </Box>
    </Container>
  );
}
