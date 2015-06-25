var Scene = {


    addObject: function(name, object, element) {
        this.objects[name] = object;
        RenderEngine.renderElements[element].addObject(object);
    },

    removeObject: function(name) {
        delete this.objects[name];
    },
    
    update: function() {
        for (var i in this.objects) {
            this.objects[i].update();
        };
    },

    setup: function() {
        this.cam = new Camera([0,0,0], [0,0,-5], [0,1,0]);
        this.cam.setProjectionMatrix(mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, null));


        this.addObject("box", new Box([2.0,0.0,-16.0], "crate"), "texture");
        this.addObject("box1", new Box([-2.0, 0.0, -16.0], ""), "regular");
   },
        
    objects: new Object(),
    cam: new Object()     
};
