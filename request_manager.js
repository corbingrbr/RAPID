var RequestManager = {

// Constant webpage endpoints
    TO_FEATURES: "http://pipelions.com/rapid/feature/",
    TO_LAYERS: "http://pipelions.com/rapid/layer/",
    TO_GEOVIEWS: "http://pipelions.com/rapid/geoview/",

    geoViews: [],
    layers: [],
    features: []
};

// Gather geoViews then recurses down to feature level: geoViews -> layers -> features
function loadData() {
    //makeRequest(RequestManager.TO_GEOVIEWS, loadGeoView);
 
    for (var i = 0; i < urls.length; i++) {
        makeRequest(RequestManager.TO_FEATURES + urls[i], loadFeature);
    }    
};

// Assigns geoView Objects, gathers layers
function loadGeoView(geoViewText) {
    
    RequestManager.geoViews = JSON.parse(geoViewText);
    
    for (var i = 0; i < RequestManager.geoViews.length; i++) {
        for (var j = 0; j < RequestManager.geoViews[i].layers.length; j++) {
            makeRequest(RequestManager.TO_LAYERS + RequestManager.geoViews[i].layers[j].uid, loadLayer);
        }
    }
};

// Assigns layer objects, gathers features
function loadLayer(layerText) {
    var layer = JSON.parse(layerText);
    RequestManager.layers.push(layer);
    
    for (var k = 0; k < layer.features.length; ++k) {   
        makeRequest(RequestManager.TO_FEATURE + layer.features[k][0], loadFeature);
    }
};

// Assigns features
function loadFeature(featureText) {
    RequestManager.features.push(JSON.parse(featureText));
};    

function makeRequest(address, callback) {
    var request = 
        $.ajax({
        type: "GET",
        async: true,
        dataType : "text",
        url: address,
        beforeSend: function(xhr) {
            xhr.withCredentials = true;
        },
        success: callback,
        error: function(error) {
            console.error(error.statusText);               
        }
    });

    return request;
};

var urls = ["cbWQroiKjuajKW8wZh8JRH",
            "UsqXBTC53JDgxGYo44nD95",
            "gDuaXqndV2jEAnvX5CgvZJ",
            "iVshTiHYLFs7oZsXert5Q9",
            "6PWKYWKUjiDm7wnBJqmNbX",
            "pr3ZyGEQn3YF22wnSVk7ej",
            "HfEtjCVCxMdkjoiifKoc7b",
            "NrSaYaTvCfGKX8F2eVnHY",
            "RhNa7Fn2VMZHT7pxSMjbzN",
            "nPsDvLNrZoYDXjRiCwhN6n",
            "UdVj3bNUWAXS4HQrzHQZU8",
            "ML2kkTwseqdeVnYaf3UVyh",
            "MZqcC9epJVtLsPfawJxYZL",
            "8WBdPZbZhZKotiA78kNQGj",
            "gFEuHr4mNEPb4nqquJFRJk",
            "q6A3BZUiMBz2RUyRT4xtT8",
            "ZQZW2JKCeZzhHq7vUnmAR7",
            "oeH8donhpvnxw6Du7R3pjg",
            "93He6ouuS8VidoPEinpSfN",
            "oPA4SXLc6baGggPJjwBQfd",
            "wttYUht8a2CiR8CP89VrbH",
            "bCeipbUEJ255P7Q9qDoYtW",
            "APWf2dEbLoFKudaeE3tR6T",
            "5SdrWqfrbsc67bCdvt6VsG",
            "KXiEUQGf2pHF7VoBqmonc3",
            "fbTuggLfEu7uiZxaPu2wrQ",
            "zwt4H8oFqxAQZFf9enm2Hb",
            "BMu2ViqCQAXhGDSCTVe8Ab",
            "yzzTbNqackUra93duJXAmk",
            "9eooEJLGKFuGjbV5uem9RB",
            "So3XpygqPWNWJ8r9SxoA2A",
            "TtdDpTnwusL33QCoUxFrAn",
            "pAaGhrSRaftajxrnRJVWWL",
            "yEbisT4XXQds2qUkYrzNn4",
            "WFLBiP9nHwrYWoXaDv6kEC",
            "TUWTBrPA5yfLNb7qDBhcEg",
            "koRhUHuwdZKoGAh8GZgdtA",
            "DJLBZmLsRs2gjRdwYdkTzX",
            "fGgHW5YZiVa7MnUDzXfVHo",
            "JBdz5vvapzBHLBoUTPj6ih",
            "TaJ5FWburLMcJ57ECHBFjJ",
            "ffJ78Lw67w4WhbhDFDiTcZ",
            "DMYuKK8qMqTJALbSEH4bXa",
            "5zzFxVQAsXEYPCqAqvy6zA",
            "iAV2dh4NjxTjxnJ4MLKvkJ",
            "ZumT8zN5dDGMeqxPYYtSFn",
            "JZKzXnXbwkyUCek4wnT3DA",
            "9vgYWTQpFei49kA6hqimyb",
            "xzoC7ZjMDo63BMGpZZGk3G",
            "FcitFvokDfwKZvH6Sxb45g",
            "gxyjZtGiMdX7NtdvcQfa9Y",
            "9ZP5SMvwRjesiZwVZJjYTH",
            "JeFDJXZFdpomyqfDn3DNZf",
            "RMja6nxMUDuvDK6MntQHKf",
            "KgUEx7FNCjZyoAQbi9HzaR",
            "psWETg7jWeG7CqyjaxsqjH",
            "n6q2CGEtUDLiUcndXRgeZa",
            "2ACpzgQGzM2TcuZbtqEgsh",
            "kS4rKzPrGXPHygeyt8UddX"
           ];

