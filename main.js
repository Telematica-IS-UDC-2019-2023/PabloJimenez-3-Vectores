class Vector {
    
    constructor(){
        this.arreglo;
    }

    
    llenar(arreglo){

        this.arreglo = arreglo;
        for(let i=0; i<=9; i++){
            arreglo[i]= i + 1; 
        } 

        for(let d=0; d<=arreglo.length; d++){
            if ((arreglo[d] % 2) !=0){
             arreglo.splice(d,1);
            }
         }
        
    }
    
    probar(){
        return (this.arreglo)
    }

    girarDerecha(){

        let movRight = this.arreglo[(this.arreglo.length -1)]
        this.arreglo.splice(0,0, movRight);
        this.arreglo.splice((this.arreglo.length -1),1);
        return (this.arreglo);
    }

    girarIzquierda(){

        let movLeft = this.arreglo[0];
        this.arreglo.splice(this.arreglo.length,0, movLeft);
        this.arreglo.splice(0,1);
        return (this.arreglo);
    }

    invertir(){
        for(let i =0; i<=this.arreglo.length;i++){
            let turn = this.arreglo[(this.arreglo.length -1)]
            this.arreglo.splice(i,0,turn);
            this.arreglo.splice((this.arreglo.length -1),1);
        }
        return (this.arreglo);
    }
    
}
let play = new Vector
play.llenar(new Array);
console.log(`Mostrando unicamente numeros pares: ${play.probar()}`);
console.log(`Girado a la derecha --> ${play.girarDerecha()}`);
console.log(`Girado a la izquierda <-- ${play.girarIzquierda()}`);
console.log(`Elementos invertidos de posicion: ${play.invertir()}`);