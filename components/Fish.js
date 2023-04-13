// Registering component in Collider.js
AFRAME.registerComponent("fish", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `fish${i}`;

      //position variables
      var posX = Math.floor(Math.random() * 100 + -50);
      var posY = Math.floor(Math.random() * 5 + 5);
      var posZ = Math.floor(Math.random() * 60 + -40);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.generateFish(id, position);
    }
  },
  generateFish: (id, position) => {
    //Get the terrain element
    var fishModelEntity = document.querySelector("#fishModels");

    //creating the bird model entity
    var fishEl = document.createElement("a-entity");

    //Setting multiple attributes
    fishEl.setAttribute("id", id);

    fishEl.setAttribute("position", position);
    fishEl.setAttribute("rotation", {x:0,y:180,z:0});
    fishEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });

    fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");

    //animated models
    fishEl.setAttribute("animation", {
      property:"position",
      to:"100 10 -20",
      loop:"true",
      dur:20000
    });
    fishEl.setAttribute("animation-mixer", {})
    //append the bird entity as the child of the terrain entity
    fishModelEntity.appendChild(fishEl);
  }
});