$(document).ajaxStop(function() {
    
    var width = 512;
    var height = 512;
    var data = new Uint8Array(width*height*4);

    var maxLat = Number.NEGATIVE_INFINITY; 
    var maxLong = Number.NEGATIVE_INFINITY; 
    var minLat =  Number.POSITIVE_INFINITY; 
    var minLong = Number.POSITIVE_INFINITY; 

    
    //console.log(RequestManager.features[10].geometry.coordinates[0][0].length)
    
    var p = 0;

    for (var i = 0; i < RequestManager.features.length; i++) {
        var coords = RequestManager.features[i].geometry.coordinates[0][0];
        
        if (coords) { 
            for (var j = 0; j < coords.length; j++) {
                if (maxLong < coords[j][0]) { maxLong = coords[j][0]; }
                if (maxLat < coords[j][1]) { maxLat = coords[j][1]; }
                if (minLong > coords[j][0]) { minLong = coords[j][0]; }
                if (minLat > coords[j][1]) { minLat = coords[j][1]; }
            }
        }
    }

    var deltaLat = maxLat - minLat;
    var deltaLong = maxLong - minLong;

    for (var k = 0; k < RequestManager.features.length; k++) {
        var coords = RequestManager.features[k].geometry.coordinates[0][0];
    
        if (coords) {
            for (var z = 0; z < coords.length; z++) {
                var lo = parseFloat(coords[z][0]);
                var la = parseFloat(coords[z][1]);
                
                var X = Math.floor(((lo - minLong) / deltaLat) * (width-1));
                var Y = height - (Math.floor(((la - minLat) / deltaLat) * (height-1)));
              
                console.log(X + ", " + Y);                
              
                data[X*4 + Y*height*4] = 0xff;
                data[X*4 + Y*height*4+1] = 0xff;
                data[X*4 + Y*height*4+2] = 0xff;
            }
        }
    }         

    for ( var g = 0; g < width * height; g++) {
        data[g * 4 + 3] = 230;
    }
    
    var tex = gl.createTexture();
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D,
                  0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);

    AssetManager.textures["geo"] = tex;
});
