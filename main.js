// create grid/display

// set up class (parent) to store everything
class Element {
    constructor(elementType, className, id) {
        this.element = document.createElement(elementType);
        this.element.className = className;
        this.element.id = id;
    };
}

function createGrid() {
    // const app = document.getElementById("app");
    var container = new Element("div", "container", "app");
    var firstRow = new Element("div", "row", "row1");
    var firstCol = new Element("div", "col-lg-4", "col1");
    firstRow.element.appendChild(firstCol.element);

    var secondCol = new Element("div", "col-lg-4 pt-5 border border-dark", "col2");
    var displayRow = new Element("div", "row", "displayRow");
    var displayCol = new Element("div", "col-4", "displayCol");
    // set up grid in secondCol


    var count = 0;
    for (var i = 0; i < 5; i++) {
        var gridRows = new Element("div", "row", "gridRows");
        for (var j = 0; j < 4; j++) {
            var gridCols = new Element("div", "col-1 pt-5 text-center border border-dark bg-primary", `gridCols${count}`) 
            // col.setAttribute('id', count);
            // set up click event for squares
            // col.addEventListener('click', clickSquare);

            gridRows.element.appendChild(gridCols.element);
         count++;
        }
        displayCol.element.appendChild(gridRows.element);

    }

    //append display row & col 
    secondCol.element.appendChild(displayRow.element);
    displayRow.element.appendChild(displayCol.element);
    // append 1st row to container
    container.element.appendChild(firstRow.element);
    app.appendChild(container.element);
    firstRow.element.appendChild(secondCol.element);


    var thirdCol = new Element("div", "col-lg-4", "col3");
    firstRow.element.appendChild(thirdCol.element);
}
createGrid();