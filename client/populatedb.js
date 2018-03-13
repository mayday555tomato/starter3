
//TODO: do this again by myself


//populatedb mongodb://dbadmin:dbadmin@@ds151528.mlab.com:51528/starterdb
console.log('Populating test data to the database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');
console.log('This script will populate: patient');

// Get arguments passed on command line

var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
var User = require('./src/models/User');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []


function UserCreate(username, password, cb){
    userDetail = {
        username: username,
        password: password
    }

    var user = new User(userDetail);
    user.save(function(err){
        if(err){
            cb(err, null);
            return;
        }
        console.log('New User:' + user);
        users.push(user);
        cb(null, user)
    });
}

function createUsers(cb){
    async.parallel([
        function(callback){
            UserCreate('user1', '111', callback);
        },
        function(callback){
            UserCreate('user2', '222', callback);
        },
        function(callback){
            UserCreate('user3', '333', callback);
        }
    ], cb);
}

async.series([
    createUsers
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
