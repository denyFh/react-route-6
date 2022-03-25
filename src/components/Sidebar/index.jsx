import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import close from "../../close-icon.svg";

const Sidebar = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleClick = (e) => {
        if (isMenuOpened !== true) {
            setIsMenuOpened(!e.target.isMenuOpened);
        } else {
            setIsMenuOpened(false);
        }
    }

    let activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    return (
        <div className="sidebar">
            <OffCanvas
                width={220}
                transitionDuration={300}
                effect={'parallax'}
                isMenuOpened={isMenuOpened}
                position={'left'}
            >
                <OffCanvasBody
                    style={{ fontSize: "30px" }}
                >
                    <div className="sidebarBurger">
                        <button onClick={handleClick} className={`burger ${isMenuOpened ? 'clicked' : ''}`}>
                            <svg viewBox="0 0 100 80" width="40" height="40">
                                <rect width="100" height="14" rx="8"></rect>
                                <rect y="30" width="100" height="14" rx="8"></rect>
                                <rect y="60" width="100" height="14" rx="8"></rect>
                            </svg>
                        </button>
                    </div>
                </OffCanvasBody>
                <OffCanvasMenu style={{ padding: "3rem" }}>
                    <button onClick={handleClick}>
                        <div className="close">
                            <p>Close Menu</p>
                            <img src={close} alt="close-icon" style={{ width: "28px" }} />
                        </div>
                    </button>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about/about-app"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                About App
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about/about-author"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                About Author
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/notfound"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Page Not Found
                            </NavLink>
                        </li>
                    </ul>
                </OffCanvasMenu>
            </OffCanvas>
        </div>
    );
}

export default Sidebar;