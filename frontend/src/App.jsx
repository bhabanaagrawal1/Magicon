
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Open_Blog from './pages/Open_Blog'
import ScrollToHashElement from './components/ScrollToHashElement'
import NewBlog from './pages/NewBlog'
import ManageBlogs from './pages/ManageBlogs'
import BlogDetail from './pages/BlogDetail'


const App = () => {
  return (
    <div>
      
      <ScrollToHashElement/>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Open_Blog/:id' element={<Open_Blog/>}/>
        <Route path='/ManageBlogs' element={<ManageBlogs/>}/>
        <Route path='/post/:id' element={<NewBlog/>}/>
        <Route path='/Blog_list/:id' element={<BlogDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
