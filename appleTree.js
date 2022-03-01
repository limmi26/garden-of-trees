'use strict'

class AppleTree {
    // constructor
    constructor(treeLimitAge,treeMatrueAge,treeStopAge) {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this.harvested = '';
        this._healthStatus = true;
        this._limitAge = treeLimitAge;
        this._matrueAge = treeMatrueAge;
        this._stopAge = treeStopAge;
    }

    // getter
    get age() {
        return this._age; 
    }

    get height() {
        this._height;
    }

    get fruits() {
        return this._fruits;
    }

    get healthStatus() {
        return this._healthStatus;
    }

    get harvested() {
        return this._harvested;
    }

    get limitAge() {
        return this._limitAge;
    }
    
    get matureAge() {
        return this._matureAge;
    }

    get stopAge() {
        return this._stopAge;
    }

    // setter
    set age(value) {
        this._age = value;
    }

    // growing process
    grow() {
        this.age++;
        let addingHeigh = 0;
        
        if(this.age < this.limitAge){
            addingHeigh = math.round(math.random*100)/100;
            this.height = addingHeigh;
        }

        return this.age;
    }

    // produce fruits
    produceFruits() {
        if(this.age >= this.matureAge) {
            // 1. total buah
            let fruitsTotal = math.round(math.random*100);
            for(let i; i <= fruitsTotal; 1++) {
                this.fruits.push(i);
            }
            // 2. bagus/jelek - kualitas buah
        }

        /* 
          * jika pohon ini sudah mencapai umur yang matang (mature) atau lebih besar dari umur matangnya, maka pohon akan berbuah 
          * buat kelas buah di luar kelas pohon
          * hasil buah akan disimpan di dalam seperti fruit
        */
    }

    // harvesting/panen
    harvest() {
        /*
         * menentukan jumlah seluruh buah
        */
    }
}

class Fruits {
    constructor(num) {
        this.quanty = 
    }
}