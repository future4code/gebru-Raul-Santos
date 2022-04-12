import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useProtectedPage = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token === null || token === ""){
            navigate("/login")
        }
    },[navigate])
    return(
        <div>
        </div>
    )
}

export default useProtectedPage 