function Outputpyramid(totalLine) {
    for (var currentLine = 1; currentLine <= totalLine; currentLine++) {
        var singleLine = "";
        for (var spaceCount = 0; spaceCount < totalLine - currentLine; spaceCount++) {
            singleLine = singleLine + " ";
        }
        for (var starCount = 1; starCount <= currentLine * 2 - 1; starCount++) {
            singleLine = singleLine + "*";
        }
        console.log(singleLine);
    }
}
var cengshu = process.argv[2];
Outputpyramid(parseInt(cengshu));
