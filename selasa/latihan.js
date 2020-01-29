var string = "abcdefghi"

for (let i = 0; i < string.length; i++) {
    let temp = ""
for (let j = 0; j < 3; j++) {
temp = temp + string[j + 1];
}
    console.log(temp);
}