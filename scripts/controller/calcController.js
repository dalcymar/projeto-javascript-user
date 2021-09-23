class CalcController {

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents(); 
    }

    // Centralizando a inicialização
    initialize (){

        this.setDisplayDateTime();

        let interval = setInterval(()=> {

            this.setDisplayDateTime();

        }, 1000);
        
    }

    // Método para tratar multiplos eventos
    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

    // Método para tratar possiveis casos
    /*execBtn(value) {

        switch (value) {

            case 'ac':

            break;
        }
    }*/

    // Criando o método para eventos dos botoes
    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn, "click drag", e => {
                
                console.log(btn.className.baseVal.replace("btn-",""));
                //let textBtn = btn.className.baseVal.replace("btn-","");

                //this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";
            })

        });
    }

    // Método
    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
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

    set currentDate(value) {
        this._currentDate = value;
    }

}