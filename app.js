var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
PORT = process.env.PORT;
const cron = require('node-cron');
const axios = require('axios');
const expressLayouts = require('express-ejs-layouts');
//Set OAuth 1.0a for Twitter API
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');

const oauth = OAuth({
  consumer: {
    key: process.env.XAPI_KEY,
    secret: process.env.XAPI_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64');
  },
});

const token = {
  key: process.env.XAPI_ACCESS_TOKEN,
  secret: process.env.XAPI_ACCESS_TOKEN_SECRET,
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var botRouter = require('./routes/bot');
var adminRouter = require('./routes/admin');

var app = express();
app.use(cors()); 
  // const allowedOrigins = ['http://localhost:3000', 'https://your-frontend-domain.com'];
  // app.use(cors({
  //     origin: function (origin, callback) {
  //         // Allow requests with no origin (like mobile apps or curl requests)
  //         if (!origin) return callback(null, true);
  //         if (allowedOrigins.indexOf(origin) === -1) {
  //             const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
  //             return callback(new Error(msg), false);
  //         }
  //         return callback(null, true);
  //     },
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  //     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  //     credentials: true // Allow sending cookies/authorization headers
  // }));
// view engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.set('layout', false);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('', botRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Get Like Tweets  add params expansions: 'author_id',"user.fields": 'username',
// Find User name form user results 

// cron.schedule('* * * * *', async () => {
//   console.log(`[${new Date().toISOString()}] Triggering API...`);

//   try {
//     //Get User 
//     // const getUserName = await axios.get('https://api.x.com/2/users/by/username/kahar1937',{ 
//     //   headers: { Authorization: `Bearer ${process.env.BEARER_TOKEN}` },
//     // }); 
//     // console.log('User data received:', getUserName.data);
//     // if(getUserName && getUserName.data ) 
//     {
      
//       // let userId = getUserName.data.data.id;
//       let userId = '1580635622401785857';
//       const request_data = {
//         url: `https://api.twitter.com/2/users/${userId}/liked_tweets`,
//         method: 'GET',
//         data: {
//           'user.fields': 'username',
//           expansions: 'author_id',
//           'tweet.fields':'article,text',
//           'media.fields':'preview_image_url'
//         },
//       };

//       // Make the API request with OAuth 1.0a
//       const response = await axios({
//           url: request_data.url,
//           method: request_data.method,
//           params: request_data.data,
//           headers: oauth.toHeader(oauth.authorize(request_data, token)),
//       }); 
//       console.log('User data received:', response.data);
//       if(response.data.errors) {
//         console.error('Error in API response:', response.data.error);
//         return;
//       }
//       // Create a map of user IDs to usernames
//       const userMap = {};
//       response.includes.users.forEach(user => {
//         userMap[user.id] = user.username;
//       });

//       // Map each tweet to include the username
//       const enrichedTweets = response.data.map(tweet => ({
//         ...tweet,
//         username: userMap[tweet.author_id] || null,
//       }));

//       console.log('Enriched Tweets:', enrichedTweets);
//     }

//     // console.log(' API Response received:', response.data);
//   } catch (error) {
//     console.error(' Error while calling API:', error.message);
//   }
// });

module.exports = app;
