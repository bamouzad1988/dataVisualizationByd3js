import { Link, Outlet } from "react-router";
import './index.css'

export default function Layout() {
    return (
        <>
            <nav className="flex gap-4 justify-center">
                <Link className="" to="/">Home</Link>
                <Link to="/bar">Bar</Link>
            </nav>

            <Outlet />
        </>
    );
}