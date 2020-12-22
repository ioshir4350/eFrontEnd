import React, {useState, useCallback} from 'react'
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import NavBar from './shared/components/Navbar'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(false)

  const login = useCallback(uid => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null)
  }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <h1>Add Components to Home</h1>
        </Route>
        <Route path="/demo">
          <h1>Add Components to demo</h1>
        </Route>
        <Route path="/demo2">
          <h1>Add Components to demo2</h1>
        </Route>
        <Route path="/auth">
          <h1>Add Components to login</h1>
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  } else{
    routes = (
      <Switch>
        <Route path="/">
          <h1>hey</h1>
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>{routes}</main>
      </Router>
    </div>
  );
}

export default App;
