import React from "react"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminsidebar from "../Components&sections/Admin Components/sidebar";
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";

import AdminWelcomepage from "../Components&sections/Admin Pages/Admin Welcome page";
import Viewadmins from "../Components&sections/Admin Pages/Admins";
import Users from "../Components&sections/Admin Pages/Users";
import Professionals from "../Components&sections/Admin Pages/Professionals";

const Administrator=()=>{
    return(
        <div>
            <Router>
                <Adminsidebar/>
                <Switch>
                    <Route path="/Admin/viewadmins">
                        <Viewadmins/>
                    </Route>
                    <Route path="/Admin/users">
                        <Users/>
                    </Route>
                    <Route path="/Admin/professionals">
                        <Professionals/>
                    </Route>
                    <Route path="/Admin">
                        <AdminWelcomepage/>
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