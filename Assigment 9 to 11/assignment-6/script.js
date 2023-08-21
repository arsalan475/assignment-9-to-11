

var totalMarks = 100 * 3;

var obtainMarkS1 = +prompt("Obtained marks in subject 1")
var obtainMarkS2 = +prompt("Obtained marks in subject 2")
var obtainMarkS3 = +prompt("Obtained marks in subject 3")

var totalObtainedMarkd = obtainMarkS1 + obtainMarkS2 + obtainMarkS3

var studentPercentage = totalObtainedMarkd/totalMarks*100 

alert(`
Mark Sheet

Percentage       Grade      Remarks
${studentPercentage >= 80 ? `${studentPercentage}                 A-1      Excellent` : studentPercentage >= 70 ? `${studentPercentage}                A         Good`: studentPercentage >= 60 ? `${studentPercentage}                  B      you need to improve` : `${studentPercentage}                  Fail    Sorry`}



`)

