const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "upload/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
function checkFileType(file, cb) {
  const filetypes = /mp4/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("video only!");
  }
}
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("video"), (req, res) => {
  res.send(`/${req.file.path}`);
});

module.exports = router;
