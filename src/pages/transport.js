import React from "react"
import * as THREE from "three"

import styles from "../styles/exhibit.css"

class Transport extends React.Component {
  componentDidMount() {
    const worldWidth = 128, worldDepth = 128;

    let scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xaaccff )
    scene.fog = new THREE.FogExp2( 0xaaccff, 0.0007 )

    this.camera = new THREE.PerspectiveCamera(75, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 1000)

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)

    const geometry = new THREE.PlaneGeometry( 20000, 20000, worldWidth - 1, worldDepth - 1 )
    geometry.rotateX( - Math.PI / 2 )

    const position = geometry.attributes.position;
    position.usage = THREE.DynamicDrawUsage;

    for ( let i = 0; i < position.count; i ++ ) {

      const y = 35 * Math.sin( i / 2 );
      position.setY( i, y );

    }

    const texture = new THREE.TextureLoader().load( 'https://res.cloudinary.com/aleesteele/image/upload/v1615729171/water_x6kbjn.jpg' );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 5, 5 );

    const material = new THREE.MeshBasicMaterial({ color: 0x0044ff, map: texture })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    this.camera.position.z = 5

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))

      cube.rotation.x += 0.00002
      cube.rotation.y += 0.002

      this.renderer.render(scene, this.camera)
    }

    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  onWindowResize() {
    if (this.mount) {
      this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: `100px`}}>Transport & Shipping</h1>
        <div ref={ref => (this.mount = ref)} style={{ width: `100vw`, height: `100vh`, opacity: `80%` }}></div>
        information here.
      </div>
    )
  }
}

export default Transport
