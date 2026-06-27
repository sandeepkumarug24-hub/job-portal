import dotenv from "dotenv";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";
dotenv.config();
import connectCloudinary from "./src/utils/cloudinary.js";

const PORT = process.env.PORT || 3001;
await connectDB();
connectCloudinary();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
