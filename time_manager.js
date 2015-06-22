var TimeManager = {
    
    getTimeStamp: function() { return new Date().getTime(); },
    setTimeStamp: function() { timeStamp = this.getTimeStamp(); },
    getDeltaTime: function() { return deltaTime; },
    setDeltaTime: function() { deltaTime = this.getTimeStamp() - timeStamp; },
 
    timeStamp: 0.0,
    deltaTime: 0.0
};
