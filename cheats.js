clear();

var blocos = ["a","b","c"];

var torre0 = ["d","a","b","c"];

var noh = new Object();
noh.custo = 0;
noh.quadra = new Set();
noh.quadra.add(torre0);
noh.filhos = new Set();

var quadraAux = new Set();
var blocoAux = new Array();
var torrePivo = new Array();
var nohAuxFloor = new Object();

quadraFloor = new Set();

    noh.quadra.forEach(function(torre,torre,quadra){



        quadra.forEach(function(t,t,q){
            if( t == torre){
                torrePivo = t.slice(0)
                blocoAux.push(torrePivo.pop());
            }else{
                quadraAux.add(t.slice(0));
            }
        });


        
    });

nozes[1].quadra.forEach(function(e){
    console.log(e);
});

clear();

var blocos = ["a","b","c"];

var torre0 = ["d","a","b","c"];

var noh = new Object();
noh.custo = 0;
noh.quadra = new Set();
noh.quadra.add(torre0);
noh.filhos = new Set();

var quadraAux = new Set();
var blocoAux = new Array();
var torrePivo = new Array();
var nohAuxFloor = new Object();

quadraFloor = new Set();

    noh.quadra.forEach(function(torre,torre,quadra){



        quadra.forEach(function(t,t,q){
            if( t == torre){
                torrePivo = t.slice(0)
                blocoAux.push(torrePivo.pop());
            }else{
                quadraAux.add(t.slice(0));
            }
        });


        
    });

nozes[1].quadra.forEach(function(e){
    console.log(e);
});

var testH = new Set();
testH.add(["a","b","c","d"]);

function heuristica2(quadra){
	torreFinal = ["a","b","c","d"];
	var pontos = 0;
	quadra.forEach(function(t){
		console.log("torre");
		var ok = true;
		for(var i = 0; i < torreFinal.length && i < t.length; i++){
			console.log("i = "+i);
			if(t[i] == torreFinal[i] && ok){
				pontos += i;
				console.log("+");
			}else{
				console.log("-");
				pontos -= i;
				ok = false;
			}
		}
	});
	return pontos;
}

nozes[i].cpl == null;
nozes[i].cpl = cpl;
geraFilhos(nozes[i]);
i = nozes.length - 1;
cpl += 1;

var nz = [{"heu":"3"},{"heu":"3"},{"heu":"1"}];
var ed = {"heu":2,"inserted": true};
var ined = insertAtHeu(ed,nz);


insertAtHeu = function(noh,nozes){
    let arr = new Array ();
    let notYet = true;
    nozes.forEach(function(el){
        if( notYet && !(noh.heu < el.heu) ){
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