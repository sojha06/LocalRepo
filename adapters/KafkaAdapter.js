//Added Sample Change JS
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2023,

  // This is a method
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },

  // Another method to update the year
  updateYear: function(newYear) {
    this.year = newYear;
    console.log(`Car year updated to: ${this.year}`);
  }
};