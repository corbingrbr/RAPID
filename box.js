function Box(_position) {
    
    this.update = function() {
        mat4.identity(modelMatrix);
        mat4.translate(modelMatrix, position);
        mat4.rotate(modelMatrix, degToRad(rotation), [1, 1, 1]);        

        rotation -= (75 * TimeManager.getDeltaTime()) / 1000.0;
    };
    
    this.getModelMatrix = function() {
        return modelMatrix;
    };

    this.getMesh = function() {
        return mesh;
    };
      
    var pushMatrix = function() {
        var copy = mat4.create();
        mat4.set(modelMatrix, copy);
        mMatrixStack.push(copy);
    };
    
    var popMatrix = function() {
        if (mMatrixStack.length == 0) {
              throw "Invalid popMatrix!";
        }
        modelMatrix = mMatrixStack.pop();
    };
    
    var degToRad = function(degrees) {
        return degrees * Math.PI / 180;
    };
    
    var mesh = LoadManager.getMesh("cube");
    var modelMatrix = mat4.create();
    var mMatrixStack = [];
    var position = _position;
    var rotation = 0;
}
    

    

