class Linkedin {
    #accessToken;
    #author;
    #caption;
    #file;

    constructor(accessToken, author, caption, file) {
        this.accessToken = accessToken;
        this.author = author;
        this.caption = caption;
        this.file = file;
    }

}

module.exports = { Linkedin }