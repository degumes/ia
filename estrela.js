function estrela(n,maxLoop){
    // ela kika, ela para (...)
    // e trava, ela abre, ela fecha
    // na ponta ela fica
	
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
        topo.estrela = i;
        
		if(topo.hsh == "\nabcd\n"){
            return topo;
		}else{
            topo.filhos = geraFilhos(topo);
            topo.filhos.forEach(function(e,e,s){
                if( ! hashes.has(e.hsh)){
                    nozes.push(e);
                    pilha = insertAtHeuCus(e,pilha);
                    hashes.add(e.hsh);
                }
            });
		}	
	}	
}
insertAtHeuCus = function(noh,nozes){
    let arr = new Array ();
    let notYet = true;
    nozes.forEach(function(el){
        if( notYet && !((el.heu+el.custo) > (noh.heu+noh.custo)) ){
            arr.push(noh);
            notYet = false;
        }
        arr.push(el);
    });
    if( notYet ){
        arr.push(noh);
    }
    return arr;
}