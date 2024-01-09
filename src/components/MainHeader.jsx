import React from "react";
import {Route, Link} from "react-router-dom"

export default function MainHeader(){
    return (
        <nav>
            <Link>Tasks</Link>
            <Link>Pricing</Link>
            <Link>Terms and Conidtions</Link>
        </nav>
    )
}