var btns = ["C", " ", " ", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="];

// ------ set up class (parent) to store everything
class Element {
    constructor(elementType, className, id) {
        this.element = document.createElement(elementType);
        this.element.className = className;
        this.element.id = id;
    };
    // 
}
// ------ create buttons with text
class Button extends Element {
    constructor(txt, id) {
        super("button", "btn", id);
        this.element.textContent = txt;
    }
}

// ------- create grid/display
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
    var calculatorRow = new Element("div", "row d-flex pt-5 mt-5", "calculatorRow");
    var calculatorCol = new Element("div", "col-12 p-3 text-white bg-secondary border border-dark", "calculatorCol");
    var displayRow = new Element("div", "row d-flex p-4", "displayRow");
    var displayCol = new Element("div", "col-12 bg-warning m-1 float-center p-5", "displayCol");
    displayRow.element.appendChild(displayCol.element);
    calculatorCol.element.appendChild(displayRow.element);
    // --- set up grid in secondCol

    var k = 0;
    for (var i = 0; i < 5; i++) {
        var gridRows = new Element("div", "row d-flex ", "gridRows");
        for (var j = 0; j < 4; j++) {
            var gridCols = new Element("button", "col p-1 m-2  text-center border border-dark bg-light", `gridCols${k}`);
            var btn = new Button(btns[k], `btns${k}`);
            // --- btn needs an event listener for click
            // btn.addEventListener('click', clickButton);
            // btn.element.addEventListener('click', updateDisplay);
            gridCols.element.appendChild(btn.element);
            gridRows.element.appendChild(gridCols.element);
            k++;
        }
        calculatorCol.element.appendChild(gridRows.element);

    }
    //--- append display row & col 
    nextCol.element.appendChild(calculatorRow.element);
    calculatorRow.element.appendChild(calculatorCol.element);
    // --- append 1st row to container
    container.element.appendChild(firstRow.element);
    app.appendChild(container.element);
    firstRow.element.appendChild(secondCol.element);
    var thirdCol = new Element("div", "col-lg-4", "col3");
    firstRow.element.appendChild(thirdCol.element);
}
// ---------CONTROLLER functions, etc

// class Controller(e) {
//     constructor()
//     this.element = document.getElementById;
//     this.text = element.textContent;
//     this.Model = m;

// }

// --------- eventListener function for gridCols/updateDisplay
// function updateDisplay(e) {
//     btn.element.textContent = e.target.element.textContent;
// }




// ----------> function to send error message to displayCol
// ----------> function to start calculator

// -----------> MODEL functions, etc
// class Model() {
//     constructor()
//     this.View = v;
//     this.Controller = c;
// }

 // ---------> var for input values 0, 1, 2
// var inputArray = ["null", "null", "null"]; 


    // ----------->doMath function(s)

    // ----------->function to limit .'s

    // ----------->function to create error message fo /0


// ------ call functions
createGrid();

