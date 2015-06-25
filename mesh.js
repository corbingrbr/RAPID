function Mesh () {
  
    this.getPositionBuffer = function() { return positionBuffer; };
    this.getNormalBuffer = function() { return normalBuffer; }; 
    this.getColorBuffer = function() { return colorBuffer; }; 
    this.getIndexBuffer = function() { return indexBuffer; };
    this.getTexCoordBuffer = function() { return texCoordBuffer; };
    this.getVertices = function() { return vertices; };
    this.getNormals = function() { return normals; };
    this.getIndices = function() { return indices; };
    this.getColors = function() { return colors; };
    this.getTexCoords = function() { return texCoordBuffer; };
    this.load;

    var positions;
    var normals;
    var indices;
    var colors;
    var texCoords;

    var positionBuffer;
    var normalBuffer;
    var indexBuffer;
    var colorBuffer;
    var texCoordBuffer;
}


