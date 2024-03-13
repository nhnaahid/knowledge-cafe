import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkRead = (time) => {
    setSpentTime(spentTime + time);
  }
  return (
    <div className='p-3 md:p-0'>
      <Header></Header>
      <main className='container mx-auto md:flex md:justify-between md:gap-7 mt-7'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkRead={handleMarkRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          time={spentTime}
        ></Bookmarks>
      </main>
    </div >
  )
}

export default App
