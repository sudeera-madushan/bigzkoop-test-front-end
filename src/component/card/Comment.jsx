/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
const Comment = (prop) => {
  return (
      <div key={prop.id} className={"p-5 bg-[rgba(239,246,255,0.2)] mb-2 rounded-lg"}>
          <div className={"flex"}>
              <div className={"bg-blue-400 w-7 h-7 rounded-full"}></div>
              <h1 className={"text-emerald-500 font-bold m-1 ms-2"}>{prop.email}</h1>
          </div>
          <h1 className={"text-gray-300 text-sm"}>{prop.body}</h1>
      </div>
  )
}
export default Comment;
