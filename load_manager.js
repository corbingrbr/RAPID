var LoadManager = {    
    
    loadMesh: function(name, mesh) { 
        mesh.load();
        this.meshes[name] = mesh; 
    },
    
    getMesh: function(name) { return this.meshes[name]; },
    
    loadTexture: function(name, texture) {
        texture.load();
        this.textures[name] = texture; 
    }, 
    
    getTexture: function(name) { return this.textures[name]; },

    setup: function() {
       this.loadMesh("cube", new Cube());
    },

    meshes: new Object(),
    textures: new Object()
};
    
