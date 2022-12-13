import { Drawer } from "antd";
import CustomButton from "./CustomButton";
import Disclaimer from "./Disclaimer";
import DownloadApp from "./DownloadApp";
import SignOff from "./SignOff";
import Quote from "./Quote";
import GreenFooter from "./GreenFooter";
import OnlineScheduler from "./OnlineScheduler";
import Video from "./Video";
import VideoConference from "./VideoConference";
import SalesEvent from "./SalesEvent";
import CustomHTML from "./CustomHTML";
import PostJobOffer from "./PostJobOffer";
import JoinNews from "./JoinNews";
import JoinWeb from "./JoinWeb";
import GiveFeedback from "./GiveFeedback";
export default function AppDrawer({whichApp,visible,setVisible,extraFields}){
    const onClose = () => {
        setVisible(false);
    };
    if(whichApp==='signoff'){
        return(
            <Drawer width='80%' title="Signoff" placement="right" onClose={onClose} visible={visible}>
                <SignOff extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='custombutton'){
        return(
            <Drawer width='80%' title="Custom Button" placement="right" onClose={onClose} visible={visible}>
                <CustomButton extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='downloadapp'){
        return(
            <Drawer width='80%' title="Download App" placement="right" onClose={onClose} visible={visible}>
                <DownloadApp extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='disclaimer'){
        return(
            <Drawer width='80%' title="Disclaimer" placement="right" onClose={onClose} visible={visible}>
                <Disclaimer extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='quote'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <Quote extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='greenfooter'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <GreenFooter extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='onlinescheduler'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <OnlineScheduler extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='video'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <Video extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='videoconference'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <VideoConference extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='salesevent'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <SalesEvent extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='customHTML'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <CustomHTML extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='joboffer'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <PostJobOffer extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='joinnews'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <JoinNews extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='joinweb'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <JoinWeb extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
    else if(whichApp==='feedback'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <GiveFeedback extraFields={extraFields} onClose={onClose}/>
            </Drawer>
        )
    }
}