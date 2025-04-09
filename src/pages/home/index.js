import BlogCart from "../../components/blogCart";

export default function Home() {
    return (
        <div className="home w-4/5 mx-auto">
            <div className="blog-header mb-10 flex justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block mt-10">
                    Bloglar
                </h1>
            </div>
            <BlogCart/>
        </div>
    )
}