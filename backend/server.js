require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const productRoutes = require("./routes/productRoutes");

connectDB();
//text
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//routers
app.use('/user', require('./routers/useRouter'))
app.use('/api', require('./routers/categoryRouter'))
app.use('/api', require('./routers/upload'))

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));