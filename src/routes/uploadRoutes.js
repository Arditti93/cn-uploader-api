const { Router } = require ("express"); 
const { generatePreSignedPutUrl } = require('../controllers/uploadControllers')
const router = Router();

router.post('/upload', generatePreSignedPutUrl) 


module.exports = router