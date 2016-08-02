function cegaProfunda(n, maxLoop){
	
    maxLoop == null ?
        maxLoop = Infinity :
        void(null);

    var noh = new Object();
    for( let k in n){
        noh[k] = n[k];
    }
    
    var nozes = new Array();
    nozes.push(noh);
    
    var hashes = new Set();
    hashes.add(noh.hsh);
 	
    var pilha = new Array();
    pilha.push(noh);
    
	for(let i = 0; i < maxLoop; i++){

        let topo = pilha.pop();
        topo.funda = i;
        
		if(topo.hsh == "\nabcd\n"){
            return topo;
		}else{
            topo.filhos = geraFilhos(topo);
            topo.filhos.forEach(function(e,e,s){
                if( ! hashes.has(e.hsh)){
                    nozes.push(e);
                    pilha.push(e);
                    hashes.add(e.hsh);
                }
            });
		}	
	}
}
