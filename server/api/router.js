const express = require('express')
const router = express.Router()



router.get('/posts', (req, res)=>{
    const posts = [
      {
          "code": "BAcyDyQwcXX",
          "caption": "Crazy Rich",
          "likes": 56,
          "id": "1161022966406956503",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/pa1lxyUmG8Q",
          "thumbnail_src": "https://img.youtube.com/vi/pa1lxyUmG8Q/hqdefault.jpg"
        },
        {
          "code": "BAcJeJrQca9",
          "caption": "Shohei Ohtani",
          "likes": 59,
          "id": "1160844458347054781",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/3oaaS1nTyQk",
          "thumbnail_src": "https://img.youtube.com/vi/3oaaS1nTyQk/hqdefault.jpg"
        },
        {
          "code": "BAF_KY4wcRY",
          "caption": "Joe Rogan",
          "likes": 79,
          "id": "1154606670337393752",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        }
        ,
        {
          "code": "BAPIPRjQce9",
          "caption": "baby pancakes",
          "likes": 47,
          "id": "1157179863266871229",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/vmw4vT5V6jo/hqdefault.jpg"
        },
        {
          "code": "-hZh6IQcfN",
          "caption": "New Stickers",
          "likes": 66,
          "id": "1126293663140399053",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/F7GOh8qlLwQ/hqdefault.jpg"
        },
        {
          "code": "-B3eiIwcYV",
          "caption": "Taco breakfast",
          "likes": 33,
          "id": "1117418173361145365",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/DAV2sWfiZN4/hqdefault.jpg"
        },
        {
          "code": "BAhvZrRwcfu",
          "caption": "Tried poke",
          "likes": 30,
          "id": "1162418651480049646",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "BAAJqbOQcW5",
          "caption": "Brunchin'",
          "likes": 40,
          "id": "1152964002473690553",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_4jHytwcUA",
          "caption": "2015 summed up",
          "likes": 62,
          "id": "1150824171912152320",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_zbaOlQcbn",
          "caption": "Lekker Choco",
          "likes": 52,
          "id": "1149382879529256679",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_rmvQfQce8",
          "caption": "discovered the #hamont",
          "likes": 35,
          "id": "1147180903383025596",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_ep9kiQcVy",
          "caption": "Snow Man",
          "likes": 64,
          "id": "1143535906423162226",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_XpJcrwcSn",
          "caption": "spread on flexbox",
          "likes": 74,
          "id": "1141561999742846119",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_KnU7MwceA",
          "caption": "Hanging out",
          "likes": 54,
          "id": "1137894817632733056",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_HMejJQcY5",
          "caption": "Today I learned",
          "likes": 18,
          "id": "1136932306813044281",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_Fq2zmwcaz",
          "caption": "lettered gift",
          "likes": 48,
          "id": "1136502965197194931",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "_A2r0aQcfD",
          "caption": "hardware meet JavaScript",
          "likes": 57,
          "id": "1135147611821557699",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-1rhFawccs",
          "caption": "audio upgrades",
          "likes": 39,
          "id": "1132002270913873708",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-pjx-gQcVi",
          "caption": "My babyme",
          "likes": 81,
          "id": "1128590547628442978",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-oTZ0zQcWt",
          "caption": "It's too early",
          "likes": 81,
          "id": "1128237044221461933",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-mxKQoQcQh",
          "caption": "both have figured it",
          "likes": 47,
          "id": "1127804966031967265",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-fasqlQceO",
          "caption": "decorated the house",
          "likes": 46,
          "id": "1125735850454402958",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-VBgtGQcSf",
          "caption": "the new Hamilton",
          "likes": 27,
          "id": "1122810327591928991",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        },
        {
          "code": "-FpTyHQcau",
          "caption": "Austin for a conference",
          "likes": 82,
          "id": "1118481761857291950",
          "display_src": `https://picsum.photos/400/400/?image=20`,
          "vid_src": "https://www.youtube.com/embed/fiCu-oktf-4",
          "thumbnail_src": "https://img.youtube.com/vi/fiCu-oktf-4/hqdefault.jpg"
        }
      ];
          res.json(posts);
  });
  
  router.get('/comments', (req, res)=>{
    const comments = {
      "BAhvZrRwcfu":[
        {
          "text":"Totally need to try this.",
          "user": "heavymetaladam"
        }
      ],
      "BAcyDyQwcXX":[
        {
          "text":"Wes. WE should have lunch.",
          "user": "jdaveknox"
        },
        {
          "text":"#adults",
          "user": "jdaveknox"
        },
        {
          "text":"@jdaveknox yes!",
          "user": "wesbos"
        },
        {
          "text":"😍 love Hamilton!",
          "user": "willowtreemegs"
        }
      ],
      "BAPIPRjQce9":[
        {
          "text":"Those are cute! They're like silver dollar pancakes.",
          "user": "rrsimonsen"
        },
        {
          "text":"I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! 😝😛😝♥️",
          "user": "terzisn"
        },
        {
          "text":"... and apparently growing baby. 👀. Yum.",
          "user": "henrihelvetica"
        },
        {
          "text":"@wesbos 👍 my daughter is a pancake eating machine!",
          "user": "brentoage"
        },
        {
          "text":"Nice stove!",
          "user": "haaps"
        },
        {
          "text":"Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?",
          "user": "gobananna"
        },
        {
          "text":"@gobananna I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.",
          "user": "wesbos"
        },
        {
          "text":"@haaps thanks! It's a Jenn air - so nice to cool with!",
          "user": "wesbos"
        },
        {
          "text":"Where would you go and for how long, if you had location freedom? - Greg 🌎",
          "user": "world_greg"
        }
      ],
      "BAF_KY4wcRY":[
        {
          "text":"Looking great Wes! I'd like to see the other side of the room too.",
          "user": "axcdnt"
        },
        {
          "text":"I've never caught your podcast. Have one right? Btw - they don't have a Canary pillow? 😝",
          "user": "henrihelvetica"
        },
        {
          "text":"Great way to start the year.",
          "user": "pmgllc"
        },
        {
          "text":"Are there 4k monitors?",
          "user": "alexbaumgertner"
        },
        {
          "text":"@axcdnt that is where I put all the junk. I'll have to clean that side too @henrihelvetica no podcast yet! @pmgllc ohh yeah! @alexbaumgertner yep - the main one is 4K - I'm loving it",
          "user": "wesbos"
        },
        {
          "text":"That chrome pillow. 😉",
          "user": "imagesofthisandthat"
        },
        {
          "text":"@wesbos is that the Dell 4k? The MacBook Pro powers it well? I also have a Retina™ / x1 setup as well. Very handy.",
          "user": "henrihelvetica"
        },
        {
          "text":"#minimalsetups",
          "user": "wesbos"
        }
      ],
      "_4jHytwcUA":[
        {
          "text":"that is the sound of success!",
          "user": "mdxprograms"
        }
      ],
      "_zbaOlQcbn":[
        {
          "text":"Did she get to eat her letter?",
          "user": "pathiebert"
        },
        {
          "text":"Nope @pathiebert! She has too much teeth now (8) so that would definitely be her first cavity 😉",
          "user": "kaitbos"
        }
      ],
      "_rmvQfQce8":[
        {
          "text":"A+",
          "user": "mrjoedee"
        },
        {
          "text":"I recently went to a ramen place in Philly. So amazing!",
          "user": "jrtashjian"
        }
      ],
      "_ep9kiQcVy":[
        {
          "text":"All bundled up!  Where ya goin?",
          "user": "sophie_and_sadie"
        }
      ],
      "_XpJcrwcSn":[
        {
          "text":"Super congrats! That's wicked cool and looks great.",
          "user": "pmgllc"
        },
        {
          "text":"real live paper magazine? woah haha. flex box is awesome though, could rage quit without it",
          "user": "tjholowaychuk2"
        },
        {
          "text":"@tjholowaychuk2 haha yes! Old school stylez!",
          "user": "wesbos"
        }
      ],
      "_KnU7MwceA":[
    
      ],
      "_HMejJQcY5":[
        {
          "text":"👌",
          "user": "t_volpe"
        },
        {
          "text":"Nice shot, mister!",
          "user": "imagesofthisandthat"
        }
      ],
      "_Fq2zmwcaz":[
        {
          "text":"😍",
          "user": "melsariffodeen"
        },
        {
          "text":"Very cool!",
          "user": "ka11away"
        }
      ],
      "_A2r0aQcfD":[
        {
          "text":"Uhu!",
          "user": "lucascaixeta"
        }
      ],
      "1rhFawccs":[
        {
          "text":"What's your lighting source?",
          "user": "seth_mcleod"
        },
        {
          "text":"And what are you using for XLR mix adapter? I found a big price jump between $55 range and $170 range.",
          "user": "pmgllc"
        },
        {
          "text":"I still need a desk boom for mine mic. Nice upgrades",
          "user": "stolinski"
        }
      ],
      "pjx-gQcVi":[
    
      ],
      "oTZ0zQcWt":[
        {
          "text":"Love the coat! Where's it from? Lol",
          "user": "_lindersss"
        }
      ],
      "mxKQoQcQh":[
    
      ],
      "hZh6IQcfN":[
        {
          "text":"What do we gotta do to get some :)? @wesbos",
          "user": "jonasbad"
        },
        {
          "text":"Might drop by today - real quick. Trade you an illegal pin for these? Lol. @wesbos",
          "user": "henrihelvetica"
        },
        {
          "text":"I'm with @jonasbad on this. What we gotta do? :D",
          "user": "datamoshr"
        },
        {
          "text":"@jonasbad @datamoshr I'll post them up on my blog soon!",
          "user": "wesbos"
        },
        {
          "text":"Want",
          "user": "kamuelafranco"
        },
        {
          "text":"want!",
          "user": "josemanuelxyz"
        },
        {
          "text":"#Top",
          "user": "gabrielvieira.me"
        }
      ],
      "fasqlQceO":[
        {
          "text":"Where's lux at? 💤?",
          "user": "henrihelvetica"
        },
        {
          "text":"Love this house during the holidays! And all other times of the year...",
          "user": "danielleplas"
        }
      ],
      "VBgtGQcSf":[
        {
          "text":"@dogsandbrew",
          "user": "likea_bos"
        },
        {
          "text":"Next on my list!",
          "user": "tomwalsham"
        },
        {
          "text":"Is that from collective arts ?",
          "user": "trevorb_91"
        }
      ],
      "FpTyHQcau":[
        {
          "text":"@kaitbos  that vest!!! 😍",
          "user": "courtneyeveline"
        },
        {
          "text":"I just love her! @kaitbos",
          "user": "kalibrix"
        },
        {
          "text":"@courtneyeveline I know! My friend gave it to her and I wanted a matching one but only Lux can pull it off. She's so fancy 😉",
          "user": "kaitbos"
        },
        {
          "text":"Char has that vest!!! Super cute!",
          "user": "jennlensink"
        },
        {
          "text":"You'll have to meet her soon @kalibrix!!",
          "user": "kaitbos"
        },
        {
          "text":"Haha @kaitbos so true, babies these days are sooo stylish. 😎",
          "user": "courtneyeveline"
        },
        {
          "text":"JavaScript 😄😆🙋",
          "user": "lucascaixeta"
        },
        {
          "text":"That hoodie is amazing! Where did you get it?",
          "user": "br11x"
        },
        {
          "text":"@br11x I did a teespring a few months ago - maybe I'll do another one soon",
          "user": "wesbos"
        }
      ],
      "B3eiIwcYV":[
        {
          "text":"If you get in the mood for authentic Italian pizza, check out @backspaceaustin - it's👌🏻",
          "user": "dessie.ann"
        },
        {
          "text":"😱 jealous",
          "user": "jenngbrewer"
        }
      ]
    };
    res.json(comments);
  });

  module.exports = router