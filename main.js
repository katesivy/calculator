// create grid/display

// set up class (parent) to store everything
class Element {
    constructor(elementType, name, id) {
        this.element = document.createElement(elementType),
            this.name = name,
            this.id = id
    };
}

function createGrid() {
    // use child class to set up rows/cols and calculator
    var container = new Element("div", "container", "app");
    var firstRow = new Element("div", "row", "row");
    var firstCol = new Element("div", "col", "col-lg-4 col-sm-2");
    firstRow.appendChild(firstCol);
    var secondCol = new Element("div", "col", "col-lg-4 col-sm-2 border-dark");

    // set up grid in secondCol
    var count = 0;

    for (var i = 0; i < 6; i++) {
        var row = document.createElement("div");
        row.setAttribute('id', 'row' + i);
        row.className = "row";
        for (var j = 0; j < 4; j++) {
            var col = document.createElement("div");
            col.setAttribute('id', count);
            // set up click event for squares
            // col.addEventListener('click', clickSquare);
            col.className = "col-1  text-center px-lg-5 mx-sm-1 p-2 border border-dark bg-primary";
            row.appendChild(col);
            count++;
        }

        secondCol.appendChild(row);
    }
    firstRow.appendChild(secondCol);
    container.appendChild(firstRow);
    app.appendChild(container);

    var thirdCol = new Element("div", "col", "col-lg-4 col-sm-2");
    firstRow.appendChild(thirdCol);
}