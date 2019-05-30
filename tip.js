// Tip-calculator
// Test 0, -2, 2

const tipObject = {
  subtotal: 0,
  tip: 0,
  tipCalc: function() {
    let totalWTip = this.subtotal + (this.subtotal * (this.tip / 100));
    return totalWTip.toFixed(2);
  }
};

// Event delegator

document.addEventListener('click', (event) => {
  event.preventDefault();
  const { value, id, tagName } = event.target;
  const subtotal = document.getElementById('subtotal').value;
  let tipEntry = document.getElementById('customTip');
  if(tagName === 'SELECT' || tagName === 'OPTION') {
    if(value === 'customSelected') {
      tipEntry.disabled = false;
    } else {
      tipEntry.disabled = true;
    };
  };
  if(id === 'calculateTip') {
    tipObject.subtotal = subtotal;
    if(tipEntry.disabled === true) {
      const genericTip = document.getElementById('tipSelection').value;
      tipObject.tip = genericTip;
    } else if (tipEntry.disabled === false) {
      const customTip = document.getElementById('customTip').value;
      tipObject.tip = customTip;
    };
  };
});


// console.log(tipObject.tipCalc());
// Display