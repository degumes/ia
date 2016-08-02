function gulosa(n,maxLoop){
	
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
        topo.gulosa = i;
        
		if(topo.hsh == "\nabcd\n"){
            return topo;
		}else{
            topo.filhos = geraFilhos(topo);
            topo.filhos.forEach(function(e,e,s){
                if( ! hashes.has(e.hsh)){
                    nozes.push(e);
                    //pilha.push(e);
                    pilha = insertAtHeu(e,pilha);
                    hashes.add(e.hsh);
                }
            });
		}	
	}	
}
insertAtHeu = function(noh,nozes){
    let arr = new Array ();
    let notYet = true;
    nozes.forEach(function(el){
        if( notYet && !(el.heu > noh.heu) ){
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