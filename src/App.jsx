import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<HomePage/>} />
                <Route path={'/post'} element={<PostPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
