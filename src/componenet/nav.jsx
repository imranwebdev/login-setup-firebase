import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {useContext } from "react";
import { UserContex } from "./userContex";

function Nav() {
    const {currentUser} = useContext(UserContex);

    return (

        <>
        {currentUser ? (<button >sing out</button>):(   <Link to="/singin">sing in</Link>)}
            <h1>this is nav section</h1>
            <Link to="/">home</Link> &nbsp;
            <Link to="/home">products</Link>
            &nbsp;
            <Link to="/singin">sing in</Link>
            &nbsp;
            <Link to="/singup">sing up</Link>
            <Outlet />

        </>
    )
}
export default Nav;