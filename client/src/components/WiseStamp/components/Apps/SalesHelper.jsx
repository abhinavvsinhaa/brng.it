import { Cart, Gift } from "@styled-icons/boxicons-solid"
import { Tag } from "@styled-icons/fluentui-system-regular"
import { Burst, BurstNew, BurstSale } from "@styled-icons/foundation"
export default function SalesHelper({type,buttonColor}){
    if(type===1){
        return(<Tag color={buttonColor} width={'20px'}/>)
    }
    else if(type===2){
        return(<Gift color={buttonColor} width={'20px'}/>)
    }
    else if(type===3){
        return(<BurstNew color={buttonColor} width={'20px'}/>)
    }
    else if(type===4){
        return(<Cart color={buttonColor} width={'20px'}/>)
    }
    else if(type===5){
        return(<Burst color={buttonColor} width={'20px'}/>)
    }
    else if(type===6){
        return(<BurstSale color={buttonColor} width={'20px'}/>)
    }
    else{
        return(<div></div>)
    }
}