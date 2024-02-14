/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
const Album = (prop) => {
  return(
      <div
          key={prop.key}
          className={"cursor-pointer bg-[rgba(239,246,255,0.1)] rounded-md hover:bg-[rgba(239,246,255,0.2)] p-2 duration-300"}
          onClick={prop.handleEvent}
      >
          <div className={" p-2"}>
              <h2 className=" text-[18px] font-sans font-bold text-pink-600 flex domine-font">{
                  prop.title.length > 18 ? prop.title.charAt(0).toUpperCase() + prop.title.substring(0, 18).slice(1) + "..."
                      : prop.title.charAt(0).toUpperCase() + prop.title.slice(1)
              }</h2>

              <div className={"px-2 grid-cols-3 grid gap-1"}>
                  {
                      prop.photos.map((photo) => (
                          <img key={photo.id} className={"rounded "} src={photo.thumbnailUrl} alt=""/>
                      ))
                  }
              </div>
          </div>
      </div>
  )
}
export default Album;
