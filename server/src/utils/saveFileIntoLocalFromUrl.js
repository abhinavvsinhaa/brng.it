const https = require('https');
const fs = require('fs')

function saveFileIntoLocalFromUrl(url) {
  // https://brngit-upload-images.s3.ap-south-1.amazonaws.com/3869c43ebca7df7e3993c0600ea1778c
  https.get(url, (res) => {
    // Image will be stored at this path
    const imageName = url.split('.com/')[1]
    const path = `${__dirname}/files/${imageName}.png`;
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish', () => {
      filePath.close();
      console.log(`Download completed for ${imageName}`);
    });
  });
}

module.exports = saveFileIntoLocalFromUrl