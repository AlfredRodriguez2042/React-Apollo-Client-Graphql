import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './Redux/store'
import { Provider } from 'react-redux'

//Styles
import './scss/main.scss'
//Paths
import AppRouter from './Routes/AppRouter'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <AppRouter />

        <Footer />
      </Router>
    </Provider>
  )
}

export default App
