var roomList = ["R0010930.JPG", "R0010931.JPG", "R0010934.JPG", "R0010937.JPG", "R0010938.JPG", "R0010939.JPG", "R0010942.JPG", "R0010944.JPG", "R0010948.JPG", "R0010949.JPG", "R0010950.JPG", "R0010952.JPG", "R0010954.JPG", "R0010958.JPG", "R0010961.JPG", "R0010965.JPG", "R0010968.JPG", "videos/R0010933_er.MP4", "videos/R0010947_er.MP4", "videos/R0010959_er.MP4", "videos/R0010960_er.MP4", "videos/R0010970_er.MP4"]
var startingRoomIndex = 0

markerLocations = {
    "left": {
        "x": -5,
        "y": 0,
        "z": -5
    },
    "right": {
        "x": 5,
        "y": 0,
        "z": 5
    }
}

$(function () {
    loadSphere(startingRoomIndex);
});

function leftPad(num) {
    return ("0" + num).slice(-2)
}

function loopList(n) {
    return (n + roomList.length) % roomList.length;
}

function loadSphere(roomIndex) {

    $('.marker').remove();
    $('.preview').remove();

    var skySrc = "media/" + roomList[roomIndex]

    if (skySrc.toLowerCase().indexOf(".mp4") != -1) {
        $("#myvideo").attr("src", skySrc);
        skySrc = "#myvideo"
        $("#myvideo").stop();
    } else {
        $("#myvideo").attr("src", "");
    }
    $("#sky1").attr("src", skySrc);


    prevIndex = loopList(roomIndex - 1);
    nextIndex = loopList(roomIndex + 1);


    makeMarker(prevIndex, "left");
    makeMarker(nextIndex, "right");

    $(".marker").on("click", function (evt) {
        loadSphere($(evt.target).data("num"));
    })


    function makeMarker(mkrIndex, direction) {

        var marker = document.createElement('a-image');

        marker.setAttribute('position', {
            x: markerLocations[direction].x,
            y: markerLocations[direction].y,
            z: markerLocations[direction].z
        });

        marker.setAttribute('rotation', {
            x: 0,
            y: 0,
            z: 0
        });
        marker.setAttribute('src', "icon.png")
        marker.setAttribute("cursor-listener")
        marker.setAttribute("id", "marker")
        marker.setAttribute('data-num', mkrIndex);
        marker.setAttribute("class", "marker")


        $("a-scene").prepend(marker)

    }

}
