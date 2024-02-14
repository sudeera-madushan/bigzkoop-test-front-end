import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";
import AuthorPage from "./pages/AuthorPage.jsx";
import AlbumsPage from "./pages/AlbumsPage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";
import PhotoPage from "./pages/PhotoPage.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Header from "./component/layout/Header.jsx";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({ type: 'FETCH_ALBUMS' });
        dispatch({ type: 'FETCH_USERS' });
        dispatch({ type: 'FETCH_PHOTOS' });
        dispatch({ type: 'FETCH_DATA' });
        dispatch({ type: 'FETCH_COMMENTS' });
    }, [dispatch]);
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/*'} element={<HomePage/>} />
                <Route path={'/post'} element={<PostPage/>} />
                <Route path={'/author'} element={<AuthorPage/>}/>
                <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/album'} element={<AlbumPage/>}/>
                <Route path={'/photo'} element={<PhotoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
