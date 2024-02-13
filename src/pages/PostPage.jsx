/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
import {useLocation} from "react-router-dom";
const PostPage = () => {
  
  const location = useLocation();
  const post = location?.state?.post;
  return(
      <section>
        <div>
          <h1>{post.title}</h1>
        </div>
        <div>
          <p>{post.body}</p>
        </div>
        <button onClick={() => console.log(post)}>lo</button>
      </section>
  )
}
export default PostPage;
