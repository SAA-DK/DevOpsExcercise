import {makeAutoObservable, makeObservable, observable} from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev environment

class GiraffeStore{
    giraffes = ["Marius", "Melman"];

    addGiraffe = (giraffe)=> {
        this.giraffes.push(giraffe) ;
    }

    constructor(){
        makeObservable(this, {
            giraffes: observable,
        })
    }



}

export const giraffeStore = new GiraffeStore();
