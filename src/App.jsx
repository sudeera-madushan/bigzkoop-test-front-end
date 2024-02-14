import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";
import AuthorPage from "./pages/AuthorPage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<HomePage/>} />
                <Route path={'/post'} element={<PostPage/>} />
                <Route path={'/author'} element={<AuthorPage/>}/>
                <Route path={'/albums'} element={<AlbumPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
