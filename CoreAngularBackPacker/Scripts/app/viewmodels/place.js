System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Place;
    return {
        setters:[],
        execute: function() {
            Place = (function () {
                function Place(Id, Name, Location) {
                    this.Id = Id;
                    this.Name = Name;
                    this.Location = Location;
                }
                return Place;
            }());
            exports_1("Place", Place);
        }
    }
});
