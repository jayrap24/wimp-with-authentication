const express = require('express')
const router = express.Router()
const {Comment, Video} = require('../models')



router.get('/posts', (req, res)=>{
    const posts = [
      {
          "code": "pa1lxyUmG8Q",
          "caption": "Crazy Rich",
          "id": "1161022966406956503",
          "vid_src": "https://www.youtube.com/embed/pa1lxyUmG8Q",
          "thumbnail_src": "https://img.youtube.com/vi/pa1lxyUmG8Q/hqdefault.jpg"
        },
        {
          "code": "3oaaS1nTyQk",
          "caption": "Shohei Ohtani",
          "likes": 59,
          "id": "1160844458347054781",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/3oaaS1nTyQk",
          "thumbnail_src": "https://img.youtube.com/vi/3oaaS1nTyQk/hqdefault.jpg"
        },
        {
          "code": "fiCu-oktf-4",
          "caption": "Joe Rogan",
          "likes": 79,
          "id": "1154606670337393752",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        }
       
      ];
          res.json(posts);
  });



 router.get('/videos', (req, res)=>{
    Video.find().then(response=>{
      res.json(response)
    })
  });

  router.delete('/videos/:code', (req, res)=>{
    Video.findOneAndDelete({code:req.params.code}).then(response=>{
      res.json(response)
    })
  });


  router.post('/videos', (req, res)=>{
    Video.create({
      code: req.body.code,
      caption: req.body.caption,
      vid_src: `https://www.youtube.com/embed/${req.body.code}`,
      thumbnail_src: `https://img.youtube.com/vi/${req.body.code}/hqdefault.jpg`
    }).then(response=>{
      res.json(response)
    })
  }); 

  
  router.get('/comments/:videoId', (req, res)=>{
    console.log(req.params.videoId)
    Comment.find({videoId:req.params.videoId}).then(response=>{
      res.json(response)
    })
  });

  

  router.post('/comments', (req, res)=>{
    Comment.create({
      text: req.body.text,
      user: req.body.user,
      videoId: req.body.videoId
    }).then(response=>{
      res.json(response)
    })
  });

  router.get('/comments', (req, res)=>{
    Comment.find().then(response=>{
      res.json(response)
    })

  });






  module.exports = router