const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working fine");
});



app.get("/video1", (req, res) => {
  const pathFile = path.join(__dirname, "public", "video1.mp4");
  const stat = fs.statSync(pathFile);
  const fileSize = stat.size;

  const range = req.headers.range;
  console.log("range", range);

  if (!range) {
    return res.status(400).send("range is required");
  }



  const chunkSize = 10 ** 6; // 1 MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize, fileSize - 1); 

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);

  const fileStream = fs.createReadStream(pathFile, { start, end });
  fileStream.pipe(res);
});




app.get("/video2", (req, res) => {
  const pathFile = path.join(__dirname, "public",  "video2.mp4");

  const stat = fs.statSync(pathFile);
  const fileSize = stat.size;

  const range = req.headers.range;
  console.log("range", range);

  if (!range) {
    return res.status(400).send("range is required");
  }

  const chunkSize = 10 ** 6; // 1 MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize, fileSize - 1);

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);

  const fileStream = fs.createReadStream(pathFile, { start, end });
  fileStream.pipe(res);
});







app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
