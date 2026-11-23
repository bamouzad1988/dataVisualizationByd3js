import { Link, Outlet } from "react-router";
import './index.css'

export default function Layout() {
    return (
        <>
            <nav className="flex gap-4 justify-center bg-amber-800 py-4">
                <Link className="" to="/">Home</Link>
                <Link to="/bar">Bar</Link>
                <Link to="/line">Line</Link>
                <Link to="/svg-test">svg test</Link>
            </nav>
            <div className="p-6">

                <Outlet />
            </div>
        </>
    );
}