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

  // Destructure the event.target
  const { value, id, tagName } = event.target;
  const subtotal = document.getElementById('subtotal').value;
  let tipEntry = document.getElementById('customTip');

  // Check tagName to ensure that the "Tip Amount" section is being edited
  // This will be used to turn on and off the custom tip input
  if(tagName === 'SELECT' || tagName === 'OPTION') {
    if(value === 'customSelected') {
      tipEntry.disabled = false;
    } else {
      tipEntry.disabled = true;
    };
  };

  // If the user hits the submit button, choose whether to use the generic number, or the custom number
  if(id === 'calculateTip') {
    tipObject.subtotal = parseFloat(subtotal);
    if(tipEntry.disabled === true) {
      const genericTip = document.getElementById('tipSelection').value;
      tipObject.tip = parseInt(genericTip);
    } else if (tipEntry.disabled === false) {
      const customTip = document.getElementById('customTip').value;
      tipObject.tip = parseInt(customTip);
    };

    // Update the HTML appropriately
    let totalValue = `Total: ${tipObject.tipCalc()}`;
    document.getElementById('billTotal').textContent = totalValue
  };
});