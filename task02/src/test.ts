import {updateObjectInArray} from "./updateObjectInArray";

interface IDoc {
    id:number;
    name:string;
}

const docs:IDoc[] = [
    {id:0, name:'First'}, {id:1, name:'Second'}, {id:3, name:'frs'}
]

const newDocs = updateObjectInArray(docs, 'name','frs', {name:'forth'} )


console.group()
console.log('old docs')
docs.forEach(el => console.log(el))
console.groupEnd()
if (newDocs) {
    console.log('new docs ')
    newDocs.forEach(el => console.log(el))
}