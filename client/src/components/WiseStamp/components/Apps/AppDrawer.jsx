import { Drawer } from "antd";
import CustomButton from "./CustomButton";
import Disclaimer from "./Disclaimer";
import DownloadApp from "./DownloadApp";
import SignOff from "./SignOff";
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
            <Drawer width='80%' title="Signoff" placement="right" onClose={onClose} visible={visible}>
                <CustomButton/>
            </Drawer>
        )
    }
    else if(whichApp==='downloadapp'){
        return(
            <Drawer width='80%' title="Signoff" placement="right" onClose={onClose} visible={visible}>
                <DownloadApp/>
            </Drawer>
        )
    }
    else if(whichApp==='disclaimer'){
        return(
            <Drawer width='80%' title="Signoff" placement="right" onClose={onClose} visible={visible}>
                <Disclaimer/>
            </Drawer>
        )
    }
}