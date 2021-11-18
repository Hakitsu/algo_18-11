

const len : number = 10000000
const tab: Array<number> = Array(len) 

for (let i=0; i< len; i++){
    tab[i] = (Math.round(Math.random() * 10))
}

const logiqueDeTri = ( a:number, b:number) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

const logiqueDeTriOptimisé = function(a:number, b:number){
    //return (a  > b) ? -1 : 1;
    return b - a
};

// const TriOpti = function ( ){
//    const nbBuckets : number = 256
//    const prefixSums: Array<Number> = Array(nbBuckets)
//    const output : Array<Number> = Array(len)
//    for(let j=0; j<nbBuckets; j++) prefixSums[j]=0
//    for(let j=0; j<len; j++) prefixSums[ tab[j] ]++
//    for(let j=1; j<nbBuckets; j++) prefixSums[j] += prefixSums[ j - 1]
//    for(let j= len -1 ; j >= 0; j--) {
//         const v = tab[j]
//         const outputIdx = --prefixSums[v]
//         output[outputIdx] = v
//     }
// }

function bench() {
    const debut: number = Date.now()
    const tabSort: Array<number>
        = tab.sort(logiqueDeTri)
    return Date.now()- debut
}

function benchLogiqueOpti() {
    const debut: number = Date.now()
    const tabSort: Array<number>
        = tab.sort(logiqueDeTriOptimisé)
    return Date.now()- debut
}

// console.log(" tri non opti :" + bench())
//console.log(" tri optimisé :" + benchLogiqueOpti())

// Exercice 2

const problemesFaciles: {[objectifs : string] : Array<string>} = {
    "": ["bla", "bl", "a"], //true
    "abcdef": ["ab", "abc", "cd", "def", "abcd"], //true
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"], //false
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"], //true

}

const problemeDifficile: {[objectifs: string]: Array<string>}={
    "eeeeeeeeeeeeeeeeeeeeeeeeeef":[
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee"
    ]// false
}

type ConstructionPossible = ( objectif: string, alphabet:Array<string> ) => boolean
  
const constructionPossible : ConstructionPossible = ( objectif: string, alphabet:Array<string> ): boolean => {
    if(objectif === ""){
        return true
    }
    for(let element of alphabet){
        if(objectif.indexOf(element) === 0 ){ // on vérifie si l'élement est au debut du mot
            const reste = objectif.slice(element.length) // on retire la partie de l'objectif qui est égale à l'element
            if(constructionPossible(reste, alphabet)){
                return true
            }
        }
    }
    return false
}

function benchProbleme(problemes : {[p : string] : Array<string>}) {
    for (const objectif in problemes){
      const alphabet = problemes[objectif]
      console.log(`"${objectif}"-> ${constructionPossible(objectif, alphabet)}`)
    }
}

benchProbleme(problemesFaciles)





