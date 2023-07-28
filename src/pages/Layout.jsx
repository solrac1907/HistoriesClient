import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mr-4 ml-4">
                <h2 className="pl-4" style={{ paddingLeft: '20px' }}>Historiales</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link to="/client" className="nav-link">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tramos">Tramos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tramosForClient">Tramos por cliente</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;