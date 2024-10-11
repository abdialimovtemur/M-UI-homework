import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './config/mui-config';
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </>
)
