import jwt from "jsonwebtoken";
import authService from "@/modules/client/auth/auth.service";

const verifyJWT = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "access_token_secret_key");

    const user = await authService.getOne(decoded?.username);

    if (user) {
      // remove secret info data
      delete user.password;

      req.user = user;
      return next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default verifyJWT;
