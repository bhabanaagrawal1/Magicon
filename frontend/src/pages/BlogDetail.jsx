import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { id } = useParams(); // ✅ get blog id from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://magicon.onrender.com/blogs/${id}`);
        // ✅ MySQL returns an array, so take the first object
        if (Array.isArray(res.data) && res.data.length > 0) {
          setBlog(res.data[0]);
        } else {
          setBlog(res.data); // fallback if backend sends single object
        }
      } catch (err) {
        toast.error("Failed to fetch blog");
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[95%] h-[100vh] p-6 flex md:justify-center items-center flex-col md:flex-row">
        <img
          src={blog.image}
          alt={blog.title}
          className="md:w-[40%] md:h-[90vh] object-cover rounded-lg md:mb-4 mb-0 w-[100%] h-[400px]"
        />
        <div className="md:w-[50%] m-10 w-[100%]">
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-500 mb-4">
            {blog.date} • {blog.readTime}
          </p>
          <div className="md:text-[17px] text-[14px]">{blog.longDesc}</div>
          <Link to="/Home#two" className="text-blue-600 underline mt-7">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
