/* GET home page. */
exports.index = function (Material, Pump) {
  return function (req, res) {
    Material.find({}, function (err, materials) {
      Pump.find({}, function (err, pumps) {
        res.render('index', { 
          title: "Mixing_Robot-v1: The Automatic Mixing Robot" ,
          materials: materials,
          pumps: pumps
        });
      });
    });
  };
};

exports.updatePump = function (Pump) {
  return function (req, res) {
    Pump.findOneAndUpdate({ _id: req.body._id }, 
      {
        ingredients: req.body.ingredients
      },
      function (err, pump) {
        console.log(pump);
        console.log('====');
        console.log(err);
        console.log('request body');
        console.log(req.body);
        if (pump == null) {
          Pump.create(req.body);
          pump = req.body;
          console.log('pump eq null');
        }
        res.send(pump);
    });
  }
}
