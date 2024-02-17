import {useSelector} from "react-redux";
import Card from "../component/card/Card.jsx";
import {useNavigate} from "react-router-dom";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const HomePage = () => {
    const posts = useSelector((state) => state.data);
    const users = useSelector((state) => state.users);
    const navigate = useNavigate()


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
        <div className={"bg-[rgba(31,41,55,1)] min-h-[100vh]"}>
            <div>
                <h1 className={"text-gray-200 font-bold text-3xl p-9 pb-0"}>LIST OF ARTICLES</h1>
            </div>
            <div className={"grid xl:grid-cols-5 lg:grid-cols-4 gap-4 p-9 md:grid-cols-3 sm:grid-cols-2 pt-3"}>

                {posts.map((post) => (
                    <Card
                     handleEvent={() => handleCardClick(post.id, post, users, navigate)}
                     key={post.id}
                     title={post.title}
                     body={post.body}
                     author = {users.find(user => user.id === post.userId)?.name}
                     showAuthor={true}
                    />
                ))}
            </div>
        </div>
    );
}
export default HomePage;
