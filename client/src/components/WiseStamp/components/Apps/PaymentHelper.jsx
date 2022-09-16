import { Cash, CashStack, CreditCard } from "@styled-icons/bootstrap"
import {  DollarBill } from "@styled-icons/foundation"
export default function PaymentHelper({type,buttonColor}){
    if(type===1){
        return(<Cash color={buttonColor} width={'20px'}/>)
    }
    else if(type===2){
        return(<CashStack color={buttonColor} width={'20px'}/>)
    }
    else if(type===3){
        return(<DollarBill color={buttonColor} width={'20px'}/>)
    }
    else if(type===4){
        return(<CreditCard color={buttonColor} width={'20px'}/>)
    }
    else{
        return(<div></div>)
    }
}