import rateLimit from "express-rate-limit";

// setup limiter required by user.
// over 100 request then server should res to client status [429 TOO MANY REQUESTS]
const limiter = rateLimit({
  // 15 minutes
  windowMs: 15 * 60 * 1000,
  // limit each IP to 100 requests per windowMs
  max: 100,
});

export default limiter;
