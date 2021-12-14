
const myset=new Set();

function dstrange2(arr,new_arr,prev){

  let key=new_arr.join(" ")

  myset.add(key)

  if(prev==arr.length){
    return
  }
  for(var i=prev;i<arr.length;i++){
    new_arr.push(arr[i])
    dstrange2(arr,new_arr,i+1)
    new_arr.pop()
  }
}






function runProgram(input) {
    
    
   
    
  input=input.trim().split("\n")

  let n=+input[0]
  let arr=input[1].trim().split(" ").map(Number)

  arr.sort(function(a,b){
    return a-b
  })

  let new_arr=[]

  let prev=0;

  dstrange2(arr,new_arr,prev)

  for(val of myset){
    console.log(val)
  }

 // console.log(n,arr)
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3
    1 2 2`);
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