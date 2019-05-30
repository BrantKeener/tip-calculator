// Event delegator

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

console.log(tipObject.tipCalc());
// Display