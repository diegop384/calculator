const formulaScreen = document.getElementById('seeFormula')
class button{
        constructor(val){
            this.button = document.getElementById(val);
            this.button.addEventListener('click', this.showVal)
            document.addEventListener('keydown', this.keyWordFunc);
        }
        showVal() {
            
        }

        keyWordFunc(e){
            let isFullSpace = formulaScreen.innerText.length > 35;
            if(isFullSpace) console.error('hey')
            else formulaScreen.innerHTML += e.key
        }
    }

    class buttonDel extends button{
        showVal(){
            formulaScreen.innerHTML = '';
        }
    }

    class buttonNum extends button{
        showVal(){
            let isFullSpace = formulaScreen.innerText.length > 35;
            if(isFullSpace) console.error('hey')
            else formulaScreen.innerHTML = formulaScreen.textContent + this.value
        }

    }

    class buttonFunc extends button{
        showVal(){
            if(this.isFullSpace) console.error('hey')
            else formulaScreen.innerHTML = this.value
        }
    }





    const del =new buttonDel('deleteComplete');
    const zero =new buttonNum('zero');
    const one =new buttonNum('one');
    const two =new buttonNum('two');
    const three =new buttonNum('three');
    const four =new buttonNum('four');
    const five =new buttonNum('five');
    const six =new buttonNum('six'); 
    const seven =new buttonNum('seven');
    const eight =new buttonNum('eight');
    const nine =new buttonNum('nine');
    const sum =new buttonFunc('sum');


