var btns = ["C", " ", " ", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="];

class View {
    constructor(c) {
        this.c = c;
    }
    createGrid() {
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
        var displayCol = new Element("div", "col-12 bg-warning m-1 float-center p-4 display-4", "displayCol");
        displayRow.element.appendChild(displayCol.element);
        calculatorCol.element.appendChild(displayRow.element);
        // --- set up grid in secondCol

        var k = 0;
        for (var i = 0; i < 5; i++) {
            var gridRows = new Element("div", "row d-flex ", "gridRows");
            for (var j = 0; j < 4; j++) {
                var gridCols = new Element("button", "col p-1 m-2  text-center border border-dark bg-light", `gridCols${k}`);
                var btn = new Button(btns[k], `btns${k}`);
                // --- btn event listener 
                btn.element.addEventListener('click', this.c.updateDisplay);
                gridCols.element.appendChild(btn.element);
                gridRows.element.appendChild(gridCols.element);
                k++;
                // console.log(btn[0]);
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

}

class Element {
    constructor(elementType, className, id) {
        this.element = document.createElement(elementType);
        this.element.className = className;
        this.element.id = id;
    };
}
// ------ create buttons with text
class Button extends Element {
    constructor(txt, id) {
        super("button", "btn", id);
        this.element.textContent = txt;
    }
}


// ---------CONTROLLER 

class Controller {
    constructor(m) {
        // this.element = document.getElementById.displayCol;
        // this.text = displayCol.element.textContent;
        this.m = m;
    }


    // --------- eventListener function for gridCols/updateDisplay


    // document.addEventListener("keydown", this.c.handleKeyEvent.bind(this.c));

    updateDisplay() {
        console.log(this);
        // take innerHTML from btns and put it into inputArray
        // var inputArray = 
        // var input = document.getElementById(gridCols).innerHTML;   
        // console.log(input);
        // this.m.inputArray.push

    }
   
    // ?(this.model.inputArray(this.view))
    // this.view.updateDisplay(this.numberResult);


    // takes info from updated array after doMath functions and sends it to Display  in View
    // ?(this.view.updateDisplay(this.number))

    // -------->take info from input Array; send to doMath function; pass result to newArray
    /* function doMath(){ 
        1. take inputArray [0], [1], [2] and put them into a string 
        2. when btns[19] is clicked, or after inputArray has 3 values(?which/both?), doMath()
        3. change array to string: inputArray.join(" ")
        4. return value of string, store in variable: result
        5. put string back to number: Number.parseFloat(result); store in var: numberResult
        6. let newArray = inputArray[0].bind(numberResult)*/

    // }

    // ----------> function to send error message to Display

    // ----------->function to limit .'s
    // function limitDecimal() {
    // remove onclick from btns[18] after clicked: (this.removeEventListener('click', function));
    // after btns[19] clicked, return previous eventListener
    // or make sendError/doMath function not allow more than 1 "."
    // }

    // ----------->function to create error message for /0
    // function sendError() {
    //     if (inputArray == ["", "/", "0"]) {
    //         document.getElementById("displayCol").innerHTML = "ERROR";
    //     }
    // }

    // ------------>function to set Display to 0 when C is clicked
    // function setDisplay() {
    //     document.getElementById("displayCol").innerHTML = "0";
    // }
    // btns[0].onclick = function setDisplay() {
    // }
}

// -----------> MODEL 
class Model {
    constructor() {
        this.v = null;
        this.number = 0;
        this.inputArray = [];
        this.newArray = [];
    }

    setView(v) {
        this.v = v;
    }

}

// ------ set up objects
var m = new Model();
var c = new Controller(m);
var v = new View(c);

m.setView(v);
v.createGrid();



