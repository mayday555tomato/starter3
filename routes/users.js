var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});


router.post('/', (req, res) =>{
  let user = req.body;
  for(let i = 0; i < users.length; i ++){
    if (users[i].username == user.username){
      if(users[i].password == user.password){
        res.status(200).end();
      }else{
        res.status(400).json({
          message: 'wrong password.'
        });
      }
    }
  }
  res.status(400).json({
    message: 'user does not exist.'
  });
});

const users = [
    {
        id: 1,
        username: 'aaa',
        password: '111'
    },
    {
        id: 2,
        username: 'bbb',
        password: '222'       
    },
    {
        id: 3,
        username: 'ccc',
        password: '333'
    }
]

module.exports = router;
