import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./Navbarelements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/users" activeStyle>
                        Users
                    </NavLink>
                    <NavLink to="/parkingslots-admin" activeStyle>
                        Parking Slots
                    </NavLink>
                    <NavLink to="/feedbacks-admin" activeStyle>
                        Feedbacks
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/logout">
                        Log out
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;