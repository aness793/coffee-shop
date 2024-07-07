import { coffee } from "./coffee";

export const cofee :coffee[] = [
    {
        name :'black',
        id:1,
        price:220,
        tags:['coffee'],
        perpiece:'',
        origin :'Algeria',
        ingrients:['coffee'],
        sizes:['small','Medium','Large',],
        image:'black.jpg'
    },
    {
        name : 'espresso',
        id:2,
        price:400,
        tags:['coffee'],
        perpiece:'',
        origin :'Algeria',
        ingrients:['coffee'],
        sizes:['small','Medium','Large',],
        image:'espresso.jpg'
    },
    {
        name : 'iced coffee',
        id:3,
        price:220,
        tags:['coffee'],
        origin :'Algeria',
        ingrients:['coffee'],
        sizes:['small','Medium','Large',],
        image:'icedcofee.jpg'
    },
    {
        name : 'crepes',
        id:4,
        price:300,
        tags:['sweet'],
        origin :'Algeria',
        ingrients:['choclate','fruits'],
        sizes:['X'],
        image:'crepes.jpg'
    },
    {
        name : 'goffre',
        id:5,
        price:400,
        tags:['sweet','choclate'],
        origin :'Algeria',
        ingrients:['choclate','fruits','sweet'],
        sizes:['X', 'XL'],
        image:'goffre.jpg'
    },
    {
        name : 'Donuts (choco , fraise , vanille',
        id:6,
        price:70,
        perpiece:'per piece',
        tags:['sweet','choclate','sweet'],
        origin :'Algeria',
        ingrients:['choclate','vanille','fruits'],
        sizes:['S', 'M'],
        image:'donut.jpg'
    },
]
export var tags:string[]=[]
let map = new Map()
let j=0
for (let index = 0; index < cofee.length; index++) {
    for(let t of cofee[index].tags!){
        if(!map.has(t)){
            tags[j]=t
            j++
            map.set(t,t)
        }
    }
    
}
console.log(tags)