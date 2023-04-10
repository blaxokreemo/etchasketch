 // Create a 16x16 grid of square divs
 
    // Identify base container in variable

    let base = document.querySelector(".baseContainer");
    let gridButton = document.querySelector(".newGrid");
    let resetButton = document.querySelector(".reset");
    let bigGrid = document.querySelector(".bigGrid");
    let medGrid = document.querySelector(".medGrid");
    let smallGrid = document.querySelector(".smallGrid");
    resetButton.addEventListener("click", () => {newGrid(currentGrid)});
    gridButton.addEventListener("click", () => {newGrid(prompt("How many boxes per side?"))});
    bigGrid.addEventListener("click", () => {currentSize = 960; newGrid(currentGrid)});
    medGrid.addEventListener("click", () => {currentSize = 680; newGrid(currentGrid)});
    smallGrid.addEventListener("click", () => {currentSize = 420; newGrid(currentGrid)});
    let currentGrid = 16;
    let currentSize = 960;

    drawGrid(currentGrid);

    function hoverColor(e) {
        e.target.style["background"] = "red";
    }
    
    // Create drawGrid function

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
    
                // Append div to row
    
                newCol.addEventListener('mouseover', hoverColor);
                /* newCol.addEventListener('mouseout', unHoverColor);*/
    
                newRow.appendChild(newCol);
    
            }
    
        }
    }