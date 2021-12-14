let myset=new Set()
let myset1=new Set()

function dd(arr){
       for(var i=0;i<arr.length;i++){
                myset.add(arr[i])
       }

       for(var i=0;i<myset.length;i++){
               if(myset[i]%2==0){
                    myset1.add(myset[i])
               }
       }
       

       return [[myset],[myset1]]
}
arr=[2,4,2,3,4,2,3,4,2,3,4,4,5,6,7,7,6,5,8,9,6,4,4,4]

console.log(dd(arr))
