class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        return `(${this.x}, ${this.y})`;
    }

    equals(p) {
        return this.x === p.x && this.y === p.y;
    }

    distanceTo(otherPoint) {
        return Math.sqrt(Math.pow(this.x - otherPoint.x, 2) + Math.pow(this.y - otherPoint.y, 2));
    }
}

// 1
function containsPoint(pointsArray, x, y) {
    for (const point of pointsArray) {
        if (point.equals(new Point(x, y))) {
            return true;
        }
    }
    return false;
}

const pointsArray1 = [
    new Point(1, 2),
    new Point(3, 4),
    new Point(5, 6)
];
const x1 = 3, y1 = 4;
const x2 = 7, y2 = 8;

// 2
function containsPointObject(pointsArray, targetPoint) {
    for (const point of pointsArray) {
        if (point.equals(targetPoint)) {
            return true;
        }
    }
    return false;
}

const pointsArray2 = [
    new Point(1, 2),
    new Point(3, 4),
    new Point(5, 6)
];

const targetPoint1 = new Point(3, 4);
const targetPoint2 = new Point(7, 8);

// 3
function calculatePathLength(pointsArray) {
    let totalDistance = 0;

    for (let i = 0; i < pointsArray.length - 1; i++) {
        totalDistance += pointsArray[i].distanceTo(pointsArray[i + 1]);
    }

    return totalDistance;
}

// Function to generate HTML for Q2 and Q3 path details
function displayPath(pointsArray, totalDistance) {
    let html = "<h1>Path Details</h1>";
    html += "<h2>Point Checks</h2>";
    html += "<h2>Q2 Examples:</h2>"
    html += `<p>Does the array contain the point (${x1}, ${y1})? ${containsPoint(pointsArray1, x1, y1)}</p>`;
    html += `<p>Does the array contain the point (${x2}, ${y2})? ${containsPoint(pointsArray1, x2, y2)}</p>`;
    html += "<h2>Q3 Examples:</h2>"
    html += `<p>Does the array contain the point object (3, 4)? ${containsPointObject(pointsArray2, targetPoint1)}</p>`;
    html += `<p>Does the array contain the point object (7, 8)? ${containsPointObject(pointsArray2, targetPoint2)}</p>`;

    html += "<h2>Path Points for Q4:</h2>";
    html += "<ul>";
    pointsArray.forEach((point, index) => {
        html += `<li>Point ${index + 1}: (${point.x}, ${point.y})</li>`;
    });
    html += "</ul>";

    html += `<h2>Total Distance: ${totalDistance.toFixed(2)}</h2>`;
    return html;
}


const pointsArray3 = [
    new Point(1, 1),
    new Point(4, 5),
    new Point(9, 7),
    new Point(12, 10)
];

// Calculate total path distance
const totalDistance = calculatePathLength(pointsArray3);

// Generate and inject HTML
const htmlContent = displayPath(pointsArray3, totalDistance);


if (typeof document !== "undefined") {
    document.body.innerHTML = htmlContent;
}
