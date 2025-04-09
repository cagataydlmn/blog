import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {loginSuccess} from "../../store/auth";
import {useDispatch} from "react-redux";

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        lastName: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === formData.email)) {
            alert("Bu email zaten kayıtlı!");
            return;
        }
        const newUser = {
            ...formData,
            id: Date.now()
        };
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        dispatch(loginSuccess(newUser));
        alert("Kayıt Başarılı!");
        navigate("/");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Kayıt Ol</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">İsim</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                placeholder="Çağatay"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Soyisim</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                placeholder="Dalaman"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="cagataydalaman@outlook.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Şifre</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md"
                        >
                            Kayıt Ol
                        </button>
                    </div>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-200"></div>
                    <span className="px-3 text-gray-500 text-sm">veya</span>
                    <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Hesabınız var mı?{" "}
                    <a href="/login" className="text-blue-600">
                        Giriş Yap
                    </a>
                </p>
            </div>
        </div>
    );
}