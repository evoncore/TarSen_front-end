var express = require('express');
var router = express.Router();

var M_LIST = [
  {
    id: 1,
    userName: 'Vladimir',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam totam eos deleniti enim, delectus, beatae provident iusto, voluptatibus quod ipsam veniam voluptates! Totam laudantium cumque vitae accusamus vel voluptatum adipisci, quo soluta, perspiciatis harum rem reiciendis consequatur molestiae veritatis sequi suscipit, sit! Architecto molestias nemo sequi perspiciatis, esse numquam a!'
  },
  {
    id: 2,
    userName: 'David',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ratione vero voluptates sed, porro, quo.'
  },
  {
    id: 3,
    userName: 'Lilya',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit cupiditate expedita minus molestiae? Tempora rem dolorum quis eligendi nobis.'
  }
];

router
  .post('/messages', function(req, res, next) {
    res.json(JSON.stringify(M_LIST));
    res.end()
  })
  .post('/messages/add', function(req, res, next) {
    M_LIST.push(req.body);
    res.end();
  })
  .post('/messages/:id/remove', function(req, res, next) {
    M_LIST = M_LIST.filter(el => {
      if (req.params.id != el.id) {
        return el;
      }
    });
    res.end();
  })

module.exports = router;
