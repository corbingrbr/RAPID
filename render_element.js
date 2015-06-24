function renderElement(vertexShaderID, fragmentShaderID) {
    
    // Functions acknowledged here, implemented in extending classes
    this.addObject;
    this.removeObject;
    this.renderPass;
    this.setup;
    this.setupMesh;
    this.setupShader;
    this.setupEnvironment;
    this.tearDownEnvironment;
    this.renderObject;

    var vertexShader = vertexShaderID;
    var fragmentShader = fragmentShaderID;
    var shader;
    var objs = [];
};
