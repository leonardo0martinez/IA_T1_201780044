
function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location.row == 0 && location.col < 3) return "RIGHT";
    else if (location.row == 1 && location.col > 0) return "LEFT";
    else if (location.row == 0 && location.col == 3) return "DOWN";
    else if (location.row == 1 && location.col == 0) return "UP";
}

function test(states) {
    let location = states.location;
    let state = states.grid[location.row][location.col];
    let action_result = reflex_agent(location, state);

    // IMPRIMIR EN PANTALLA
    document.getElementById("log").innerHTML += "<br>Location: ("
        .concat(location.row).concat(", ").concat(location.col)
        .concat(") | Action: ").concat(action_result);

    if (action_result == "CLEAN") {
        states.grid[location.row][location.col] = "CLEAN";
    } else if (action_result == "RIGHT") {
        states.location.col += 1;
    } else if (action_result == "LEFT") {
        states.location.col -= 1;
    } else if (action_result == "DOWN") {
        states.location.row += 1;
    } else if (action_result == "UP") {
        states.location.row -= 1;
    }

    setTimeout(function () { test(states); }, 2000);
}

let states = {
    location: { row: 0, col: 0 },
    grid: [
        ["DIRTY", "DIRTY", "DIRTY", "CLEAN"], // Row 1
        ["DIRTY", "DIRTY", "DIRTY", "DIRTY"]  // Row 2
    ]
};

test(states);
