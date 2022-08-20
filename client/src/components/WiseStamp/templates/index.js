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
export default function VariousTemplates({selectedTemplate,variableInput,design}){
    if(selectedTemplate===1){
        return(
            <ClassicTemplate design={design} variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 2){
        return(
            <HorizontalTemplate design={design} variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 3){
        return(
            <SocialTemplate design={design} variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 4){
        return(
            <StripTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 5){
        return(
            <WideTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 6){
        return(
            <CompactTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 7){
        return(
            <StackedTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 8){
        return(
            <RightSideTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 9){
        return(
            <CentralTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 10){
        return(
            <CorporateTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 11){
        return(
            <FooterTemplate design={design} variableInput={variableInput} />
        )
    }
    else if(selectedTemplate === 12){
        return(
            <TopBarTemplate design={design} variableInput={variableInput} />
        )
    }
}