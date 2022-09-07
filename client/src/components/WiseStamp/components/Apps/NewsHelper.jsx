import { At } from "@styled-icons/bootstrap"
import { Telegram } from "@styled-icons/boxicons-logos"
import { Cart, Gift, MessageEdit } from "@styled-icons/boxicons-solid"
import { Mail, Tag } from "@styled-icons/fluentui-system-regular"
import { Burst, BurstNew, BurstSale } from "@styled-icons/foundation"
export default function NewsHelper({type,buttonColor}){
    if(type===1){
        return(<Mail color={buttonColor} width={'20px'}/>)
    }
    else if(type===2){
        return(<MessageEdit color={buttonColor} width={'20px'}/>)
    }
    else if(type===3){
        return(<At color={buttonColor} width={'20px'}/>)
    }
    else if(type===6){
        return(<Telegram color={buttonColor} width={'20px'}/>)
    }
    else{
        return(<div></div>)
    }
}