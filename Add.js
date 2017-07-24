/* GET add material page. */
// Show the add form
exports.form = function (Material) {
  return function (req, res) {
    Material.find({}, function (err, materials) {
      res.render('add', {
        title: 'Mixing_Robot-v1: Add Material',
        materials: materials
      });
    });
  };
}

// Add a material
exports.addMaterial = function (Material) {
  return function (req, res) {
    console.log(req.body);
    var material = new Material(req.body);
    material.save(function (err, material) {
      if (err || !material) {
        res.json({ error: err });
      } else {
        res.json({ material: material });
      }
    });
  };
};

// Log the drink to console
exports.logMaterial = function (Material) {
  return function (req, res) {
    console.log(req.body);
  };
};

// Add a pump
exports.addPump = function (Pump) {
  return function (req, res) {
    console.log(req.body);
    var pump = new Pump(req.body);
    pump.save(function (err, pump) {
      if (err || !pump) {
        res.json({ error: err });
      } else {
        res.json({ pump: pump });
      }
    });
  };
};;
