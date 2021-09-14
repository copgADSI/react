import React from 'react'
import {Navigate} from './components/Navigate'
import {MovieDetails} from './pages/MovieDetails'
import { LandingPage } from './pages/LandingPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
}
from 'react-router-dom'
export  function App({title,content}) {
    return (
        <Router>
          <Navigate/>
            <main>
                <Switch>
                   <Route exact path="/Movies/:movieId"> <MovieDetails/> </Route>
                   <Route  path="/"> <LandingPage/> </Route>
                </Switch>
            </main>
        </Router>
    )
}


