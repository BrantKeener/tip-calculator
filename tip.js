// Tip-calculator
// Test 0, -2, 2

const tipObject = {
  total: 10,
  tip: 10,
  tipCalc: function() {
    let totalWTip = this.total + (this.total * (this.tip / 100));
    return totalWTip.toFixed(2);
  }
};

// Event delegator

document.addEventListener('click', (event) => {
  event.preventDefault();
  const { value, id, tagName } = event.target;
  let tipEntry = document.getElementById('customTip');
  if(tagName === 'SELECT' || tagName === 'OPTION') {
    if(value === 'customSelected') {
      tipEntry.disabled = false;
    } else {
      tipEntry.disabled = true;
    };
  };
  if(id === 'calculateTip' && tipEntry.disabled === true) {
    console.log(value);
  };
});


// console.log(tipObject.tipCalc());
// Display