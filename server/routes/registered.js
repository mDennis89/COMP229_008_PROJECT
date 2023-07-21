let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.render('user/registered', {
    title: 'Registration Successful',
    message: 'Congratulations! You have successfully registered.',
  });
});

module.exports = router;
