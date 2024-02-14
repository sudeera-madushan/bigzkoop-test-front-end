import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Comment from "../component/card/Comment";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const PostPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post = location?.state?.post;
    const user = location?.state?.user;
    const comments = useSelector((state) => state.comments).filter(com => com.postId === post.id);
    const handleAuthorClick = () => {
        navigate('/author' , {state: {user:user}});
        window.scrollTo(0, 0);
    };
  return(
      <section className="p-[10vw] bg-[rgba(31,41,55,1)] pt-10 min-h-[100vh]">
          <div className={"bg-[rgba(239,246,255,0.1)] rounded-2xl p-10 "}>
        <div className=" pb-3">
          <h1 className={"text-2xl text-pink-600 font-bold "}>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h1>
        </div>
        <div className={""}>
          <h1 className={"text-gray-400"}><span className={"text-gray-300"}>Author: </span>
              <span onClick={handleAuthorClick} className={"hover:text-blue-700 cursor-pointer duration-300"}>{user.name}</span>
          </h1>
        </div>
        <div className={"border my-5 border-gray-500"}></div>
        <div className={""}>
          <p className={"text-gray-200"}>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
        </div>
              <div className={"mt-5"}>
                  <h1 className={"text-2xl font-bold text-cyan-600"}>Comments</h1>
              </div>
          <div className={"grid p-5"}>
              <div>{comments.map((comment) =>(
                <Comment
                    key={comment.id}
                    email={comment.email}
                    body={comment.body}
                />
              ))}</div>
          </div>
        {/*<button onClick={() => console.log(comments)}>lo</button>*/}
          </div>
      </section>
  )
}
export default PostPage;
