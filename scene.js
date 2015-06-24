var Scene = {


    addObject: function(name, object) {
        this.objects[name] = object;
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

        var b = new Box([0.0,0.0,-8.0]);
        this.addObject("box", b);
        RenderEngine.renderElements["regular"].addObject(b);    
    },
        

    objects: new Object(),
    cam: new Object()     
};
