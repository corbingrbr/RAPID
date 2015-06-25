function Cube() {
    
    Cube.prototype = new Mesh();

    this.load = function() {
        positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        
        colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        
        indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);                       
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        texCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);
    }        
    
    this.getIndices = function() { return indices; };
    this.getPositions = function() { return positions; };
    this.getTexCoords = function() { return texCoords; };
    
    this.getPositionBuffer = function() { return positionBuffer; };
    this.getColorBuffer = function() { return colorBuffer; };
    this.getIndexBuffer = function() { return indexBuffer; };
    this.getTexCoordBuffer = function() { return texCoordBuffer; };

    this.getName = function() { return name; };
   
    var name = "cube";
    var positionBuffer;
    var normalBuffer;
    var indexBuffer;
    var colorBuffer;
    var texCoordBuffer;

    var positions = [
            // Front face
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             1.0,  1.0,  1.0,
            -1.0,  1.0,  1.0,

            // Back face
            -1.0, -1.0, -1.0,
            -1.0,  1.0, -1.0,
             1.0,  1.0, -1.0,
             1.0, -1.0, -1.0,

            // Top face
            -1.0,  1.0, -1.0,
            -1.0,  1.0,  1.0,
             1.0,  1.0,  1.0,
             1.0,  1.0, -1.0,

            // Bottom face
            -1.0, -1.0, -1.0,
             1.0, -1.0, -1.0,
             1.0, -1.0,  1.0,
            -1.0, -1.0,  1.0,

            // Right face
             1.0, -1.0, -1.0,
             1.0,  1.0, -1.0,
             1.0,  1.0,  1.0,
             1.0, -1.0,  1.0,

            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0,  1.0,
            -1.0,  1.0,  1.0,
            -1.0,  1.0, -1.0
        ];

    var indices = [
        0, 1, 2,    // Front face    
        0, 2, 3,  
        4, 5, 6,    // Back face  
        4, 6, 7,    
        8, 9, 10,   // Top face  
        8, 10, 11,  
        12, 13, 14, // Bottom face  
        12, 14, 15, 
        16, 17, 18, // Right face  
        16, 18, 19, 
        20, 21, 22, // Left face  
        20, 22, 23  
    ];

    var colors = [
        1.0, 0.0, 0.0, 1.0, // Front face
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 1.0, 0.0, 1.0, // Back face
        1.0, 1.0, 0.0, 1.0, 
        1.0, 1.0, 0.0, 1.0, 
        1.0, 1.0, 0.0, 1.0, 
        0.0, 1.0, 0.0, 1.0, // Top face
        0.0, 1.0, 0.0, 1.0, 
        0.0, 1.0, 0.0, 1.0, 
        0.0, 1.0, 0.0, 1.0, 
        1.0, 0.5, 0.5, 1.0, // Bottom face
        1.0, 0.5, 0.5, 1.0, 
        1.0, 0.5, 0.5, 1.0, 
        1.0, 0.5, 0.5, 1.0, 
        1.0, 0.0, 1.0, 1.0, // Right face
        1.0, 0.0, 1.0, 1.0, 
        1.0, 0.0, 1.0, 1.0, 
        1.0, 0.0, 1.0, 1.0, 
        0.0, 0.0, 1.0, 1.0,  // Left face
        0.0, 0.0, 1.0, 1.0, 
        0.0, 0.0, 1.0, 1.0, 
        0.0, 0.0, 1.0, 1.0 
    ];
    
    var texCoords = [
        // Front face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        
        // Back face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        
        // Top face
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        
        // Bottom face
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        
        // Right face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        
        // Left face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];
}
