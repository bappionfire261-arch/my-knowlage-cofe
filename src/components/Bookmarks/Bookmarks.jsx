import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks}) => {
    return (
        <div className="md:1/3 mt-5  text-center bg-gray-300 p-4 rounded-xl ml-4">
            <h2 className="text-3xl">Bookmarked Blogs:{bookMarks.length}</h2>
         {
            bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
         }
        </div>
    );
};

Bookmarks.PropTypes = {
  bookmarks:PropTypes.array
}
export default Bookmarks;