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
    uniform sampler2D uOriginalPosition;
    vec3 uniform uMouse;
    void main(){
        vec2 position = texture2D(uPosition, vUv).xy;
        vec2 original = texture2D(uOriginalPosition, vUv).xy;
        vec2 velocity = texture2D(uPosition, vUv).zw;
        velocity *= 0.99;

        vec2 direction = normalize(original-position);
        float dist = length(original - position);
        if(dist > 0.01){
            velocity += direction * 0.01;
        }
        

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
