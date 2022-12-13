import { useState, useEffect } from "react";

export default function CallBack() {

    const [data, setData] = useState({
        grant_type: 'authorization_code',
        code: 'AQSql3yX8BbFsFx9kSZHh6SN4N6NekFsbDkk402Amn9V9YYBfO5kOdR6nahCB3MxT_NSiqtBsJ9bp45dW1K4srinMkILnLE-0UdPxXn-jIjMT4qa36Ip-uqX86O1h3cOlSKENJTrczAkZDTahzTnbjmN76C-SezZ_kJZwEfS2RvubGV7C-nujp6PBq4gGND_Fy9i_2YIf6tdskrLVHM',
        redirect_uri: process.env.REACT_APP_REDIRECT_URL,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET
    })

    useEffect(() => {
        // exchange code for an access token
        fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data)
        })
        .then(res => res.json())
        .then(console.log)
        .catch(console.log)
    })

    return (
        <>
            <p>Exchanging code for access token</p>
        </>
    );
}