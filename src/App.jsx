import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.data);
    const comments = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch({ type: 'FETCH_DATA' });
        // dispatch({ type: 'FETCH_COMMENTS' });
    }, [dispatch]);

    const show = () => {
        console.log(posts[0]);
        // console.log(comments);
    }
    return (
        <div>
            {/*<button onClick={show}>show</button>*/}
        <div className={"grid grid-cols-4 gap-6 p-10"}>
            {posts.map((post) => (
                <div key={post.id} className={"bg-gray-100 rounded shadow-xl"}>
                    <div className={"border-b-2 p-2"}>
                        <h2 className="text-1xl font-bold text-gray-600 flex ">{post.title}</h2>
                    </div>
                    <div className={"p-2"}>
                        <p className={"text-xl text-gray-500"}>{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
            <div>
                {/*{comments.map((comment) => (*/}
                {/*    <div key={comment.id}>*/}
                {/*        <h2>{comment.name}</h2>*/}
                {/*        <p>{comment.body}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    );
}

export default App;
