// Retrieves a shader script from html, creates the shader, compiles it, returns the shader
function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }
    
    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }
    
    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }
    
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    
    return shader;
}

function ShaderProgram(vertexShaderID, fragmentShaderID) {
    
    // Returns the id of the vertex shader
    this.getVertexShaderFileName = function() {return vertexShaderID;}
    
    // Returns the id of the fragment shader
    this.getFragmentShaderFileName = function() {return fragmentShaderID;}
    
    // Return whether or not the ShaderProgram has been loaded yet
    this.isLoaded = function() {return loaded;}
   
    // Returns the program ID of this ShaderProgram
    this.getProgramID = function() { return programID; }

    // Load the ShaderProgram
    this.load = function() {
        
        // Retrieve shaders from html, create, compile, return reference
        var vertexShader = getShader(gl, vertexShaderID)
        var fragmentShader = getShader(gl, fragmentShaderID);
        
        // Create shader's ProgramID
        programID = gl.createProgram();
        
        // Attach shaders to ProgramID
        gl.attachShader(programID, vertexShader);
        gl.attachShader(programID, fragmentShader);

        // Link program
        gl.linkProgram(programID);
        
        if (!gl.getProgramParameter(programID, gl.LINK_STATUS)) {
            alert("Could not initialize shaders " + vertexShaderID 
                  + "and " + fragmentShaderID);
        }

        // Recognition of proper load
        loaded = true;
    }
    
    // Retrieve a handle by name
    this.getHandle = function(handleName) {
        if (loaded) {
                return handles[handleName];
        }
        
        alert("ShaderProgram not loaded, handle undefined");
        return null;
    }
    

    // Load a handle to ShaderProgram
    this.loadHandle = function(handleName, type) {
        
        if (!handles[handleName]){
            switch (type){
            case 'attribute':
                handles[handleName] = gl.getAttribLocation(programID,
                                                          handleName);
                break;
            case 'uniform':
                handles[handleName] = gl.getUniformLocation(programID,
                                                           handleName);
                break;
            default:
                DEBUG("Invalid handle type: " + type +
                      " for handle " + handleName);
                return;
            }
            if (handles[handleName] < 0){
                console.log("Handle " + handleName + " loaded incorrectly. "
                            + "Handle does not exist or is not optmized "
                            + "(i.e. You are not using it on the shader)");
                return;
            }
        }
    }
    
    var handles = {}
    var vertexShaderID = vertexShaderID;
    var fragmentShaderID = fragmentShaderID;
    var loaded = false;
    var programID;
}


