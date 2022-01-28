import React from "react";
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <Link to="/">Home</Link> &nbsp;| &nbsp;
            <Link to="/lookup">Lookup</Link>
            <br></br>
            <br></br>
            <br></br>
        </>
    )

}