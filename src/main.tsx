import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import rootReducer from './slices/index.ts'
import { configureStore } from '@reduxjs/toolkit'

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#858585",
    },
  }
})

export const store = configureStore({ reducer: rootReducer })

window.addEventListener("DOMContentLoaded", function () {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
  )
});


export type AppDispatch = typeof store.dispatch;