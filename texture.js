function Texture(_src) {
    
    this.load = function() {
    }
    
    this.getTex = function() {
        return tex;
    }
    
    // If running local and using google chrome
    // http://stackoverflow.com/questions/8456538/origin-null-is-not-allowed-by-access-control-allow-origin
    // python -m SimpleHTTPServer8000
    // http://localhost:8000/index.html

    var tex = gl.createTexture(); 
    tex.image = new Image();
    tex.image.src = "images/" + _src;
    
    tex.image.onload = function() { 
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
    };
}

