import fs from "fs";

const removeFileSync = (req, res) => {
  try {
    fs.unlinkSync(req.path);
    return res.status(200).send({
      message: "File is deleted.",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Could not delete the file. " + err,
    });
  }
};

export default removeFileSync;
