let name ={
    firstName:'Piyush'
}
function printName(){
    console.log(this.firstName)
}

Function.prototype.myBind= function(obj,...args){
    let fn = this
    return function(){
        fn(obj,[...args])

    }

}
const printJob = printName.myBind(name,"afd");

printJob()