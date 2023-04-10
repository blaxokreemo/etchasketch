 // Create a 16x16 grid of square divs
 
    // Identify base container in variable

    let base = document.querySelector(".baseContainer");
    let gridButton = document.querySelector(".newGrid");
    gridButton.addEventListener("click", () => {newGrid(prompt("How many boxes per side?"))});

    drawGrid(16);

    function hoverColor(e) {
        e.target.style["background"] = "red";
    }

    function unHoverColor(e) {
        e.target.style["background"] = "white";
    }
    
    // Create drawGrid function

    function newGrid(dim) {
        base.removeChild(document.querySelector(".grid"));
        drawGrid(dim);
    }

    function drawGrid(dim) {

        let grid = document.createElement('div');
        grid.classList.add("grid");
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
                newCol.addEventListener('mouseout', unHoverColor);
    
                newRow.appendChild(newCol);
    
            }
    
        }
    }