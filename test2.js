
const celsiusInput = document.getElementById('celsiusInput') 
function fahrenheitConvertment() {
    let fahrenheitOutput = celsiusInput.value  * 1.8 + 32 ; 
   document.getElementById('output').textContent =  "Fahrenheit: " + fahrenheitOutput ; 
}
const fahrenheitItput = document.getElementById('fahrenheitInput')
function celsiusConvertment() {
let celsiusOutput = ( fahrenheitItput.value - 32 ) / 1.8 ;
    document.getElementById('celsiusOutput').textContent =
    "Celsius: " +  celsiusOutput ; 
}
