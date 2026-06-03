import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog , handleAddToBookMark}) => {
    const {title, cover, author,posted_date, author_img,reading_time} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-3 rounded-xl' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mt-2'>
                   <img className='w-14 rounded-xl p-2' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-xl font-bold text-orange-600'>{author}</h3>
                    <p className='text-sm font-sans'>{posted_date}</p>
                   </div>
                </div>
                <div className='items-center'>
                 <span>{reading_time}</span>
                 <button 
                 onClick={ ()=> handleAddToBookMark(blog)} 
                 className='ml-1 text-gray-500 text-2xl '><CiBookmark></CiBookmark> </button>
                </div>
            </div>
            <h2 className='text-5xl font-sans py-2 mb-7'>{title}</h2>
            <div className='flex gap-3  mb-5'>
                <p>#beginners</p>
            <p>#programming</p>
            </div>
            <ul className='text-[#6047EC] mb-2 '>
                <li><a href="">Mark as read</a></li>
            </ul>
        </div>
    );
};
Blog.PropTypes = {
  blog:PropTypes.object.isRequired,
handleAddToBookMark: PropTypes.func
}
export default Blog;