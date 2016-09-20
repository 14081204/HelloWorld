// TypeScript file  
var cs : number = 0;
function pyramid (x:number):void{
    var s : string = "";
    for(var b : number = 1; b <= x; b++){
        s = "";        
        for(var c : number = 0; c < x - b; c++){
           s = s + " ";
        }
        for(var d : number = 1; d <= b * 2 - 1; d++){
            s = s + "*";
        }
        console.log(s);
    }
}

//var y : number = 5;
//pyramid(y);
var cengshu : number = process.argv[2];
pyramid(cengshu);
