class NodeCoord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `cell-${x}-${y}`
    }
}

var grid = document.getElementById("grid");

var nodes = [];

class Stack {

    constructor() {
        this.arr = [];
    }

    add(x) {
        this.arr.push(x);
    }

    contains_state(state) {
        // return any(node.state == state for node in self.frontier)
        for (let i=0; i<this.arr.length; i++) {
            if (this.arr[i] == state) {
                return true
            }
        }
        return false
    }

    empty() {
        return (this.frontier == 0)
    }

    remove() {
        var lastVal = this.arr[-1];
        this.arr.splice(-1,1);
        return lastVal
    }
}

class Set {
    constructor() {
        self.arr = []
    }

    add(x) {
        if (!self.arr.includes(x)) {
            self.arr.push(x);
        }
    }
}


function randomNum() {
    return Math.floor((Math.random() * 19) + 1);
}

function clearGrid() {
    for(let i=0; i<20; i++) {
        for (let j=0; j<38; j++) {
            document.getElementById(`cell-${i}-${j}`).setAttribute("style", "background-color: white");
        }
    }
}

function setTarget(coord) {
    target = coord;
    clearGrid();
    document.getElementById(coord).setAttribute("style", "background-color: green");
}

function setStart(coord) {
    start = coord
    document.getElementById(coord).setAttribute("style", )
}

function DFS(start, target) {
    // frontier contains with the inital states
    var frontier = new Stack();

}

// first loop create row
for (let i = 0; i < 20; i++) {

    var row = document.createElement("tr");
    row.setAttribute("id", "row-" + i);
    grid.appendChild(row);

    for (let j = 0; j < 38; j++) {
        // create cell
        var cell = document.createElement("td");
        var node = new NodeCoord(i, j);
        nodes.push(node);
        cell.setAttribute("id", node.id);
        // cell.setAttribute("onclick", `setTarget('${"cell-" + i + "-" + j}')`);
        document.getElementById("row-" + i).appendChild(cell);
    }
}

var target = new NodeCoord(randomNum(), randomNum());
document.getElementById(target.id).setAttribute("style", "background-color: green");
var start = new NodeCoord(randomNum(), randomNum());
document.getElementById(start.id).setAttribute("style", "background-color: red");
// console.log(nodes)
