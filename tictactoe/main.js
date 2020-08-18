// we start with an empty ('e') board
let board = [ ['e', 'e', 'e'], ['e', 'e', 'e'], ['e', 'e', 'e']];
// first player to play is 'x'
let player = 'X';

// parameters for drawing
let base = 100;
let d = 200;
let dim = 75;

function setup() {
    createCanvas(700,700);
    textSize(50);
}

function draw() {
    background(191);
    draw_board();
    check_mouse();
}

function draw_board() {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (board[i][j] == 'e') {
                draw_empty(i, j);
            }
            else {
                draw_piece(i, j, board[i][j]);
            }
        }
    }
}

function draw_empty(i, j) {
    fill(255);
    circle(base+d*i, base+d*j, dim);
}

function draw_piece(i, j, play) {
    fill(255);
    circle(base+d*i, base+d*j, dim);
    fill(0);
    textAlign(CENTER);
    text(play, base+d*i, base+d*j+20);
}

function check_mouse() {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            var up = base + d * j + dim/2;
            var down = base + d * j - dim/2;
            var left = base + d * i - dim/2;
            var right = base + d * i + dim/2;
            if (board[i][j] == 'e' && mouseX > left && mouseX < right&& mouseY > down && mouseY < up && mouseIsPressed) {
                board[i][j] = player;
                change_player();
            }
        }
    }
}

function change_player() {
    if (player == 'X') player = 'O';
    else player = 'X';
}
