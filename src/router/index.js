import React from 'react'

import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom'

import Home from '../components/index'
import Recommend from '../components/recommend'
import Player from '../components/player'
import Search from '../components/search'

import Menu from '../components/menu'

// // const Basic = () => (
// //   <Router>
// //     <div>
// //       <Route exact path='/' component={Home} />
// //       <Route path='/search' component={Search} />
// //       <Route path='/recommend' component={Recommend} />
// //       <Route path='/player/:id' component={Player} />
// //     </div>
// //   </Router>
// // )

const routes = [
  {
    path: '/index/:id',
    exact: true,
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/player/:id',
    component: Player
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    <route.component {...props} routes={route.routes} />  
  )} />
)


const Basic = () => (
  <Router>
    <div>
      <Menu />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)





export default Basic






/**
 * custom link 
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
)  

* prompt 离开前询问
 * switch   包含下的 <Route component={NoMatch}/> 404 page.

 */

