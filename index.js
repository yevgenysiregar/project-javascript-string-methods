console.log("Hello\n World!");
console.log("\tHello World!");

console.log("Hello".length);
console.log("Hello\n".length);

const text = "Cheers!";
console.log(text[2]);
console.log(text.charAt(2));

for (let char of "Hello") {
  console.log(char);
}

const words = "Hello";
const newWords = words + "!";
console.log(newWords);

const words2 = "Hi";
const newWords2 = "h" + words2[1] + "t!";
console.log(newWords2);

console.log("Cheers!".toUpperCase());
console.log("Cheers!".toLowerCase());

const phrase = "Good Morning Everyone";
console.log(phrase.indexOf("Morning"));
console.log(phrase.indexOf("Everyone"));
console.log(phrase.indexOf("Good"));

console.log("Cheers everyone!".includes("Cheers"));
console.log("Cheers everyone!".includes("che", 0));
console.log("Cheers everyone!".startsWith("Che"));
