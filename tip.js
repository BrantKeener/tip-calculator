// Tip-calculator
// Test 0, -2, 2

const tipObject = {
  subtotal: 0,
  tip: 0,
  subtotalValid: false,
  tipValid: false,
  tipCalc: function() {
    let totalWTip = this.subtotal + (this.subtotal * (this.tip / 100));
    return totalWTip.toFixed(2);
  }
};

const validateInputs = () => {

  // Due to the nature of NaN, it is never equal to itself. It is the only value that matches this situation
  // Therefore, to test for NaN, test if something is equal to itself.
  if (tipObject.subtotal !== tipObject.subtotal || tipObject.tip !== tipObject.tip) {
    return false;
  } else {
    return true;
  }
};

// Event delegator

document.addEventListener('click', (event) => {
  event.preventDefault();

  // Destructure the event.target
  const { value, id, tagName } = event.target;
  const subtotal = document.getElementById('subtotal').value;
  let tipEntry = document.getElementById('customTip');
  let totalValue = '';

  // Check tagName to ensure that the "Tip Amount" section is being edited
  // This will be used to turn on and off the custom tip input
  if (tagName === 'SELECT' || tagName === 'OPTION') {
    if (value === 'customSelected') {
      tipEntry.disabled = false;
    } else {
      tipEntry.disabled = true;
    };
  };

  // If the user hits the submit button, choose whether to use the generic number, or the custom number
  if (id === 'calculateTip') {
    tipObject.subtotal = parseFloat(subtotal);
    if (tipEntry.disabled === true) {
      const genericTip = document.getElementById('tipSelection').value;
      tipObject.tip = parseInt(genericTip);
    } else if (tipEntry.disabled === false) {
      const customTip = document.getElementById('customTip').value;
      tipObject.tip = parseInt(customTip);
    };
    // Relatively simple validation that ensures that our values are present, and positive.
    // Since we use parseInt, and parseFloat, we do not need to worry about non-numeric characters.
    if (validateInputs()) {
      totalValue = `Total: ${tipObject.tipCalc()}`;
    } else {
      totalValue = `Total: Error:<br>
      Subtotal must be either a whole integer, or a decimal. Example: 100.00<br>
      Custom tip value must be a positive integer. Example: 10<br>
      Do not add symbols or letters to your entries.<br>
      Negative values will be converted to its positive value.`
    };

    // Update the HTML appropriately
    document.getElementById('billTotal').innerHTML = totalValue
  };
});