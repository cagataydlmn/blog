import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogCart() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/data/dummy.json')
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(error => console.error('Error loading data:', error));
    }, []);

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
            {blogs.map((blog) => (
                <Link
                    to={`blog/${blog.id}`}
                    className="blog-card group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col no-underline bg-white"
                    key={blog.id}
                >
                    <div className="blog-card__image relative h-48 overflow-hidden">
                        <img
                            src={blog.img}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                            {blog.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {blog.content}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2 overflow-hidden">

                                    <img
                                        src="/PHOTO-2024-07-03-00-54-36.jpg"
                                        alt="Profil fotoğrafı"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />                                </div>
                                <div>
                                    <span className="text-lg font-bold">{blog.author}</span>
                                    <div className="text-xs text-gray-500">{blog.date}</div>
                                </div>


                            </div>
                            <div className=" bottom-5 right-5">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              İncele
            </span>
                        </div>

                        </div>

                    </div>


                </Link>
            ))}
        </div>
    );
}