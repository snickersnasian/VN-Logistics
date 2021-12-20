import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { OrdersPage } from './pages/OrsersPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/orders"  element={<OrdersPage/>} />

                <Route path="*"  element={<Navigate to="orders" />} />
            </Routes>
        )
    }

    return (
        <div>
            
        </div>
    )
}