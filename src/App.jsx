import './App.css'
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch({ type: 'DO_SOMETHING' })}>
            Do something
        </button>
    );
}

export default App
