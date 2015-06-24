function Mesh () {
  
    this.getVertexPositionBuffer = function() { return positionBuffer; };
    this.getVertexNormalBuffer = function() { return normalBuffer; }; 
    this.getVertexColorBuffer = function() { return colorBuffer; }; 
    this.getVertexIndexBuffer = function() { return indexBuffer; }; 
    this.getVertices = function() { return vertices; };
    this.getNormals = function() { return normals; };
    this.getIndices = function() { return indices; };
    this.getColors = function() { return colors; };
    this.load;

    var positions;
    var normals;
    var indices;
    var colors;

    var positionBuffer;
    var normalBuffer;
    var indexBuffer;
    var colorBuffer;
}


