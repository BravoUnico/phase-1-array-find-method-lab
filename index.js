const superbowlWin = (records) => {
 const winYear = records.find(record => record.result === "W"); 
  if (winYear) {
    return winYear.year 
  } else  {
    return undefined
  }
}

