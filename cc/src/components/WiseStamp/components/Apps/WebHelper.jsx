import { FlowTree, Mic } from "@styled-icons/entypo"
import { Desktop, Mail, Tag } from "@styled-icons/fluentui-system-regular"
import { ProjectionScreen } from "@styled-icons/foundation"
export default function WebHelper({type,buttonColor}){
    if(type===1){
        return(<ProjectionScreen color={buttonColor} width={'20px'}/>)
    }
    else if(type===2){
        return(<FlowTree color={buttonColor} width={'20px'}/>)
    }
    else if(type===3){
        return(<Mic color={buttonColor} width={'20px'}/>)
    }
    else if(type===6){
        return(<Desktop color={buttonColor} width={'20px'}/>)
    }
    else{
        return(<div></div>)
    }
}