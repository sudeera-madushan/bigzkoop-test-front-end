import {useNavigate} from "react-router-dom";
import {useState} from "react";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const Header = () => {
    const navigate = useNavigate();
    const [isArticles , setIsArticles] = useState(true)
  return(
      <nav className={"bg-[rgba(31,41,55,1)] p-2"}>
          <div className={"flex bg-[rgba(239,246,255,0.2)] p-2 rounded-xl justify-between shadow max-[800px]:block"}>
              <div className={"flex ms-2"}>
                  <img
                      className={"w-12"}
                      src="https://user-images.githubusercontent.com/53334880/119559594-20fcc280-bdb8-11eb-8244-b721cc0c55a9.png"
                      alt="jsonPlaceholder"/>
                  <h1 className={"text-emerald-500 font-bold text-4xl p-1"}>JSONPLACEHOLDER</h1>
              </div>
              <div className={"flex gap-5 max-[800px]:justify-around"}>
                  <div
                      onClick={() => {
                          navigate("/home");
                          setIsArticles(true);
                      }}
                      className={`font-bold  text-xl p-2 text-gray-200 hover:bg-[rgba(239,246,255,0.2)] rounded px-4 duration-300 hover:text-emerald-300 cursor-pointer 
                      ${isArticles ? "bg-[rgba(239,246,255,0.2)]" : "text-gray-200"}`}
                  >Articles</div>
                  <div
                      onClick={() => {
                          navigate("/albums");
                          setIsArticles(false);
                      }}
                      className={`font-bold  text-xl p-2 text-gray-200 hover:bg-[rgba(239,246,255,0.2)] rounded px-4 duration-300 hover:text-emerald-300 cursor-pointer 
                      ${!isArticles ? "bg-[rgba(239,246,255,0.2)]" : "text-gray-200"}`}
                  >Albums</div>
                  <div
                      className={"w-10 h-10 m-1 mr-5 rounded-full bg-gray-200 ms-10 cursor-pointer"}>
                      <img
                          src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                          alt="user image"/>
                  </div>
              </div>
          </div>
      </nav>
  )
}
export default Header;
