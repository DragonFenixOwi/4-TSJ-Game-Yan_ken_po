/*
    Autor: Osvaldo Aquino
    nickname: owi
    Juego: Piedra, papel, Tijera
    ----------------------------------
*/


/*
    Comandos iniciales git
        git clone https://github.com/PalmaActiva-2020-JS/Plantilla_Front_2020.git
        git remote remove origin
        git remote add origin https://github.com/DragonFenixOwi/
        git push -u origin master
        git status
            en rojo que hay que añadir
                modified:   css/estilos.css
                modified:   index.html
        git add 
            index.html  
            css/estilos.css
		Git status              
        git commit –m
        git push -u origin master
*/


//variables
var Yan_ken_po = ['otro valor','piedra', 'papel', 'tijera'];




function game (jugador1,jugador2)
    {
        //Empate por piedra
            if (jugador1 == Yan_ken_po.indexOf('piedra') &&  jugador2 == Yan_ken_po.indexOf('piedra') )
                {
                    console.log("Empate por" + " " + Yan_ken_po[1]);
                }
        //Empate por papel
            if (jugador1 == Yan_ken_po.indexOf('papel') &&  jugador2 == Yan_ken_po.indexOf('papel') )
                {
                    console.log("Empate por" + " " + Yan_ken_po[2]);
                }
        //Empate por tijera
            if (jugador1 == Yan_ken_po.indexOf('tijera') &&  jugador2 == Yan_ken_po.indexOf('tijera') )
                {
                    console.log("Empate por" + " " + Yan_ken_po[3]);
                }



        //Ganador Jugador 1
            else if  (jugador1 == Yan_ken_po.indexOf('piedra') && jugador2 ==Yan_ken_po.indexOf('tijera')  || 
            jugador1 == Yan_ken_po.indexOf('papel') &&  jugador2 == Yan_ken_po.indexOf('piedra') || 
            jugador1 == Yan_ken_po.indexOf('tijera')  && jugador2 == Yan_ken_po.indexOf('papel'))
        {
            console.log(`Gana el jugador 1, porque ${Yan_ken_po[jugador1]} vale mas que ${Yan_ken_po[jugador2]} `);
        }


        //Ganador Jugador 2
            else if  (jugador1 == Yan_ken_po.indexOf('tijera') && jugador2 ==Yan_ken_po.indexOf('piedra')  || 
            jugador1 == Yan_ken_po.indexOf('piedra') &&  jugador2 == Yan_ken_po.indexOf('papel') || 
            jugador1 == Yan_ken_po.indexOf('papel')  && jugador2 == Yan_ken_po.indexOf('tijera'))
                {
                    console.log(`Gana el jugador 2 , porque ${Yan_ken_po[jugador2]} vale mas que ${Yan_ken_po[jugador1]} `);
                }


        //Ganador Judagor2
        else if (jugador1 >= Yan_ken_po.length || jugador2 >= Yan_ken_po.length ) 
            console.log(`Introdujo,  ${Yan_ken_po[0]} que no es "1 , 2 , 3". Vuelvalo a intentar por favor`);
            }
            game (1,1);