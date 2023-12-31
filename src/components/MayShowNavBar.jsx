import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export const MayShowNavBar = ({ children }) => {

    const location = useLocation()

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {   
        if (location.pathname === '/login') {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location])
    
    return (
        <div>{showNavbar && children}</div>
    )
}