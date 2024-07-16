import { Routes, Route, Navigate} from "react-router-dom";

import { AdminDashboard } from "../pages/admin/adminDashboard";
import { Statistics } from "../pages/admin/statistics";
import { NewRequests } from "../pages/admin/newRequests";
import { Analytics } from "../pages/admin/analytics";


function AdminRoutes(){
return(
    <Routes>
        <Route
        path="requests"
        element ={
            <AdminDashboard />
        }
        >
            
        </Route>
        <Route
        path="statistics"
        element ={
            <Statistics />
        }
        >
            
        </Route>

        <Route
        path="analytics"
        element ={
            <Analytics />
        }
        >
            
        </Route>

        <Route
        path="newRequests"
        element ={
            <NewRequests />
        }
        >
            
        </Route>
        <Route path="*" element={<Navigate to="requests" />} />
    </Routes>

)
}

export default AdminRoutes;