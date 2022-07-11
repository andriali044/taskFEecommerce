const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

//we will upload image on cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

//upload image
router.post('/upload', (req, res) =>{
    try {
        console.log(req.files)
        res.json('tes upload') 

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
})

module.exports = router