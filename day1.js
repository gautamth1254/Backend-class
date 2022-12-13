console.log("heloo world");
function add(x,y){
    return x+y;
}
console.log(add(6,4))
const arr=["Gautam",undefined,true,null,[1,2]]
console.log(arr)
const obj={
    name:'Gautam',
    sayName:function(){
        console.log(`hello ${this.name}`)
    }}
console.log(obj.name);
obj.sayName() ;