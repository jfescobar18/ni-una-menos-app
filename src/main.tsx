// React
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Libs
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"
// Redux Store
import activeDeviceReducer from "./app/activeDevice/reducer"
// Pages
import LoginPage from "./pages/LoginPage"
import MenuPage from "./pages/MenuPage"
import DashboardPage from "./pages/DashboardPage"
// Components and Containers
// Types and Interfaces
// Hooks

const store = createStore(activeDeviceReducer)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
)
