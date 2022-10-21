let matriz = (n,m,type) => {

let rows= [];
let matriz = []

switch (type){

default:
case 0:


for(let i=0; i<n;i++){

    rows=[]
    for(let j=0; j<m;j++){

        rows.push(0)


    }

    matriz.push(rows)
    
    
}

return matriz;
break;

case 1:

if(n!=m){return ([])}



for(let i=0; i<n;i++){

    rows=[]
    for(let j=0; j<m;j++){

        if(j==i){rows.push(1);} else {rows.push(0) }
        
    }
    
    matriz.push(rows)
    
}

return matriz;
break;

}

}




let sumaMatriz= (m1,m2)  => {

    let m1Rows = m1.length;
    let m1Col = m1[0].length;


    let m2Rows = m2.length;
    let m2Col = m2[0].length;
    let rows=[]

    if(m1Rows==m2Rows && m1Col==m2Col){

        let result=[]; 

        for(let i=0; i<m1Rows;i++){
            rows=[] 

            for(let j=0; j<m1Col;j++){

            let num= m1[i][j]+m2[i][j]
            rows.push(num)    
        
        }
        
        result.push(rows)   
        }

        return result;
    } else {

        return [];
    }


}

let multiplyMatriz = (m1,m2) => {


    let value=0;
    let result = [];
    let row=[];

    if(m1[0].length != m2.length){
        return []
    } else {
        
        
            //para iterar sobre las filas de m1
            for(let i=0;i<m1.length;i++){
                row=[]

                //para cambiar la columna de m2
                for(let k=0;k<m2[0].length;k++){
                    
                    //para cambiar la fila
                    for (let j=0;j<m1[0].length;j++){
                        
                        value+=m1[i][j]*m2[j][k];
                        
                        
                    }
                    row.push(value)
                    value=0;

                }
                result.push(row)
            }

        
            return result;
        



    }


}

let restaMatriz= (m1,m2)  => {

    let m1Rows = m1.length;
    let m1Col = m1[0].length;


    let m2Rows = m2.length;
    let m2Col = m2[0].length;
    let rows=[]

    if(m1Rows==m2Rows && m1Col==m2Col){

        let result=[]; 

        for(let i=0; i<m1Rows;i++){
            rows=[] 

            for(let j=0; j<m1Col;j++){

            let num= m1[i][j]-m2[i][j]
            rows.push(num)    
        
        }
        
        result.push(rows)   
        }

        return result;
    } else {

        return [];
    }


}


let multiplyScalar = (m1, scalar) => {

    if(!m1 || !scalar){return []}
    let aux = [... m1]
    
    for(let i=0;i<m1.length; i++ ){

        for (let j=0; j<m1[0].length;j++){

            aux[i][j]=scalar*aux[i][j]
            
        }

    }
    return aux;



}


let getTranspuesta = (m1) => {

    let aux = matriz(m1.length, m1[0].length, 0)
    
    for(let i=0;i<m1.length; i++ ){

        for (let j=0; j<m1[0].length;j++){

            aux[j][i]=m1[i][j]
            
        }

    }
    return aux;
}



function getInversa(m){

    if(m.length!=m[0].length){
        return []
    } else {

        let filas = m.length;
    let inv = matriz(filas, filas, 1)
    let aux;
    let pivote=0;
    
    for (let diag=0; diag<filas; diag++){
    
        pivote=m[diag][diag]
    
            for(let horiz=0;horiz<filas;horiz++){
    
                m[diag][horiz]/=pivote;
                inv[diag][horiz]/=pivote;
            }
    
            for(let verti=0; verti<filas;verti++){
    
                if(diag!=verti){
                    aux=m[verti][diag]
    
                    for(let horiz2=0;horiz2<filas;horiz2++){
    
                        m[verti][horiz2]-=aux*m[diag][horiz2]
                        inv[verti][horiz2]-=aux*inv[diag][horiz2]
                    }
    
                }
    
            }
            
    
    }

return inv;

    }

    
}

function setColumnas(m,columnas){

m=[];
for (let i=0; i<columnas.length;i++){m.push([])}


for (let j=0; j<columnas.length;j++){

   for(let k=0;k<columnas[0].length;k++){

     m[k].push(columnas[j][k])

   }

}

return m;

}



//verificando que funcione lo de inversa

let m1=[[1,3,3], [1,4,3], [1,3,4]];
let m2 = getInversa(m1)

let log=console.log

log(m1);log(m2);

let mul = multiplyMatriz(m1,m2)

log(mul)

let m3=[[1,4,7], [2,5,8], [3,6,9]]
let m4=[[1,-1,2], [2,-1,2], [3,-3,0]]

log(multiplyMatriz(m3,m4))

let m6=[[1,2], [-1,0], [-3,-1]]
let m7=[[2,0,1], [-5,2,3]]
log(multiplyMatriz(m6,m7))