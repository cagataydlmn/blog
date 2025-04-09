import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetail() {
    const { blogid } = useParams();
    const [blog, setBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/data/dummy.json');
                const allBlogs = await response.json();

                const foundBlog = allBlogs.find(blog => blog.id.toString() === blogid);
                if (foundBlog) setBlog(foundBlog);

                const filteredBlogs = allBlogs.filter(blog => blog.id.toString() !== blogid);
                const sortedBlogs = [...filteredBlogs].sort((a, b) => new Date(b.date) - new Date(a.date));
                setRecentBlogs(sortedBlogs.slice(0, 3));

            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchBlogs();
    }, [blogid]);

    if (!blog) return null;

    return (
        <div className="blog-detail w-4/5 flex flex-col lg:flex-row mx-auto mt-8 gap-8">
            <div className="blog-detail__current max-w-4xl flex-1">
                <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="flex-shrink-0">
                        <img
                            src="/PHOTO-2024-07-03-00-54-36.jpg"
                            alt="Yazar Profili"
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{blog.author}</span>
                        <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {blog.title}
                </h1>

                <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                    {blog.content}
                </div>
            </div>

            <div className="blog-detail__others w-full lg:w-80 flex-shrink-0">
                <div className="bg-gray-50 p-6 rounded-xl sticky top-8">
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">İlginizi Çekebilecek Bloglar</h3>

                    <div className="space-y-6">
                        {recentBlogs.map(recentBlog => (
                            <Link
                                to={`/blog/${recentBlog.id}`}
                                key={recentBlog.id}
                                className="block group"
                            >
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                                        <img
                                            src={recentBlog.img || "/placeholder.jpg"}
                                            alt={recentBlog.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {recentBlog.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {recentBlog.date}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}