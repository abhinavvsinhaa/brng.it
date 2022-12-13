import textSignature from "text-signature";

const usegenerateImage = (optionsParameter)  => {
    var textSign = new textSignature(optionsParameter)
    textSign.generateImage(optionsParameter);
    return textSign.getImageData();
}
export default usegenerateImage