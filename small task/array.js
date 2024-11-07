let marks = [20, 30, 40, 50, 60];
let student_name = ["ram", "sham", "arjun", "rekha", "hema"];
let changename = (student_name[0] = "cake"); //change array value
console.log(changename);
console.log(marks);
console.log(student_name);

for (let index = 0; index < marks.length; index++) {
  console.log(marks[index[0]]);
}

for (let name of student_name) {
  console.log(name.toUpperCase());
}
let avg = 0;
for (let value of marks) {
  console.log(value);
  avg += value;
}
let cal_avg = avg / marks.length;
console.log(`student avarage number of ${cal_avg}`);

let offers = [20, 30, 40, 50, 60];
for (let index = 0; index < offers.length; index++) {
  offers[index] = offers[index] * 0.8; // Apply a 10% discount
}
console.log(offers);

let discount_ten = [400, 500, 1000, 2000, 600];
for (let y = 0; y < discount_ten.length; y++) {
  let off = discount_ten[y] / 10;
  discount_ten[y] -= off;
}
console.log(discount_ten);



let company = ['bloomberg', 'microsoft', 'uber', 'google', 'ibm', 'netflix'];

document.write("<table border='1px'>");

for(let com = 0; com<=company.length; com++){
  document.write("<tr>");
  document.write("<td>" , company[com]);document.write("</td>");
  document.write("</tr>");
}

document.write("</table>");

document.write("<br>" , company);
console.log(comapny.splice(1, 2, 'ala'));
console.log(comapny.push('amazon'));
console.log(comapny);