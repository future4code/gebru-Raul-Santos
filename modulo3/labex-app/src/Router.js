import react from "react"
import HomePage from "./pages/Home"
import AdminHome from "./pages/AdminHomePage"
import ApkForm from "./pages/ApplicationFormPage"
import CreatTripPage from "./pages/CreateTripPage"
import ListTrip from "./pages/ListTripsPage"
import LoginPages from "./pages/LoginPage"
import DetailsPage from "./pages/TripDetailsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="about/:language" element={<AdminHome />}/>
                <Route path="about/:language" element={<ApkForm />}/>
                <Route path="about/:language" element={<CreatTripPage />}/>
                <Route path="about/:language" element={<ListTrip />}/>
                <Route path="about/:language" element={<LoginPages />}/>
                <Route path="about/:language" element={<DetailsPage />}/>
                
            </Routes>
        </BrowserRouter>
    )

}