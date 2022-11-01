const axios  = require("axios");

class Linkedin {
    accessToken;
    author;
    caption;
    file;

    constructor(accessToken, author, caption, file) {
        this.accessToken = accessToken;
        this.author = author;
        this.caption = caption;
        this.file = file;
    }

    async postWithoutPhoto() {
        try {
            let config = {
                method: 'post',
                url: 'https://api.linkedin.com/v2/ugcPosts',
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    author: `urn:li:person:${this.author}`,
                    lifecycleState: 'PUBLISHED',
                    specificContent: {
                        'com.linkedin.ugc.ShareContent': {
                            shareCommentary: {
                                text: `${this.caption}`,
                            },
                            shareMediaCategory: 'NONE',
                        },
                    },
                    visibility: {
                        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
                    },
                })
            }
    
            let response = await axios(config)
            console.log(response.data)
            return response.data;

        } catch (error) {
            console.error(error)
            return error;
        }
    }
}

module.exports = { Linkedin }