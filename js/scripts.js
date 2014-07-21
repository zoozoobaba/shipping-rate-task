var locationOne = { regional: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL",
                  "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
                  "MD", "MA", "MI", "MM", "MS", "MO", "MT", "NE", "NV", "NH",
                  "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
                  "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
                };

var parcel = {distance: function() {
                if (this.inputFromLocation === this.inputToLocation) {
                  return "local";
                } else if (locationOne.regional.indexOf(this.inputToLocation) >= 0) {
                  return "regional";
                } else {
                  return "world";
                }
              },
              cost: function() {
                if (this.distance() === "local") {
                  return 4.00;
                } else if (this.distance() === "regional") {
                  return 10.00;
                } else {
                  return 18.00;
                }
              },
              totalCost: function() {
                return (this.cost() * this.inputWeight);
              }
            };

$(document).ready(function() {

  $("form#new-rate").submit(function(event) {
    event.preventDefault();

    var inputFromAddress = $("input#from-address").val();
    var inputToAddress = $("input#to-address").val();

    parcel.inputFromLocation = $("input#from-location").val();
    parcel.inputToLocation = $("input#to-location").val();
    parcel.inputWeight = parseInt($("input#weight").val());

    $(".hide-result").show();
    $("#from-result").text(parcel.inputFromLocation);
    $("#to-result").text(parcel.inputToLocation);
    $("#cost-result").text(parcel.totalCost());




  });
});


