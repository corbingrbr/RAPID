function regularPolygonElement(vertexShaderID, fragmentShaderID) {

    this.prototype = new renderElement(vertexShaderID, fragmentShaderID);
    
    this.addObject = function(object) { objs.push(object); };
    this.removeObject = function(object) { objs.remove(object); };
    this.setup = function() {
        
         // Create new shader object
        shader = new ShaderProgram(vertexShader, fragmentShader);
       
        // Compile shader
        shader.load();
        
        // Use shader
        gl.useProgram(shader.getProgramID());

        // Create Handles 
        shader.loadHandle("aVertexPosition", "attribute");
        shader.loadHandle("aVertexColor", "attribute");
        shader.loadHandle("uPMatrix", "uniform");
        shader.loadHandle("uVMatrix", "uniform");
        shader.loadHandle("uMMatrix", "uniform");   
    };
    
    this.renderPass = function() {

        gl.useProgram(shader.getProgramID());
        
        this.setupShader();
        
        var mesh = {};
        mesh.name = "";
        
        // Iterate through objects and render them
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].getMesh().getName() != mesh.name) {
                mesh = objs[i].getMesh(); 
                this.setupMesh(mesh);
            }

            this.renderObject(objs[i]);
        }
    };
    
    // Enables and binds environmental data
    this.setupShader = function() {
        gl.uniformMatrix4fv(shader.getHandle("uPMatrix"), false, Scene.cam.getProjectionMatrix());
        gl.uniformMatrix4fv(shader.getHandle("uVMatrix"), false, Scene.cam.getViewMatrix());
    };
    
    // Enables and binds mesh data
    this.setupMesh = function(mesh) {

        // Enable and bind attributes to their respective data buffers
        //gl.enableVertexAttribArray(shader.getHandle("aVertexPosition"));
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.getPositionBuffer());
        gl.vertexAttribPointer(shader.getHandle("aVertexPosition"), 3, gl.FLOAT, false, 0, 0);
        
        //gl.enableVertexAttribArray(shader.getHandle("aVertexColor"));
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.getColorBuffer());
        gl.vertexAttribPointer(shader.getHandle("aVertexColor"), 4, gl.FLOAT, false, 0, 0);
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.getIndexBuffer());
    };

    // Configures GL settings
    this.setupEnvironment = function() {};
    // Resets GL settings
    this.tearDownEnvironment = function() {};
    // Renders an Object
    this.renderObject = function(object) {
        
        // Set Model Matrix for this object
        gl.uniformMatrix4fv(shader.getHandle("uMMatrix"), false, object.getModelMatrix());
        gl.drawElements(gl.TRIANGLES, object.getMesh().getIndices().length, gl.UNSIGNED_SHORT, 0);
    };

    this.getShader = function() { return shader; };

    var vertexShader = vertexShaderID;
    var fragmentShader = fragmentShaderID;
    var shader;
    var objs= [];
    
}
