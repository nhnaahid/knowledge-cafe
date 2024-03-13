import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='container mx-auto md:flex md:justify-between md:items-center md:gap-7 mt-7'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
