// TypeScript file  
function pyramid(x) {
    var s = "";
    for (var b = 1; b <= x; b++) {
        s = "";
        for (var c = 0; c < x - b; c++) {
            s = s + " ";
        }
        for (var d = 1; d <= b * 2 - 1; d++) {
            s = s + "*";
        }
        console.log(s);
    }
}
//var y : number = 5;
//pyramid(y);
var cengshu = process.argv[2];
pyramid(cengshu);
