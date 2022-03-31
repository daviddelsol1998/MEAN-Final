const express = require('express');
const router = express.Router();


router.post('/', () => {
    console.log('Creating Product')
})

module.exports = router;