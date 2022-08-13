import ClassicTemplate from './classic';
import CompactTemplate from './compact';
import HorizontalTemplate from './horizontal';
import SocialTemplate from './social';
import StackedTemplate from './stacked';
import StripTemplate from "./strip";
import WideTemplate from './wide';
import RightSideTemplate from './rightside';
import CentralTemplate from './central';
import CorporateTemplate from './corporate';
import FooterTemplate from './footer';
import TopBarTemplate from './topbar';
export default function VariousTemplates({selectedTemplate,variableInput}){
    if(selectedTemplate===1){
        return(
            <ClassicTemplate variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 2){
        return(
            <HorizontalTemplate variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 3){
        return(
            <SocialTemplate variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 4){
        return(
            <StripTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 5){
        return(
            <WideTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 6){
        return(
            <CompactTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 7){
        return(
            <StackedTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 8){
        return(
            <RightSideTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 9){
        return(
            <CentralTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 10){
        return(
            <CorporateTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 11){
        return(
            <FooterTemplate variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 12){
        return(
            <TopBarTemplate variableInput={variableInput} />
        )
    }
}