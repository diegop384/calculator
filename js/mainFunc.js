const formulaScreen = document.getElementById('seeFormula')
const output = document.getElementById('output')
let formula = 0
class button{
        constructor(val){
            this.button = document.getElementById(val);
            this.button.addEventListener('click', this.showVal)
        }
        showVal() {
            
        }
    }

    class buttonDel extends button{
        showVal(){
            formulaScreen.innerHTML = '';
            output.innerHTML = '0'
        }
    }

    class buttonNum extends button{
        showVal(){
            let isFullSpace = formulaScreen.innerText.length > 35;
            let digitBefore = isNaN(parseInt(formulaScreen.textContent));
            if(isFullSpace) console.error('hey');
            else if(digitBefore) formulaScreen.innerHTML = this.value;
            else formulaScreen.innerHTML = formulaScreen.textContent + this.value;
        }

    }

    class buttonFunc extends button{
        showVal(){
            formula = formulaScreen.textContent;
            console.log(formula);
            let isFullSpace = formulaScreen.innerText.length > 35;
            if(isFullSpace) console.error('hey')
            else formulaScreen.innerHTML = this.value
            formula += formulaScreen.textContent;
            console.log(formula);
        }
    }
    
    class buttonEqual extends button{
        showVal(){
            formula += formulaScreen.textContent;
            output.innerHTML = eval(formula) % 1 === 0 ? eval(formula):  eval(formula).toFixed(6)
            formulaScreen.textContent = ''
        }
    }

    class changeSymbol extends button{
        showVal(){
            if(formulaScreen.innerHTML.includes('-')) formulaScreen.innerHTML = formulaScreen.innerHTML.replace('-', '')
            else formulaScreen.innerHTML = '-' + formulaScreen.innerHTML
        }
    }




    const change =new changeSymbol('negativeSwitch');
    const del =new buttonDel('deleteComplete');
    const sum =new buttonFunc('sum');
    const substraction =new buttonFunc('substraction');
    const multiplication =new buttonFunc('multiplication');
    const division =new buttonFunc('division');
    const percent =new buttonFunc('percent');
    const equalButton =new buttonEqual('equalButton');
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



