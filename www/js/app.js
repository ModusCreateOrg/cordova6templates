// Cordova app code...

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        navigator.compass.watchHeading(app.onCompassSuccess, app.onCompassError);
    },

    onCompassSuccess: function(heading) {
        $('#compassHeading').html(Math.floor(heading.magneticHeading));
    },

    onCompassError: function(error) {
        $('#compassHeading').html('Error: ' + error.code);
    }
};

app.initialize();