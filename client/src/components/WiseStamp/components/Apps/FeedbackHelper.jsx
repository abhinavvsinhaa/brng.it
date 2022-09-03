import { ChatLeftTextFill, HeartFill, StarFill } from "@styled-icons/bootstrap"
import { Like } from "@styled-icons/boxicons-solid"
export default function FeedbackHelper({type,buttonColor}){
    if(type===1){
        return(<StarFill color={buttonColor} width={'20px'}/>)
    }
    else if(type===2){
        return(<HeartFill color={buttonColor} width={'20px'}/>)
    }
    else if(type===3){
        return(<ChatLeftTextFill color={buttonColor} width={'20px'}/>)
    }
    else if(type===6){
        return(<Like color={buttonColor} width={'20px'}/>)
    }
    else{
        return(<div></div>)
    }
}