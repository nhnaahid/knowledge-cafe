import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, time }) => {

    return (
        <div className="md:w-2/5 space-y-3">
            <h1 className="text-2xl font-bold border-2 p-3 rounded-xl text-center">Total spent time: {time} min</h1>
            <div className='bg-gray-100 rounded-xl p-5 space-y-3'>
                <h1 className="text-2xl font-bold text-center">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                 bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)   
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    time: PropTypes.number
}

export default Bookmarks;