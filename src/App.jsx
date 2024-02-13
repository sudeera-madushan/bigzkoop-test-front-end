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
        <div className={"bg-[rgba(31,41,55,1)]"}>
            <button onClick={show}>show</button>
        <div className={"grid grid-cols-5 gap-4 p-9"}>
            {posts.map((post) => (
                <div key={post.id} className={"cursor-pointer bg-[rgba(239,246,255,0.1)] rounded-md hover:bg-[rgba(239,246,255,0.2)] p-2 duration-300"}>
                    <div className={" p-2"}>
                        <h2 className=" text-[18px] font-sans font-bold text-[rgba(217,119,6,1)] flex domine-font">{
                            post.title.length > 18 ? post.title.charAt(0).toUpperCase() + post.title.substring(0, 18).slice(1) + "..."
                                : post.title.charAt(0).toUpperCase() + post.title.slice(1)
                        }</h2>
                    </div>
                    <div className={"px-2"}>
                        <p className={"text-[15px] text-white maven-pro-font h-[90px]"}>{
                            post.body.length > 90 ? post.body.charAt(0).toUpperCase() + post.body.substring(0, 90).slice(1) + "..."
                                : post.body.charAt(0).toUpperCase() + post.body.slice(1)
                        }</p>
                    </div>
                    <div className={"w-11/12 rounded border-gray-300 border m-2 mt-3"}/>
                    <div>
                        <p className={"p-2 pt-0 text-gray-200 font-sans text-sm"}>Author: sdjansjdna jksd </p>
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
