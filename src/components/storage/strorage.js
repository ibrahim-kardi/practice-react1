function multiply(num1,num2){
return num1*num2;
}

function add(num1,num2){
    return num1+num2;
}

const jinis = [
    {id:1, name:'Alta', price:25},
    {id:2, name:'Nail palish', price:250},
    {id:3, name:'face wahs', price:200},
]
let total = 0;
for( const jini of jinis){
    total = total+jini.price;
}
//reducer

const jinisReducer = (previous,current) => previous+current.price;
const jinisTotal = jinis.reduce(jinisReducer,0);

export{add,multiply}