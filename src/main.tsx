import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './Context/AuthContext.context'
import { GlobalStyles } from './Theme/MainWrapper'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <GlobalStyles />
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// ReactDOM.createRoot(
//   document.getElementById('root')!
// ).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// )
