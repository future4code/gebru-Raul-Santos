enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Descrição = {
    nome: string,
    anoLançamento: number,
    genero: GENERO,
    pontuação: number
}