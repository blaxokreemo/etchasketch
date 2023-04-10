 // Create a 16x16 grid of square divs
 
    // Identify base container in variable

    let base = document.querySelector(".baseContainer");

    // Create for loop for 16 div rows

    for (let row = 1; row <= 16; row++) {

        // Create one div row

        newRow = document.createElement('div');

        // Add class of "row"

        newRow.classList.add("row");

        // Add class of "r[row number]"

        newRow.classList.add(`r${row}`);

        // Append div to baseContainer

        base.appendChild(newRow);

        // Create for loop for 16 div columns in each row

        for (let column = 1; column <= 16; column++) {

            // Create one div column

            newCol = document.createElement('div');

            // Add class of col

            newCol.classList.add("col");

            // Add class of "c[column number]"

            newCol.classList.add(`c${column}`);

            // Add unique grid ID

            newCol.setAttribute("id", `${row}-${column}`);

            // Append div to row

            newRow.appendChild(newCol);

        }

    }

    

    // Create for loop for 16 div columns in each row

    // Each row should be flex - set in styles.css