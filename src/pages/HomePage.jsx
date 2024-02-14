import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Card from "../component/card/Card.jsx";
import {useNavigate} from "react-router-dom";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.data);
    const users = useSelector((state) => state.users);
    const navigate = useNavigate()


    useEffect(() => {

        dispatch({ type: 'FETCH_DATA' });
        dispatch({ type: 'FETCH_COMMENTS' });
        dispatch({ type: 'FETCH_USERS' });
    }, [dispatch]);

    const show = () => {
        console.log(posts[0]);
        // console.log(comments);
    }
    const handleCardClick = (postId, post, users, navigate) => {
        navigate('/post', {
            state: {
                post: post,
                user: users.find(user => user.id === post.userId)
            }
        });
        window.scrollTo(0, 0);
    };
    return (
        <div className={"bg-[rgba(31,41,55,1)]"}>
            <button onClick={show}>show</button>
            <div className={"grid lg:grid-cols-5 gap-4 p-9 md:grid-cols-4 sm:grid-cols-2"}>
                {posts.map((post) => (
                    <Card
                     handleEvent={() => handleCardClick(post.id, post, users, navigate)}
                     key={post.id} title={post.title} body={post.body} author = {users.find(user => user.id === post.userId)?.name}/>
                ))}
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
export default HomePage;
