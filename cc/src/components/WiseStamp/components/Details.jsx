// import React, { useState } from "react";
// import Form from "./Form";
// import Display from "./Display";

// function Details () {
//     const [name , setName] = useState("");
//     const [url , setURL] = useState("");
//     const [titleSign , setTitleSign] = useState("");
//     const [company , setComapny] = useState("");
//     const [phone , setPhone] = useState("");
//     const [mobile , setMobile] = useState("");
//     const [website , setWebsite] = useState("");
//     const [email , setEmail] = useState("");
//     const [address , setAddress] = useState("");
//     // const details = [name,title_sign,company,phone,mobile,website,email,address];

//     const handleEmailSignatureFormSubmission = () => {
//         <Display        
//         name = {name}
//         url = {url}
//         title = {titleSign}
//         company = {company}
//         phone = {phone}
//         mobile = {mobile}
//         email = {email}
//         website = {website}
//         address = {address}/>
//     }

//     return(
//         <div>
//             <h3>Details</h3>
//             <hr />
//             <p><strong>Signature Details</strong></p>
//             {/* <Form name = "Enter your name" type = "text" value = {name}/>
//             <Form name = "Title" type = "text" value = {title_sign}/>
//             <Form name = "Company" type = "text" value = {company}/>
//             <Form name = "Phone" type = "text" value = {phone}/>
//             <Form name = "Mobile" type = "text" value = {mobile}/>
//             <Form name = "Website" type = "url" value = {website}/>
//             <Form name = "Email" type = "email" value = {email}/>
//             <Form name = "Address" type = "text" value = {address}/> */}
//             <form>
//                 <div className="mb-3">
//                     <label for="name" className="form-label">Name</label>
//                     <input type="name" className="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={e => setName(e.target.value)}/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="title" className="form-label">Title</label>
//                     <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <label for="company" className="form-label">Company</label>
//                     <input type="text" className="form-control" id="company" aria-describedby="emailHelp"/>
//                 </div>
//                 <button type="submit" className="btn btn-primary" onClick={handleEmailSignatureFormSubmission}>Submit</button>
//             </form>
//         </div>
//     )
// };

// export default Details;