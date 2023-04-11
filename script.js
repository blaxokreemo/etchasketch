 // Create a 16x16 grid of square divs
 
    // Identify base container in variable

    let base = document.querySelector(".baseContainer");

    // BUTTONS

    let gridButton = document.querySelector(".newGrid");
    let resetButton = document.querySelector(".reset");
    let bigGrid = document.querySelector(".bigGrid");
    let medGrid = document.querySelector(".medGrid");
    let smallGrid = document.querySelector(".smallGrid");

    const buttons = Array.from(document.querySelectorAll(".btn"));
    buttons.forEach(button => button.addEventListener("mouseover", btnOvr));
    buttons.forEach(button => button.addEventListener("mouseout", btnOut));

    resetButton.addEventListener("click", () => {newGrid(currentGrid)});
    gridButton.addEventListener("click", () => {newGrid(prompt("How many boxes per side?"))});
    bigGrid.addEventListener("click", () => {currentSize = 900; newGrid(currentGrid)});
    medGrid.addEventListener("click", () => {currentSize = 680; newGrid(currentGrid)});
    smallGrid.addEventListener("click", () => {currentSize = 420; newGrid(currentGrid)});
    
    // STARTING GRID SIZE

    let currentGrid = 16;
    let currentSize = 680;

    drawGrid(currentGrid);

    // FUNCTIONS

    // BUTTON-STYLE

    function btnOvr(e) {
        e.target.classList.add("btn-ovr");
    }

    function btnOut(e) {
        e.target.classList.remove("btn-ovr");
    }

    // COLORING

    function hoverColor(e) {
        if (e.target.getAttribute("data-lt") == "90") {
            let hue = randHue();
            let sat = randSat();
            e.target.style["background"] = `hsl(${hue}, ${sat}%, 90%)`;
            e.target.setAttribute("data-lt", "80");
            e.target.setAttribute("data-hue", `${hue}`);
            e.target.setAttribute("data-sat", `${sat}`);
        } else if (e.target.getAttribute("data-lt") == "0") {
            return;
        } else {
            let hue = e.target.getAttribute("data-hue");
            let sat = e.target.getAttribute("data-sat");
            let lightness = e.target.getAttribute("data-lt");
            lightness = Number(lightness);
            lightness = lightness - 10;
            e.target.setAttribute("data-lt", `${lightness}`)

            e.target.style["background"] = `hsl(${hue}, ${sat}%, ${lightness}%)`;
        }
    }

    function randHue() {
        return Math.floor(Math.random() * 360);
    }

    function randSat() {
        return Math.floor(Math.random() * 100);
    }
    
    // GRID

    function newGrid(dim) {
        base.removeChild(document.querySelector(".grid"));
        if (dim > 100) {
            alert("Maximum size is 100! Drawing 100x100 grid");
            drawGrid(100);
            currentGrid = 100;
        } else {
        drawGrid(dim);
        currentGrid = dim;
        }
    }

    function drawGrid(dim) {

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

                newCol.setAttribute("data-lt", "90")
                newCol.setAttribute("data-hue", "none")
                newCol.setAttribute("data-sat", "none")
    
                // Append div to row
    
                newCol.addEventListener('mouseover', hoverColor);
                /* newCol.addEventListener('mouseout', unHoverColor);*/
    
                newRow.appendChild(newCol);
    
            }
    
        }
    }