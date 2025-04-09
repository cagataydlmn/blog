// src/components/Navbar.jsx
import {Link, Outlet} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../store/auth";

export default function Navbar() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar bg-white text-gray-800 shadow-sm sticky top-0 z-50">
                <div className="w-4/5 mx-auto ">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link
                                to="/"
                                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            >
                                Logo
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    <div className="hidden md:flex items-center space-x-2">

                                        <span className="text-sm font-medium text-gray-700">{user.name}</span>
                                        <span className="text-sm font-medium text-gray-700">{user.lastName}</span>
                                    </div>

                                    <button
                                        onClick={() => dispatch(logout())}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center"
                                    >
                                        Çıkış
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        Giriş Yap
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:opacity-90 transition-all duration-200"
                                    >
                                        Kayıt Ol
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}