import { Route, Routes } from "react-router-dom";

import UserPanel from "../userPanel/UserPanel";
import UserProfile from "../userProfile/UserProfile";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserPanel />} />
            <Route path="/profile/:id" element={<UserProfile />}/>
            <Route path="*" element={<div>Route not found</div>} />
        </Routes>
    );
};

export default App;
