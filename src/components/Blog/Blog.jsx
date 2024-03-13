import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, hashtags, reading_time, posted_date, author, author_img, cover } = blog;
    return (
        <div className='space-y-5 mb-16 p-5'>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p >{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
                {
                    hashtags.map((hashtag, idx) => <span className='mr-3' key={idx}> <a href="">#{hashtag}</a></span>)
                }
                <p className='mt-2'><a href="#" className='underline text-blue-700'>Mark as read</a></p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;