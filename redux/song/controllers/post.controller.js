const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const albumModel = require("../models/album.model");
const artists = require("../models/artist.model");

router.post("/register", async (req, res) => {
  let data = await artists.create(req.body);
  return res.status(201).send({ data });
});

router.post("/login", async (req, res) => {
  let artistName = req.body.artist;
  let password = req.body.password;

  let match = await artists.findOne({ artist: artistName }).lean().exec();
  if (match) {
    return res.status(200).send({ username: artistName });
  } else {
    return res.status(400).send({ message: "You have to register" });
  }
});


router.post("/post", async (req, res) => {
  let data = await albumModel.create(req.body);
  return res.status(201).send({ data });
});

router.get("/songs/:artist" , async(req,res)=>{
    let art = req.params.artist;
    let data = await albumModel.find({artist:art}).lean().exec();
    return res.status(200).send({data});
})

router.get("/allsongs/:album",async(req,res)=>{
    let alb = req.params.album;
    let data = await albumModel.find({album:alb}).lean().exec();
    return res.status(200).send({data});

})

router.get("/genre/:genre",async(req,res)=>{
    let alb = req.params.genre;
    let data = await albumModel.find({genre:alb}).lean().exec();
    return res.status(200).send({data});

})


router.get("/year", async(req,res)=>{

    let data = await albumModel.aggregate([{
        $sort : {year : -1}
    }])

    return res.status(200).send({data});
})

router.get("/year1", async(req,res)=>{

  let data = await albumModel.aggregate([{
      $sort : {year : 1}
  }])

  return res.status(200).send({data});
})

router.get("/all", async(req,res)=>{
   const page = req.query.page;
   const limit = req.query.limit;
    let data = await albumModel.find().limit(limit * 1).skip((page -1)*limit)
    return res.status(200).send({data});
})


module.exports = router;
