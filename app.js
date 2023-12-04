// https://www.omnicalculator.com/finance/eoq

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const economicorderquantityRadio = document.getElementById('economicorderquantityRadio');
const yearlydemandRadio = document.getElementById('yearlydemandRadio');
const ordercostRadio = document.getElementById('ordercostRadio');
const yearlycostofholdingRadio = document.getElementById('yearlycostofholdingRadio');

let economicorderquantity;
let yearlydemand = v1;
let ordercost = v2;
let yearlycostofholding = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

economicorderquantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Yearly demand';
  variable2.textContent = 'Order cost';
  variable3.textContent = 'Yearly cost of holding';
  yearlydemand = v1;
  ordercost = v2;
  yearlycostofholding = v3;
  result.textContent = '';
});

yearlydemandRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic order quantity';
  variable2.textContent = 'Order cost';
  variable3.textContent = 'Yearly cost of holding';
  economicorderquantity = v1;
  ordercost = v2;
  yearlycostofholding = v3;
  result.textContent = '';
});

ordercostRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic order quantity';
  variable2.textContent = 'Yearly demand';
  variable3.textContent = 'Yearly cost of holding';
  economicorderquantity = v1;
  yearlydemand = v2;
  yearlycostofholding = v3;
  result.textContent = '';
});

yearlycostofholdingRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic order quantity';
  variable2.textContent = 'Yearly demand';
  variable3.textContent = 'Order cost';
  economicorderquantity = v1;
  yearlydemand = v2;
  ordercost = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(economicorderquantityRadio.checked)
    result.textContent = `Economic order quantity = ${computeeconomicorderquantity().toFixed(2)}`;

  else if(yearlydemandRadio.checked)
    result.textContent = `Yearly demand = ${computeyearlydemand().toFixed(2)}`;

  else if(ordercostRadio.checked)
    result.textContent = `Order cost = ${computeordercost().toFixed(2)}`;

  else if(yearlycostofholdingRadio.checked)
    result.textContent = `Yearly cost of holding = ${computeyearlycostofholding().toFixed(2)}`;
})

// calculation

// economicorderquantity = (2 * yearlydemand * ordercost / yearlycostofholding)^0.5

function computeeconomicorderquantity() {
  return Math.sqrt(2 * Number(yearlydemand.value) * Number(ordercost.value) / Number(yearlycostofholding.value));
}

function computeyearlydemand() {
  return (Math.pow(Number(economicorderquantity.value), 2) * Number(yearlycostofholding.value)) / (2 * Number(ordercost.value));
}

function computeordercost() {
  return (Math.pow(Number(economicorderquantity.value), 2) * Number(yearlycostofholding.value)) / (2 * Number(yearlydemand.value));
}

function computeyearlycostofholding() {
  return (2 * Number(yearlydemand.value) * Number(ordercost.value) / Math.pow(Number(economicorderquantity.value), 2));
}