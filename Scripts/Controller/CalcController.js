class CalcController {

    constructor() {

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        
        this._currentDate;
        this.initialize();
        

    }

    // metodo para inciar a calculadora
    initialize() {

        //innerHTML manipula o DOM e insere um valor no HTML
        
        

    }

    get displayDateEl() {
        return this._dateEl.innerHTML
    }

    set displayDateEl(value) {
        this._timeEl.innerHTML = value;
    }

    get displayTimeEl() {

        return his._timeEl.innerHTML;
    }

    set displayTimeEl (value) {

        his._timeEl.innerHTML = value;
    } 

    
    
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();    
    }

    set currentDate(value){
        this._currentDate = value;
    }








}