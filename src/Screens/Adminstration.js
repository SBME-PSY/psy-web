import React from "react"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminsidebar from "../Components&sections/Admin Components/sidebar";
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import AdminWelcomepage from "../Components&sections/Admin Panel sections/Admin Welcome page";
import Users from "../Components&sections/Admin Panel sections/Users";
import Professionals from "../Components&sections/Admin Panel sections/Professionals";


const Administrator=()=>{
    return(
        <div>
            <Router>
                <Adminsidebar/>
                <Switch>
                    <Route exact path="/AdminPanel">
                        <AdminWelcomepage/>
                    </Route>
                    <Route path="/Admin/users">
                        <Users/>
                    </Route>
                    <Route path="/Admin/professionals">
                        <Professionals/>
                    </Route>
                    {/* <Route path='/reports' exact component={Reports} />
                    <Route path='/reports/reports1' exact component={ReportsOne} />
                    <Route path='/reports/reports2' exact component={ReportsTwo} />
                    <Route path='/reports/reports3' exact component={ReportsThree} />
                    <Route path='/team' exact component={Team} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Administrator;