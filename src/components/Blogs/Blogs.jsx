import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookMark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl  py-5"> Blog:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                     handleAddToBookMark={handleAddToBookMark}
                    blog={blog}>
                   
                 </Blog>)
            }
        </div>
    );
};

Blogs.PropTypes ={
  handleAddToBookMark: PropTypes.func
}
export default Blogs;