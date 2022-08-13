import axios from "axios";
import fileDownload from "js-file-download";

const serveHTML = (filepath,message) => {
    console.log(filepath)
    return new Promise(function(mySolve,myReject){
    // var element = document.createElement('a');
    // element.setAttribute('href',`https://wisestamp-api.herokuapp.com/gethtml/${filepath}`);
    // element.setAttribute('target','_blank')
    // element.setAttribute('download',`${filepath}`);
    // document.body.appendChild(element);
    // element.click(); 
    // if(message==="success")
    //     mySolve(filepath)
    // else
    //     myReject("File not found")
    axios.get(`https://wisestamp-api.herokuapp.com/gethtml/${filepath}`,{responseType:'blob'}).then(res => {
        console.log(res)
        fileDownload(res.data,filepath);
    }).then(()=>{
        mySolve(filepath)
    })
})
}

export default function CreateAndServeHTML(data,setLoading){
    setLoading(true)
    axios.post("https://wisestamp-api.herokuapp.com/getHTML",{fileData:data}).then((res)=>{
        console.log(res.data.data);
        serveHTML(res.data.data,res.data.message).then((filename) => {
            axios.post("https://wisestamp-api.herokuapp.com/deletehtml",{filePath:filename}).then(() => {
                setLoading(false)
            })
        })
    });
}