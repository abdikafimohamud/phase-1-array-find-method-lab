// code your solution here
  // Example usage:
  const broncosRecord = [
    { year: "2014", result: "L" },
    { year: "2015", result: "W" },
    { year: "2016", result: "L" }
  ];
  
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  console.log(superbowlWin(broncosRecord));
