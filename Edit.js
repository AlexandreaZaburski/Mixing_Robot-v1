/* GET edit page */
exports.show = function (Material) {
  return function (req, res) {
    Material.find({}, function (err, materials) {
      res.render('edit', { 
        title: "Mixing_Robot-v1: Edit Materials" ,
        materials: materials,
      });
    });
  };
};

exports.updateMaterial = function (Material) {
  return function (req, res) {
    Material.findOneAndUpdate({ _id: req.body._id }, 
      {
        name: req.body.name,
        image: req.body.image,
        ingredients: req.body.ingredients
      }, 
      function (err, material) {
        if (material) {
          console.log("Update Material");
          res.send(material);
        }
    });
  };
};
