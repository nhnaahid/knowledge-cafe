import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkRead }) => {
    const { title, hashtags, reading_time, posted_date, author, author_img, cover } = blog;
    return (
        <div className='space-y-5 mb-16'>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p >{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-3'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
                {
                    hashtags.map((hashtag, idx) => <span className='mr-3' key={idx}> <a href="">#{hashtag}</a></span>)
                }
                <p className='mt-2 underline text-blue-700 cursor-pointer' onClick={()=>handleMarkRead(reading_time)}>Mark as read</p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkRead: PropTypes.func
}
export default Blog;