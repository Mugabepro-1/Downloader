const express = require("express")
const cors = require("cors")
const ytdl = require("ytdl-core")

const app = express()

app.use(cors())

app.get('/mp3download', async(req,res)=>{
    const url = req.query.url;
    res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
    ytdl(url, {filter:'audioonly'}).pipe(res);
})
app.get('/mp4download', async(req,res)=>{
    const url = req.query.url;
    const resolution = req.query.res;
    res.header('Content-Disposition', `attachment; filename="video.mp4"`);
    ytdl(url, {quality:resolution}).pipe(res)
})


const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})