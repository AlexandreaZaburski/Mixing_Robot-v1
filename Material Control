//JavaScript
//Arduino Nano (Arduino Uno)

function MaterialController($scope, $http) { 
  $scope.materials = [];
  $scope.newMaterial = {
    name: '',
    image: '',
    ingredients: [
      { name: '', amount: 0 }
    ]
  };
  
  $scope.pumps = {
    label: "pumps",
    ingredients: [
      { label: "pump0", ingredient: "" }
    ]
  };
  
  $scope.sizes = [
    { size: '40', time: '18000' },
    { size: '200', time: '90000' },
    { size: '400', time: '180000' }
  ];

  $scope.selectedMaterial;
  $scope.materialTime = 10000;
  $scope.pumpTime = 0;

  $scope.pumpDuplicates = 0;

  $scope.ingredientsList = [
  'Chemical A', 'Chemical B', 'Chemical C'
  ];
  
  $scope.setMaterial = function (materials) {
    $scope.materials = materials;
  };
  
   $scope.initializePumps = function () {
    console.log('ran');
    $http.post('/initializePumps').success(function (data) {
      console.log(data);
      return data;
    });
  };
  
    $scope.setPumps = function (pumps) {
    $scope.pumps = pumps[0];
  };

  $scope.getPumps = function () {
    $http.get('/pump.json').success(function (data) {
      console.log(data);
      return data;
    });
  };
  
   $scope.addPump = function () {
    var index = 0;
    if (typeof $scope.pumps === 'undefined') {
      $scope.pumps = {
        label: "pumps",
        ingredients: [ { label: "pump0", ingredient: "" } ]
      }
    } else {
      index = $scope.pumps.ingredients.length;
      $scope.pumps.ingredients.push({ label: "pump" + String(index), ingredient: "" });
    }

    $http.post('/updatepump.json', $scope.pumps).success(function (data) {
      console.log("addPump Update Success");
      console.log($scope.pumps);
    });
  };

  $scope.removePump = function () {
    $scope.pumps.ingredients.pop();
    $http.post('/updatepump.json', $scope.pumps).success(function (data) {
      console.log("removePump Update Success");
    });
  };

  $scope.savePumpValue = function (pumpNumber) {
    $http.post('/updatepump.json', $scope.pumps).success(function (data) {
      if (data) {
        console.log(data);
      }
    });
  };
  
  $scope.selectMaterial = function (material) {
    //console.log('select', arguments, this);
    $scope.selectedMaterial = material;
    
      if ($scope.lastSelected) {
      $scope.lastSelected.selectedMaterial = '';
    }

    this.selectedMaterial = 'selectedMaterial';
    $scope.lastSelected = this;
  };

  $scope.selectSize = function (size) {
    for (var i in $scope.sizes) {
      if ($scope.sizes[i].size === size) {
        $scope.materialTime = $scope.sizes[i].time;
        return;
      }
    }
  };
  
  $scope.addNewMaterial = function () {
    $http.post('/material.json', $scope.newMaterial).success(function (data) {
      console.log(data.material);
      console.log($scope);
      if (data.material) {
        $scope.materials.push(data.material);
        $scope.newMaterial = {
          name: '',
          image: '',
          ingredients: [
            { name: '', amount: 0 }
          ]
        };
      } else {
        alert(JSON.stringify(data));
      }
    });
  };
  
   $scope.addNewIngredient = function () {
    $scope.newMaterial.ingredients.push({ name: '', amount: 0 });
    console.log('Added new ingredient');
  };

  $scope.removeIngredient = function (index) { 
    $scope.newMaterial.ingredients.splice(index, 1);
    console.log('Removed ingredient at index ' + index);
  };
  
   // Filter for materials
   
  $scope.containsIngredients = function (material) {
    var numIngredients = material.ingredients.length;
    var numPumps = $scope.pumps.ingredients.length;
    var ingredientsContained = 0 - $scope.pumpDuplicates;
    for (var i = 0; i < numIngredients; i++) {
      for (var j = 0; j < numPumps; j++) {
        if (material.ingredients[i].name === $scope.pumps.ingredients[j].ingredient) {
          ingredientsContained++;
          if (ingredientsContained >= numIngredients && ingredientsContained <= numPumps) {
            return true;
          }
          continue;
        }
      }
    }
    return false;
  };
  
   // Check if there are duplicate pump ingredients before dispensing materials
  /*$scope.checkDuplicates = function () {
    var len = $scope.pumps.ingredients.length;
    for (var i = 0; i < len; i++) {
      for (var j = i+1; j < len; j++) {
        if ($scope.pumps.ingredients[i].ingredient === $scope.pumps.ingredients[j].ingredient) {
          return false;
        }
      }
    }
    return true;
  };*/
  
   $scope.writeNumDuplicates = function () {
    var dupCount = 0;
    var len = $scope.pumps.ingredients.length;
    for (var i = 0; i < len; i++) {
      for (var j = i+1; j < len; j++) {
        if ($scope.pumps.ingredients[i].ingredient === $scope.pumps.ingredients[j].ingredient) {
          dupCount++;
        }
      }
    }
    $scope.pumpDuplicates = dupCount;
    //return dupCount;
  };

  $scope.editMaterial = function (material) {
    console.log(material);
    $http.post('/updatedrink.json', material).success(function (data) {
      console.log("Success");
      console.log(data);
    });
  };
}
