// eslint-disable-next-line import/no-anonymous-default-export
export default `


uniform float uProgress;    
uniform sampler2D uOriginalPosition;
uniform sampler2D uOriginalPosition1;
uniform vec3 uMouse;
uniform float uTime;
float rand (vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    vec2 vUv = gl_FragCoord.xy / resolution.xy;
    float offset = rand(vUv);
    vec3 position = texture2D(uCurrentPosition, vUv);
    vec3 velocity = 
}
`
