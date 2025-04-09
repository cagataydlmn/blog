import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {loginFailure, loginSuccess} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user =>
            user.email === email && user.password === password
        );
        if (user) {
            dispatch(loginSuccess(user));
            alert("Giriş Başarılı");
            navigate("/");
        } else {
            dispatch(loginFailure("Geçersiz email veya şifre!"));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Giriş Yap</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="cagataydalaman@outlook.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Şifre</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>



                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md"
                        >
                            Giriş Yap
                        </button>
                    </div>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-200"></div>
                    <span className="px-3 text-gray-500 text-sm">veya</span>
                    <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Hesabınız yok mu?{" "}
                    <a href="/register" className="text-blue-600">
                        Kayıt Ol
                    </a>
                </p>
            </div>
        </div>
    );
}