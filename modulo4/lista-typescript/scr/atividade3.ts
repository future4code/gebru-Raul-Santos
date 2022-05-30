enum GENERO {
	ACAO="Terror",
	DRAMA="comédia",
	COMEDIA="comédia",
	ROMANCE="drama",
	TERROR="Ação"
}

type Descrição = {
    nome: string,
    anoLançamento: number,
    genero: GENERO,
    pontuação: number
}