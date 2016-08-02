var torreF = ["a","b","c","d"];
var torre0 = ["b","c","d","a"];

var noh = new Object();
noh.custo = 0;
noh.quadra = new Set();
noh.quadra.add(torre0);
noh.filhos = new Set();
noh.pai = null;
noh.heu = heuristica(noh.quadra);
noh.hsh = torreHash(noh.quadra);


/**
 * 
 * Percorre todas as torres da quadra retirando o topo e combinando com
 * todas as outras torres.
 * 
 */
function geraFilhos(noh){
    var filhos = new Set();
    noh.quadra.forEach(function(torre,torre,quadra){
        /**
         * 
         * softclone do conjunto de torres
         * com o pivo separado
         * com o topo do pivo separado
         */
        var quadraClone = new Set();
        var topoPivo = new Array();
        var torrePivo = new Array();
        quadra.forEach(function(t,t,q){
            if( t == torre){
                torrePivo = t.slice(0)
                topoPivo.push(torrePivo.pop());
            }else{
                quadraClone.add(t.slice(0));
            }
        });
        /**
         * 
         * topo do pivô no chão
         */
        if(torrePivo.length != 0){
			var nohAuxFloor = new Object();
			//noh.filhos.add(nohAuxFloor);
			//nozes.push(nohAuxFloor);
			//
			nohAuxFloor.pai = noh;
			nohAuxFloor.custo = noh.custo + 1;
			nohAuxFloor.filhos = new Set();
			//
			nohAuxFloor.quadra = new Set(quadraClone);
			nohAuxFloor.quadra.add(topoPivo);
			nohAuxFloor.quadra.add(torrePivo);
			//
			nohAuxFloor.heu = heuristica(nohAuxFloor.quadra);
            nohAuxFloor.hsh = torreHash(nohAuxFloor.quadra);
            /* tornando gera filhos sem efeito colateral
            ** estes testes serão feitos na busca
            if( ! hashes.has(nohAuxFloor.hsh) ){
                hashes.add(nohAuxFloor.hsh);
                noh.filhos.add(nohAuxFloor);
                nozes.push(nohAuxFloor);
            }            
            */
            filhos.add(nohAuxFloor);
		}
        /**
         * 
         * topo do pivô combinado com cada torre da quadra
         */
		quadraClone.forEach(function(t,t,q){
			var nohAuxComb = new Object();
			//
			nohAuxComb.pai = noh;
			nohAuxComb.custo = noh.custo + 1;
			nohAuxComb.filhos = new Set();
			//
			nohAuxComb.quadra = new Set();
			if(torrePivo.length != 0){
				nohAuxComb.quadra.add(torrePivo);
			}
			q.forEach(function(tt){
				if( t == tt){
					nohAuxComb.quadra.add(tt.concat(topoPivo));
				}else{
					nohAuxComb.quadra.add(tt);
				}
			});
			nohAuxComb.heu = heuristica(nohAuxComb.quadra);
            nohAuxComb.hsh = torreHash(nohAuxComb.quadra);
            /*
            if( ! hashes.has(nohAuxComb.hsh) ){
                hashes.add(nohAuxComb.hsh);
                noh.filhos.add(nohAuxComb);
                nozes.push(nohAuxComb);
            }            
            */
            filhos.add(nohAuxComb);
		});
    });
    return filhos;
}
/**
 *
 * estado final hardwire.
 * + quando o bloco tem a estrutura de apoio correta some 1 ponto para
 * cada bloco da estrutura; 
 * - quando o bloco tem a estrutura de apoio incorreta subtraia 1 ponto
 * para cada bloco da estrutura
 */
function heuristica(quadra){
	var pontos = 0;
	quadra.forEach(function(t){
		var ok = true;
		for(var i = 0; i < torreF.length && i < t.length; i++){
			if(t[i] == torreF[i] && ok){
				pontos += i;
			}else{
				pontos -= i;
				ok = false;
			}
		}
	});
	return pontos;
}

function torreHash(quadra){
	var hashVetor = [];
	var appendAll = "\n";
	quadra.forEach(function(t){
		var hash = "";
		t.forEach(function(b){
			hash = hash.concat(b);
		});
		hash = hash.concat("\n");
		hashVetor.push(hash);
	});
	hashVetor.sort();
	hashVetor.forEach(function(b){
		appendAll = appendAll.concat(b);
	});
	return appendAll;
	
}