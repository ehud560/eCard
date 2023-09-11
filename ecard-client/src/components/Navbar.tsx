import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {
    userInfo: any;
    setUserInfo: Function;
}

const Navbar: FunctionComponent<NavbarProps> = ({ userInfo, setUserInfo }) => {
    let navigate = useNavigate();
    let logout = () => {
        sessionStorage.removeItem("userInfo");
        setUserInfo({ email: false, isAdmin: false });
        navigate("/");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-primary" to="/home">
                        Ecard
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {userInfo.email ? (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-primary" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-primary" to="/profile">
                                        Profile
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn text-primary border-primary " onClick={logout}>
                                    Logout
                                </button>
                            </form>
                        </div>
                    ) : (
                        <form className="d-flex ">
                            <NavLink className="btn text-primary border-primary " to="/">
                                Login
                            </NavLink>
                            <NavLink className="btn text-primary border-primary" to="/register">
                                Register
                            </NavLink>
                        </form>

                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
