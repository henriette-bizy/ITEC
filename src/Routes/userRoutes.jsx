import { Routes, Route, Navigate} from "react-router-dom";
import { UserDashboard } from "../pages/user/userDashboard";


function UserRoutes(){
return(
    <Routes>
        <Route
        path="receipts"
        element ={
            <UserDashboard />
        }
        >
            
        </Route>
        <Route
        path="receipts"
        element ={
            <UserDashboard />
        }
        >
            
        </Route>
        <Route path="*" element={<Navigate to="receipts" />} />
    </Routes>

)
}

export default UserRoutes;