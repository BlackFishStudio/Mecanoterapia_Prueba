// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Mecano Prueba_010000", a: "PhysCamera_Layama_Gym_01", p: new BABYLON.Vector3(4003.19, 150, 1249.36), l: new BABYLON.Vector3(4003.43, 150, 1250.33)});
   layamaCameras.push({n: "Mecano Prueba_010001", a: "PhysCamera_Layama_Gym_002", p: new BABYLON.Vector3(4343.95, 150, 1447.3), l: new BABYLON.Vector3(4344.26, 150, 1448.25)});
   layamaCameras.push({n: "Mecano Prueba_010002", a: "PhysCamera_Layama_Gym_003", p: new BABYLON.Vector3(4210.49, 150, 1748.11), l: new BABYLON.Vector3(4210.81, 150, 1749.06)});
   layamaCameras.push({n: "Mecano Prueba_010003", a: "PhysCamera_Layama_Gym_004", p: new BABYLON.Vector3(3900.25, 150, 1550.31), l: new BABYLON.Vector3(3900.57, 150, 1551.26)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

