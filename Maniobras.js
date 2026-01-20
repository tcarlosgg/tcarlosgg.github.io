maniobrasConocidas = 5;
maniobrasPreparadas = 5;
/*
Nombre:       Nombre de la maniobra
Disciplina:   Espíritu Devoto (devo), Dragón de Piedra (drag) o Cuervo Blanco (cuer)    |   Solo hay que escribir la abreviación de cuatro letras
Tipo:         Golpe, Impulso o Contraataque                                             |   Tiene que estar escrito exactamente así o dará error
Subtipo:      Fuego, Orden, etc. Solo algunas maniobras tienen subtipo.                 |   Si no tiene subtipo, deja las comillas vacías: ""
Nivel:        Nivel de la maniobra. El nível mínimo de cruzado para aprender y usar una maniobra es el doble que el nivel de la maniobra menos 1.
Acción:       Acción usada para iniciar la maniobra: Estándar, rápida, inmediata, etc.
Alcance:      Dónde tiene que estar el objetivo: Es un efecto personal, de ataque cuerpo-a-cuerpo, a larga distancia...?
Objetivo:     A quién afecta: A ti, a una criatura, un área...?
Duración:     La maniobra termina en cuanto se realiza (Instantánea), o tiene un efecto persistente...?
Condición:    Qué debe cumplirse para que la maniobra surja efecto? Atacar exitosamente, que el enemigo supere una Tirada de Salvación...?
Descripción:  Explicación adicional.                                                    |   Puede ser larga, pero no sé qué pasará si el texto se sale... XD
*/
maniobras = [
    {
        "nombre":       "Maniobra de ejemplo",
        "disciplina":   "devo",
        "tipo":         "Golpe",
        "subtipo":      "Ejemplo",
        "nivel":        "0",
        "accion":       "Estándar",
        "alcance":      "Cuerpo a cuerpo",
        "objetivo":     "1 criatura",
        "duracion":     "Instantánea",
        "condicion":    "Atacar",
        "descripcion":  "Esto es un ejemplo muy ejemplar"
    },
    {
        "nombre":       "Maniobra de Heimlich",
        "disciplina":   "devo",
        "tipo":         "Contraataque",
        "subtipo":      "Médico",
        "nivel":        "2",
        "accion":       "Inmediata",
        "alcance":      "Toque",
        "objetivo":     "1 criatura",
        "duracion":     "1 ronda",
        "condicion":    "Presa",
        "descripcion":  "También llamada compresiones abdominales, es un procedimiento de primeros auxilios para desobstruir el conducto respiratorio, normalmente bloqueado por un trozo de alimento o cualquier otro objeto. Es una técnica efectiva para salvar vidas en caso de asfixia por atragantamiento."
    },
    {
        "nombre":       "Maniobra evasiva",
        "disciplina":   "cuer",
        "tipo":         "Contraataque",
        "subtipo":      "",
        "nivel":        "5",
        "accion":       "Ronda entera",
        "alcance":      "Personal",
        "objetivo":     "Tú",
        "duracion":     "Instantánea",
        "condicion":    "Recibir ataque",
        "descripcion":  "Kilo-Kilo, aquí Golf-Bravo; tengo un hostil en cola. Solicitando permiso para iniciar maniobras evasivas y derribarlo. Cambio."
    },
    {
        "nombre":       "Maniobra de teatro",
        "disciplina":   "drag",
        "tipo":         "Impulso",
        "subtipo":      "",
        "nivel":        "3",
        "accion":       "Ronda entera",
        "alcance":      "Personal",
        "objetivo":     "Radio de 100 pies",
        "duracion":     "45 minutos",
        "condicion":    "TS de Carisma",
        "descripcion":  "Montas una obra de teatro to chula y entretienes a todos los presentes el rato que dura la función."
    },
    {
        "nombre":       "Mano de obra",
        "disciplina":   "drag",
        "tipo":         "Golpe",
        "subtipo":      "Orden",
        "nivel":        "9",
        "accion":       "Estándar",
        "alcance":      "Cuerpo a cuerpo",
        "objetivo":     "Cubo de 15 pies",
        "duracion":     "Instantánea",
        "condicion":    "Atacar",
        "descripcion":  "Como parte de esta maniobra realizas un ataque cuerpo a cuerpo. Si el ataque es exitoso, una cuadrilla de goblins obreros es invocada, que de inmediato construyen una pequeña casa alrededor de la criatura objetivo y luego te invitan a birra."
    }
];