var btns = ["0", " ", " ", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="];

// set up class (parent) to store everything
class Element {
    constructor(elementType, className, id) {
        this.element = document.createElement(elementType);
        this.element.className = className;
        this.element.id = id;
    };
}
// create buttons with text
class Button extends Element {
    constructor(txt, id){
        super("button", "btn", id);
        this.element.textContent = txt;
    }
}

// create grid/display
function createGrid() {
    // const app = document.getElementById("app");
    var container = new Element("div", "container", "app");
    var firstRow = new Element("div", "row  ", "row1");
    var firstCol = new Element("div", "col-lg-4", "col1");
    firstRow.element.appendChild(firstCol.element);

    var secondCol = new Element("div", "col-lg-4 pt-5  mt-5", "col2");
    var row2 = new Element("div", "row", "row2")
    var nextCol = new Element("div", "col-12", "nextCol"); 
    secondCol.element.appendChild(row2.element);
    row2.element.appendChild(nextCol.element);
    var displayRow = new Element("div", "row d-flex pt-5 mt-5", "displayRow");
    var displayCol = new Element("div", "col-12 pt-5 bg-dark", "displayCol");
    // set up grid in secondCol

    var k = 0;
    for (var i = 0; i < 5; i++) {
        var gridRows = new Element("div", "row d-flex h-50", "gridRows");
        for (var j = 0; j < 4; j++) {
            var gridCols = new Element("div", "col-3 pt-1 mw-100 text-center border border-dark bg-secondary", `gridCols${k}`);
            var btn = new Button(btns[k], `btns${k}`);
            // btn needs an event listener for click
            // btns.addEventListener('click', clickSquare);

            // append btn to gridCol
            gridCols.element.appendChild(btn.element);
            gridRows.element.appendChild(gridCols.element);

            k++;
        }
        displayCol.element.appendChild(gridRows.element);

    }
    //append display row & col 
    nextCol.element.appendChild(displayRow.element);
    displayRow.element.appendChild(displayCol.element);
    // append 1st row to container
    container.element.appendChild(firstRow.element);
    app.appendChild(container.element);
    firstRow.element.appendChild(secondCol.element);
    var thirdCol = new Element("div", "col-lg-4", "col3");
    firstRow.element.appendChild(thirdCol.element);
}


// function to label innerHTML on gridCols

// call functions
createGrid();

