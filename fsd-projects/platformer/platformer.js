$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
          createPlatform(100, 700, 100, 20, "orange");
          createPlatform(200, 650, 200, 20, "orange");
          createPlatform(600, 725, 200, 20, "orange");
          createPlatform(700, 630, 200, 20, "orange");
          createPlatform(800, 570, 200, 20, "orange");
          createPlatform(1200, 650, 200, 20, "orange");

    // TODO 3 - Create Collectables
          createCollectable("diamond", 250, 610, 0, 0);
          createCollectable("grace", 830, 170, 0.5, 0.5);
          createCollectable("kennedi", 1350, 170, 0.5, 0);

    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000);
    createCannon("left", 670, 2500);
    createCannon("top", 1200, 5000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
