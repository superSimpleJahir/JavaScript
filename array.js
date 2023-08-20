let countries = ['Bangladesh', 'USA', 'UK', 'UAE', 'Soudi-Arob', 'Finland', 'Canada', 'Africa', 'Irland', 'Pakisthan', 'India'];

// How many item in this array chack
console.log(countries.length);

// array access in index number
console.log(countries[5]);

// value change
countries[3] = 'poland';

// item insart korar jonne 
countries[countries.length] = 'Brazil';
countries[countries.length] = 'Sweden';

// push method ati hocche laste item add hoi.
countries.push('Norway');
countries.push('Qater');

// pop method ati hocche laste theke item remove hoi.
countries.pop();
countries.pop();

// shift hocche first ar dik theke item remove kore
countries.shift();
countries.shift();

// shift hocche first ar dik theke item add kore
countries.unshift('Bangladesh', 'Japan');
countries.unshift('China');

console.log(countries);

// akti array ke string a rupantor korar janne toString method use kore hoi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// akti string ke arraya rupantor korar janne split method use kore hoi.
let g = 'I love bangladesh';
let h = g.split(' ');
console.log(h);

// akti array ke string a rupantor korar janne toString method use korte hoi. jodi toString use kori tahole akta somasa hoi akhane coma chole ase jar karone toString use kora hoina .
console.log(h.toString());

// akti array ke string a rupantor korar janne join  method hosse best upay akhane je kono besise ami string a rupantor korte parbo.
console.log(h.join(" "));

// array  ar shathe array  jora laganor janne concat use kora  hoi
console.log(countries.concat(h));

// dicnory onusare sajanor janne sort method use kora hoi.
console.log(countries.sort());

// sort ar ulta korar jonne reverse use kora hoi
console.log(countries.reverse());
