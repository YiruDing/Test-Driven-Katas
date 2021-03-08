const wrap = (str, colNum) => {
  const words = str.split(" ");
  returnStr = "";
  lineCount = 0;

  for (let i = 0; i < words.length; i++) {
    lineCount += words[i].length;
    if (lineCount <= colNum) {
      returnStr = returnStr + words[i] + " ";
      lineCount += 1;
    } else {
      returnStr = returnStr + "\n" + words[i] + " ";
      lineCount = words[i].length + 1;
    }
  }
  return returnStr;
};

console.log(
  wrap(
    "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
    20
  )
);
