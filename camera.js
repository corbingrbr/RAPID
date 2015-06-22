function Camera(_eye, _target, _up) {
 
    this.setEye = function(_eye) { eye = _eye; };
    this.getEye = function() { return eye; };
    this.setTarget = function(_target) { target = _target; };
    this.getTarget = function() { return target; };
    this.setUp = function(_up) { up = _up; };
    this.getUp = function() { return up; };
    this.setProjectionMatrix = function(matrix) { projectionMatrix = matrix; };
    this.getProjectionMatrix = function() { return projectionMatrix; };
    this.getViewMatrix = function() { return mat4.lookAt(eye, target, up, viewMatrix); }; 
    this.zoom = function(direction, amount) {
        var vec = vec3.normalize(target-eye) * amount * direction;
        eye += vec;
        target += vec;
    };

    var eye = _eye;
    var target = _target;
    var up = _up;
    var projectionMatrix = mat4.create();
    var viewMatrix = mat4.create();
}
