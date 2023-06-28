import multer from "multer";
import path from "path";

import APIError from "@/error/APIError";

/**
 *
 * @param {string} dest where to save the images
 * @returns
 */
const storage = (dest) =>
  multer.diskStorage({
    destination: function (req, _file, cb) {
      console.log(req);
      cb(null, path.join(__dirname, "../" + dest));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
    },
  });

const fileFilter = (_req, file, cb) => {
  if (file.mimetype.startsWith("image/") || file.mimetype.endsWith("/pdf")) {
    cb(null, true);
  } else {
    cb(new APIError("Only image and pdf files are allowed."), false);
  }
};

/**
 *
 * @param {string} dest where to save the images
 * @returns
 */
const upload = (dest) => multer({ storage: storage(dest), fileFilter });

export default upload;
