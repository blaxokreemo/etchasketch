 // Create a 16x16 grid of square divs
 
    // Identify base container in variable

    let base = document.querySelector(".baseContainer");

    // BUTTONS

    let gridButton = document.querySelector(".newGrid");
    let resetButton = document.querySelector(".reset");

    let bigGrid = document.querySelector(".bigGrid");
    let medGrid = document.querySelector(".medGrid");
    let smallGrid = document.querySelector(".smallGrid");

    let bluBtn = document.querySelector(".blue");
    let ylwBtn = document.querySelector(".yellow");
    let redBtn = document.querySelector(".red");
    let blkBtn = document.querySelector(".black");
    let fsyBtn = document.querySelector(".fantasy");

    const buttons = Array.from(document.querySelectorAll(".btn"));
    buttons.forEach(button => button.addEventListener("mouseover", btnOvr));
    buttons.forEach(button => button.addEventListener("mouseout", btnOut));

    resetButton.addEventListener("click", () => {newGrid(currentGrid, currentPen)});
    gridButton.addEventListener("click", () => {newGrid(prompt("How many boxes per side?"), currentPen)});
    bigGrid.addEventListener("click", () => {currentSize = 900; newGrid(currentGrid, currentPen)});
    medGrid.addEventListener("click", () => {currentSize = 680; newGrid(currentGrid, currentPen)});
    smallGrid.addEventListener("click", () => {currentSize = 420; newGrid(currentGrid, currentPen)});

    const penButtons = Array.from(document.querySelectorAll(".pen"));
    penButtons.forEach(button => button.addEventListener("click", changePen));
    penButtons.forEach(button => button.addEventListener("click", () => {newGrid(currentGrid, currentPen)}));
    
    // STARTING GRID SIZE

    let currentGrid = 16;
    let currentSize = 680;
    let currentHue = "0";
    let currentSat = "0%";
    let currentPen = hoverChoice;

    drawGrid(currentGrid, currentPen);

    // FUNCTIONS

    // BUTTON-STYLE

    function btnOvr(e) {
        e.target.classList.add("btn-ovr");
    }

    function btnOut(e) {
        e.target.classList.remove("btn-ovr");
    }

    // COLORING

    function changePen(e) {
        if (e.target.classList.contains("fantasy")) {
            currentPen = hoverFantasy;
            return hoverFantasy;
        } else {
            currentPen = hoverChoice;
            currentHue = e.target.getAttribute("data-hue");
            currentSat = e.target.getAttribute("data-sat");
            return hoverChoice;
        }

    }

    function hoverChoice(e) {
        if (e.target.getAttribute("data-lt") == "95") {
            e.target.style["background"] = `hsl(${currentHue}, ${currentSat}, 95%)`;
            e.target.setAttribute("data-lt", "90");
        } else if (e.target.getAttribute("data-lt") =="50") {
            return;
        } else {
            let lightness = e.target.getAttribute("data-lt");
            e.target.style["background"] = `hsl(${currentHue}, ${currentSat}, ${lightness}%)`;
            lightness = Number(lightness);
            lightness = lightness - 5;
            e.target.setAttribute("data-lt", `${lightness}`)
        }

    }

    function hoverFantasy(e) {
        if (e.target.getAttribute("data-lt") == "95") {
            let hue = randHue();
            let sat = randSat();
            e.target.style["background"] = `hsl(${hue}, ${sat}%, 95%)`;
            e.target.setAttribute("data-lt", "90");
            e.target.setAttribute("data-hue", `${hue}`);
            e.target.setAttribute("data-sat", `${sat}`);
        } else if (e.target.getAttribute("data-lt") == "0") {
            return;
        } else {
            let hue = e.target.getAttribute("data-hue");
            let sat = e.target.getAttribute("data-sat");
            let lightness = e.target.getAttribute("data-lt");

            e.target.style["background"] = `hsl(${hue}, ${sat}%, ${lightness}%)`;

            lightness = Number(lightness);
            lightness = lightness - 10;
            e.target.setAttribute("data-lt", `${lightness}`)
        }
    }

    function randHue() {
        return Math.floor(Math.random() * 360);
    }

    function randSat() {
        return Math.floor(Math.random() * 100);
    }
    
    // GRID

    function newGrid(dim, pen) {
        base.removeChild(document.querySelector(".grid"));
        if (dim > 100) {
            alert("Maximum size is 100! Drawing 100x100 grid");
            drawGrid(100);
            currentGrid = 100;
        } else {
        drawGrid(dim, pen);
        currentGrid = dim;
        }
    }

    function drawGrid(dim, pen) {

        let grid = document.createElement('div');
        grid.classList.add("grid");
        grid.style["width"] = `${currentSize}px`;
        grid.style["height"] = `${currentSize}px`;
        base.appendChild(grid);
        
         // Create for loop for 16 div rows
        
        for (let row = 1; row <= dim; row++) {

            // Create one div row
    
            newRow = document.createElement('div');
    
            // Add class of "row"
    
            newRow.classList.add("row");
    
            // Add class of "r[row number]"
    
            newRow.classList.add(`r${row}`);
    
            // Append div to baseContainer
    
            grid.appendChild(newRow);
    
            // Create for loop for 16 div columns in each row
    
            for (let column = 1; column <= dim; column++) {
    
                // Create one div column
    
                newCol = document.createElement('div');
    
                // Add class of col
    
                newCol.classList.add("col");
    
                // Add class of "c[column number]"
    
                newCol.classList.add(`c${column}`);
    
                // Add unique grid ID
    
                newCol.setAttribute("id", `${row}-${column}`);

                // Create color attributes

                newCol.setAttribute("data-lt", "95")
                newCol.setAttribute("data-hue", "none")
                newCol.setAttribute("data-sat", "none")
    
                // Append div to row
    
                newCol.addEventListener('mouseover', pen);
                /* newCol.addEventListener('mouseout', unHoverColor);*/
    
                newRow.appendChild(newCol);
    
            }
    
        }
    }