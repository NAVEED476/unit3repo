function logrith(n){
    //return Math.log(n)

    let k;

    if(n==0){
        return 1
    }
    else{
      k= (n*logrith(n-1))
      
     
    }

     return Math.log(k)
 
}



function runProgram(input) {
    
 console.log(logrith(input))
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }