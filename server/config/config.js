//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://patelsunny15:pass123@ds119044.mlab.com:19044/listings', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyAYOARj5H80oDjLgvN4-Actjn7Ezbbr3Gg'
  },
  port: 8080
};
