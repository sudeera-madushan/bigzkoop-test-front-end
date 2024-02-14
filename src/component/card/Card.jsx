/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const Card = (prop) => {


    return (<div onClick={prop.handleEvent} key={prop.id} className={"cursor-pointer bg-[rgba(239,246,255,0.1)] rounded-md hover:bg-[rgba(239,246,255,0.2)] p-2 duration-300"}>
            <div className={" p-2"}>
                <h2 className=" text-[18px] font-sans font-bold text-pink-600 flex domine-font">{
                    prop.title.length > 18 ? prop.title.charAt(0).toUpperCase() + prop.title.substring(0, 18).slice(1) + "..."
                        : prop.title.charAt(0).toUpperCase() + prop.title.slice(1)
                }</h2>
            </div>
            <div className={"px-2"}>
                <p className={"text-[15px] text-white maven-pro-font min-h-[90px]"}>{
                    prop.body.length > 90 ? prop.body.charAt(0).toUpperCase() + prop.body.substring(0, 90).slice(1) + "..."
                        : prop.body.charAt(0).toUpperCase() + prop.body.slice(1)
                }</p>
            </div>

        { prop.showAuthor ? <div>
            <div className={"w-11/12 rounded border-gray-300 border m-2 mt-3"}/>
            <div>
                <p className={"p-2 pt-0 text-gray-200 font-sans text-sm"}>Author: {prop.author}</p>
            </div>
        </div> : <div className={"mb-1"}></div>
        }
        </div>
    )
}
export default Card;
