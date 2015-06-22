var gl;

var renderEngine = {
 
    initGL: function() {
        // setup canvas and intialize gl
        var canvas = document.getElementById("canvas");
        try {
            gl = canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        } catch (e) {
            alert("Error with getContext");
        }
        if (!gl) {
            alert("Could not initialize WebGL");
        }
    },
    
    initShaders: function() {
        //setup shaders
        shader = new ShaderProgram("shader-vs", "shader-fs");
        shader.load();
        gl.useProgram(shader.getProgramID());
    
        shader.loadHandle("aVertexPosition", "attribute");
        shader.loadHandle("aVertexColor", "attribute");
        shader.loadHandle("uPMatrix", "uniform");
        shader.loadHandle("uVMatrix", "uniform");
        shader.loadHandle("uMMatrix", "uniform");

        gl.enableVertexAttribArray(shader.getHandle("aVertexPosition"));
        gl.enableVertexAttribArray(shader.getHandle("aVertexColor"));    
    },
    
    setup: function() {
    
        // initGL
        this.initGL();
        
        // initialize Shaders
        this.initShaders();
        
        // init Buffers
    },    
    
    render: function() {
        // glClearColor(black);
        // wipe other buffers
        
        // loop {
        // element-> setupEnvironment
        // element-> renderPass
        // element-> tearDownEnvironment
        // }
    },
    
    addRenderElement: function() {
        // renderElement.setup()
        // renderElement.loadShader()
        // renderElements.push(renderElement)
        // possibly add priority
    },
    
    removeRenderElement: function() { 
    // renderElements[renderElement] = null
        //
        
        
    }
};
