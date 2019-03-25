class CalcController {

    constructor() {

        this._operation = [];
        this._displayCalc = document.querySelector("#display");
        this._date = document.querySelector("#data");
        this._time = document.querySelector("#hora");
        this._locale = "pt-BR";
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

   
    initialize() {

        this.setDisplayDateTime();

        setInterval(() => { // função executada em um intervalo de tempo, marcada em milesegundos

            this.setDisplayDateTime();

        }, 1000);


    }
    
    addEventListenerAll(element, events, fn) {
        //metodo usado para tratar mais de um evento
        events.split(" ").forEach(event => {

            element.addEventListener(event, fn, false);
        })

    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    clearAll(){
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    setError() {

        this.displayCalc = "ERROR";
    }

    addOperation(value){

        this._operation.push(value);

        console.log(this._operation);

    }

    execBtn(value) {


        switch (value) {

            case "ac":

                this.clearAll();

            break;

            case "ce":

                clearEntry();

            break;

            case "soma":


            break;

            case "subtracao":


            break;

            case "divisao":


            break;

            case "multiplicaçao":


            break;

            case "porcento":


            break;

            case "igual":


            break;

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
               this.addOperation(parseInt(value));
            break;


            default:

                this.setError();

            break;

        }
    }
    
    initButtonsEvents() {
        //metodo para iniciar os btn
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(btn => {

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })


        })
    }

    get displayDate() {
        return this._date.innerHTML
    }

    set displayDate(value) {
        this._date.innerHTML = value;
    }

    get displayTime() {

        return this._time.innerHTML;
    }

    set displayTime(value) {

        this._time.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalc.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}