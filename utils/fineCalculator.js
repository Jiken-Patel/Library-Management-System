function calculateFine(dueDate, returnDate) {
    const oneDay = 1000 * 60 * 60 * 24;// hours*minutes*seconds*milliseconds
    const lateDays = Math.max(0, Math.ceil((returnDate - dueDate) / oneDay));
    return lateDays * 10;  // Assuming $10 fine per day
}
module.exports = { calculateFine };
