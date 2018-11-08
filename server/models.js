'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CommentSchema = mongoose.Schema({
    videoId: String,
    text : String,
    user: String,
});

const VideoSchema = mongoose.Schema({
    code: String,
    caption : String,
    vid_src: String,
    thumbnail_src: String
});


const Comment= mongoose.model('Comment', CommentSchema);
const Video= mongoose.model('Video', VideoSchema);

module.exports = {Comment, Video};

/*
"code": "pa1lxyUmG8Q",
"caption": "Crazy Rich",
"vid_src": "https://www.youtube.com/embed/pa1lxyUmG8Q",
"thumbnail_src": "https://img.youtube.com/vi/pa1lxyUmG8Q/hqdefault.jpg"
*/