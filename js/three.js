(function() {
  let scene;
  let camera;
  let renderer;
  let width = window.innerWidth;
  let height = window.innerHeight * 0.80;
  // let controls;
  let loader;

  // scene ステージ
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
  camera.position.set(200, 100, 300);
  camera.lookAt(scene.position);

  // controls
  // controls = new THREE.OrbitControls(camera);

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xefefef);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('stage').appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  // texture
  loader = new THREE.FontLoader();
  loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
    createText(font);
    // render();
    function createText(font) {
      let fontSize = 80;
      let fontHeight = 16;
      let fontCurveSegments = 20;
      let itemCount = 100;
      const materialP = new THREE.MeshStandardMaterial({
        color: 0xFFFF00
      });

      const geometryP = new THREE.TextBufferGeometry( 'P', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryP, materialP);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }

      const materialO = new THREE.MeshStandardMaterial({
        color: 0x00FF3B
      });
      const geometryO = new THREE.TextBufferGeometry( 'O', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryO, materialO);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }
      
      const materialR = new THREE.MeshStandardMaterial({
        color: 0xFF4F02
      });
      const geometryR = new THREE.TextBufferGeometry( 'R', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryR, materialR);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }

      const materialT = new THREE.MeshStandardMaterial({
        color: 0x00ECFF
      });
      const geometryT = new THREE.TextBufferGeometry( 'T', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryT, materialT);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }

      const materialF = new THREE.MeshStandardMaterial({
        color: 0x005FFF
      });
      const geometryF = new THREE.TextBufferGeometry( 'F', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryF, materialF);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }

      const materialL = new THREE.MeshStandardMaterial({
        color: 0xFF0461
      });
      const geometryL = new THREE.TextBufferGeometry( 'L', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryL, materialL);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }

      const materialI = new THREE.MeshStandardMaterial({
        color: 0x9057FF
      });
      const geometryI = new THREE.TextBufferGeometry( 'I', {
        font: font,
        size: fontSize,
        height: fontHeight,
        curveSegments: fontCurveSegments,
      } );
      for (let i = 0; i < itemCount; i++) {
        const mesh = new THREE.Mesh(geometryI, materialI);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        group.add(mesh);
      }
    }
  });

  scene.add(new THREE.DirectionalLight(0xffffff, 1.5));
  scene.add(new THREE.AmbientLight(0xffffff, 1.5));
// カメラの動き
  tick();
  function tick() {
    group.rotateY(0.0005);
    group.rotateX(0.0005);
    group.rotateZ(0);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  // function render() {
  //   requestAnimationFrame(render);
  //   controls.update();
  //   renderer.render(scene, camera);
  // }
})();


