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
export default function AppDrawer({whichApp,visible,setVisible}){
    const onClose = () => {
        setVisible(false);
    };
    if(whichApp==='signoff'){
        return(
            <Drawer width='80%' title="Signoff" placement="right" onClose={onClose} visible={visible}>
                <SignOff/>
            </Drawer>
        )
    }
    else if(whichApp==='custombutton'){
        return(
            <Drawer width='80%' title="Custom Button" placement="right" onClose={onClose} visible={visible}>
                <CustomButton/>
            </Drawer>
        )
    }
    else if(whichApp==='downloadapp'){
        return(
            <Drawer width='80%' title="Download App" placement="right" onClose={onClose} visible={visible}>
                <DownloadApp/>
            </Drawer>
        )
    }
    else if(whichApp==='disclaimer'){
        return(
            <Drawer width='80%' title="Disclaimer" placement="right" onClose={onClose} visible={visible}>
                <Disclaimer/>
            </Drawer>
        )
    }
    else if(whichApp==='quote'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <Quote/>
            </Drawer>
        )
    }
    else if(whichApp==='greenfooter'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <GreenFooter/>
            </Drawer>
        )
    }
    else if(whichApp==='onlinescheduler'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <OnlineScheduler/>
            </Drawer>
        )
    }
    else if(whichApp==='video'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <Video/>
            </Drawer>
        )
    }
    else if(whichApp==='videoconference'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <VideoConference/>
            </Drawer>
        )
    }
    else if(whichApp==='salesevent'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <SalesEvent/>
            </Drawer>
        )
    }
    else if(whichApp==='customHTML'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <CustomHTML/>
            </Drawer>
        )
    }
    else if(whichApp==='joboffer'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <PostJobOffer/>
            </Drawer>
        )
    }
    else if(whichApp==='joinnews'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <JoinNews/>
            </Drawer>
        )
    }
    else if(whichApp==='joinweb'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <JoinWeb/>
            </Drawer>
        )
    }
    else if(whichApp==='feedback'){
        return(
            <Drawer width='80%' title="Quote" placement="right" onClose={onClose} visible={visible}>
                <GiveFeedback/>
            </Drawer>
        )
    }
}