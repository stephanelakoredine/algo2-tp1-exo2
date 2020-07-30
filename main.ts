function déplacer_diode_dans_colonne (colone_boucle: string) {
	
}
function déplacer_dans_colonne2 (colone_boucle: string) {
	
}
function déplacer_dans_colonne3 (colonne: number) {
    for (let ligne = 0; ligne <= 4; ligne++) {
        let colonner = 0
        if (led.point(colonner, ligne)) {
            let direction: number[] = []
            ligne = direction[colonner]
        }
        if (true) {
        	
        }
    }
}
let definir_direction = 1
for (let _1 = 0; _1 <= 4; _1++) {
    led.plot(1, 1)
}
basic.forever(function () {
    for (let colonner_boucle = 0; colonner_boucle <= 4; colonner_boucle++) {
        déplacer_dans_colonne3(colonner_boucle)
    }
    basic.pause(500)
})
