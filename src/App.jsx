
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookMarks,setBookmarks] = useState ([]);
const handleAddToBookMark  = blog =>{
  const newbookmarks = [...bookMarks, blog];
  setBookmarks(newbookmarks)
}
  return (
  
    <>
      
   <Header></Header>
   <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
     <Bookmarks bookMarks={bookMarks}></Bookmarks>
   </div>
    </>
  )
}

export default App
