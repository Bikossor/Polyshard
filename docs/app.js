const POINTS = 4;
const MIN_DISTANCE = 50;
const MAX_DISTANCE = 200;

const TOTAL_ANGLE = 360;
const MAX_ANGLE = TOTAL_ANGLE / POINTS;

const CONTAINER = document.getElementById("polyshard-container");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPoint(_container) {
    return {
        x: getRandomInt(0, _container.clientWidth),
        y: getRandomInt(0, _container.clientHeight)
    };
}

function drawPolygon(_container, _pointX, _pointY) {
    var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    var points = _pointX + "," + _pointY + " ";

    for (let i = 0; i < POINTS - 1; i++) {
        var curAngle = getRandomInt(0, MAX_ANGLE);
        var curDistance = getRandomInt(MIN_DISTANCE, MAX_DISTANCE);

        var curX = curDistance * Math.sin(curAngle);
        var curY = curDistance * Math.cos(curAngle);

        points += ~~(_pointX + curX) + "," + ~~(_pointY + curY) + " ";
    }


    polygon.setAttribute("points", points);

    // polygon.setAttribute("cx", _pointX);
    // polygon.setAttribute("cy", _pointY);
    // polygon.setAttribute("r", 6);

    return polygon;
}

var randomPoint = getRandomPoint(CONTAINER);
CONTAINER.appendChild(drawPolygon(CONTAINER, randomPoint.x, randomPoint.y));