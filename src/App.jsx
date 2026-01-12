import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home.jsx";
import NewBlog from "./pages/newBlog/newBlog.jsx";
import AllBlogs from "./pages/allBlogs/allBlogs.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import BlogpostPage from "./pages/blogpostPage/blogpostPage.jsx";

function App() {
    return (
        <>
            <Navigation />
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/nieuw" element={<NewBlog/>}/>
                    <Route path="/overzicht" element={<AllBlogs/>}/>
                    <Route path="/blogs/:id" element={<BlogpostPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
