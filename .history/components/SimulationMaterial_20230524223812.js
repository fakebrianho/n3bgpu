import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { Vector3 } from 'three'
const SimulationMaterial = shaderMaterial(
	{
		uPosition: null,
		uOriginalPosition: null,
		uMouse: new Vector3(-10, -10, 10),
	},
	`
    varying vec2 vUv;
    uniform sampler2D uPosition;
    void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 50.0;
    }
    `,
	`
    varying vec2 vUv;
    uniform sampler2D uPosition;
    uniform sampler2D uOriginalPosition;
    void main(){
        vec3 position = texture2D(uPosition, vUv).rgb;
        // vec3 velocity = texture2D(uVelocity, vUv).rgb;
        // position += velocity * 0.01;
        gl_FragColor.rgba = vec4(position, 1.0);
    }
    `
)
extend({ SimulationMaterial })
