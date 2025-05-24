import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />}/>
                
                </Route>
            </Routes>
            
            </BrowserRouter>
        </>
     );
}
 
export default Paths;