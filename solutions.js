// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level2Solution() {
  if (column >= 8) {
    tile.innerHTML = "WATER";
  } else if (column >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level3Solution() {
  if (column >= 8) {
    tile.innerHTML = "HILLS";
  } else if (column >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level4Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level5Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else if (row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level6Solution() {
  if (row <= 1 || row >= 6) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level7Solution() {
  if (row == 4 && column == 7) {
    //USING &&(AND) PICKS THE SPECIFIC TILE AND NOT ROW BECAUSE OF ITS USE.
    tile.innerHTML = "WATER";
  } else tile.innerHTML = "SAND";
}

function level8Solution() {
  if (column == 2 || row == 5) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (row <= 5 && column <= 5) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level10Solution() {
  if (row <= 7 && column <= 1) {
    tile.innerHTML = "HILLS";
  } else if (row == 7 && column <= 3) {
    tile.innerHTML = "TREE";
  } else if (row == 7 && column <= 7) {
    tile.innerHTML = "SAND";
  } else if (row == 7 && column <= 11) {
    tile.innerHTML = "WATER";
  }
}

function level11Solution() {
  if (row == 3 && column <= 5) {
    tile.innerHTML = "WATER";
  } else if (row == 3 && column <= 11) {
    tile.innerHTML = "HILLS";
  } else if (row == 7 && column <= 5) {
    tile.innerHTML = "SAND";
  } else if (row == 7 && column <= 11) {
    tile.innerHTML = "TREE";
  }
}

function level12Solution() {
  if ((row == 4 && column <= 5) || (row == 7 && column >= 6)) {
    tile.innerHTML = "WATER";
  } else if ((row == 7 && column >= 0) || (row == 4 && column <= 11)) {
    tile.innerHTML = "SAND";
  }
}

function level13Solution() {
  if (
    (row == 7 && column <= 3) ||
    (row == 7 && column <= 11) ||
    (row == 1 && column <= 9) ||
    (row == 6 && column <= 9) ||
    (row == 5 && column <= 3)
  ) {
    tile.innerHTML = "TREE";
  } else if (row == 5 && column <= 9) {
    tile.innerHTML = "SAND";
  }
}

function level14Solution() {
  if (
    column == 0 ||
    column == 1 ||
    column == 5 ||
    column == 6 ||
    column == 11 ||
    row == 0 ||
    row == 6 ||
    row == 7
  ) {
    tile.innerHTML = "SAND";
  } else if (row == 5 && column <= 4) {
    tile.innerHTML = "TREE";
  } else if (row == 5 && column <= 10) {
    tile.innerHTML = "WATER";
  }
}
