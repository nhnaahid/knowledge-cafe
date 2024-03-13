import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="md:w-3/5">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkRead={handleMarkRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func,
    handleMarkRead: PropTypes.func
}
export default Blogs;