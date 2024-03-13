import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h3 className='bg-white text-center rounded-lg p-4 text-xl font-semibold'><a href="">{title}</a></h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;