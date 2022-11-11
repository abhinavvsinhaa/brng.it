const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const job = require('./cron');
const https = require('https');
const fs = require('fs');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(cors({ origin: true, credentials: true }));
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

app.get('/', (req, res, next) => {
  res.send('Connection successful!');
});

app.use('/v1', routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

job.start();
// function saveFileIntoLocalFromUrl(url) {
//   // https://brngit-upload-images.s3.ap-south-1.amazonaws.com/3869c43ebca7df7e3993c0600ea1778c
//   https.get(url, (res) => {
//     // Image will be stored at this path
//     const imageName = url.split('.com/')[1]
//     const path = `${__dirname}/utils/files/${imageName}.png`;
//     const filePath = fs.createWriteStream(path);
//     res.pipe(filePath);
//     filePath.on('finish', () => {
//       filePath.close();
//       console.log(`Download completed for ${imageName}`);
//     });
//   });
// }

// saveFileIntoLocalFromUrl('https://brngit-upload-images.s3.ap-south-1.amazonaws.com/3869c43ebca7df7e3993c0600ea1778c');

module.exports = app;
