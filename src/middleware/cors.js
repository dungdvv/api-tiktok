import cors from "cors";

// whitelist
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:1412",
  "https://lav-dev.vercel.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
};

export default cors(corsOptions);
