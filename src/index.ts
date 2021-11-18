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

const TriOptimisé : any = function(){

};

function bench(){
    const debut: number = Date.now()
    const tabSort: Array<number>
        = tab.sort(logiqueDeTri)
    return Date.now()- debut
}



console.log(bench())
