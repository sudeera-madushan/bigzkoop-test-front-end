import {useLocation, useNavigate} from "react-router-dom";
import Card from "../component/card/Card.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";
import Album from "../component/card/Album.jsx";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const AuthorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location?.state?.user;
    const posts = useSelector((state) => state.data).filter(post => post.userId === user.id);
    const albums = useSelector((state) => state.albums).filter(album => album.userId === user.id);
    const photos = useSelector((state) => state.photos);
    const [isPost, setIsPost] = useState(true);

    const handleCardClick = (postId, post) => {
        navigate('/post', {
            state: {
                post: post,
                user: user
            }
        });
        window.scrollTo(0, 0);
    };
  return(
      <section className="p-[10vw] bg-[rgba(31,41,55,1)] pt-10 min-h-[100vh]">
          <div className={"bg-[rgba(239,246,255,0.1)] rounded-2xl p-10 pt-8 min-h-[100vh]"}>
                {/*<button onClick={() => console.log(user)}>ddd</button>*/}
              <div>
                  <h1 className={"text-gray-200 font-bold text-3xl"}>USER INFORMATION</h1>
                  <div className={"w-full border border-gray-500 rotate mb-5 mt-2"}></div>
                  <div className={"flex p-5 max-[650px]:p-1"}>
                      <div className={"w-20 h-20 m-5 mr-0 rounded-full bg-gray-200 max-[650px]:m-1"}>
                          <img
                              src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                              alt="user image"/>
                      </div>
                      <div className={"w-10/12 ps-10 grid gap-1 max-[650px]:ps-0"}>
                          <div className={"flex border-b border-gray-500  w-full mt-1 "}>
                              <h1 className={"mx-5 text-gray-200 font-bold"}>Name</h1>
                              <h1 className={"ms-20 text-gray-200 max-[650px]:ms-2"}>{user.name}</h1>
                          </div>
                          <div className={"flex border-b border-gray-500  w-full mt-1"}>
                              <h1 className={"mx-5 text-gray-200 font-bold"}>Email</h1>
                              <h1 className={"ms-20 text-gray-200 max-[650px]:ms-2"}>{user.email}</h1>
                          </div>
                          <div className={"flex border-b border-gray-500  w-full mt-1"}>
                              <h1 className={"mx-5 text-gray-200 font-bold"}>Phone</h1>
                              <h1 className={"ms-20 text-gray-200 max-[650px]:ms-2"}>{user.phone}</h1>
                          </div>
                      </div>
                  </div>
                  <div className={"p-5"}>
                      <h1 className={"text-gray-200 font-bold text-2xl"}>ARTICLES BY @{user.name.toUpperCase()}</h1>
                      <div className={"flex"}>
                          <button
                              onClick={() => setIsPost(true)}
                              className={`p-2 text-gray-400 py-1 hover:border-blue-600 border duration-300 rounded mr-2 ${isPost ? "border-blue-800" : "border-transparent"}`}>Posts</button>
                          <button
                              onClick={() => setIsPost(false)}
                              className={`p-2 text-gray-400 py-1 hover:border-blue-600 border duration-300 rounded ${!isPost ? "border-blue-800" : "border-transparent"}`}>Albums</button>
                      </div>
                      <div className={"w-full border-b mt-1 border-gray-500"}></div>

                  </div>
                  {isPost ? <div className={"grid lg:grid-cols-3 gap-4 p-9 md:grid-cols-2 sm:grid-cols-1 "}>
                      {posts.map((post) => (
                          <Card
                              handleEvent={() => handleCardClick(post.id, post)}
                              key={post.id}
                              title={post.title}
                              body={post.body}
                              author = {user.name}
                              showAuthor={false}
                          />
                      ))}
                  </div> :<div className={"grid lg:grid-cols-3 gap-4 p-9 md:grid-cols-2 sm:grid-cols-1"}>
                      {albums.map((a) => (
                          <Album
                              key={a.id}
                              title={a.title}
                              photos = {
                                  photos
                                      .filter(photo => photo.albumId === a.id)
                                      .slice(0, 6).map((photo) => (photo))
                              }
                              handleEvent={() => {
                                  navigate('/album', {
                                      state: {
                                          album: a,
                                          user: user
                                      }
                                  });
                                  window.scrollTo(0, 0);
                              }}
                          />
                      ))}
                  </div>
                  }
              </div>
          </div>
      </section>
  )
}
export default AuthorPage;
