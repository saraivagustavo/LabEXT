export default {
	
	getData: () => 
	{
		let nome = appsmith.store.personalData['nome'];
		let cpf = appsmith.store.personalData['cpf'];
		let genero = appsmith.store.personalData['genero'];
		let data_nascimento = appsmith.store.personalData['data_nascimento'];
		let rg = appsmith.store.personalData['rg'];
		let email = appsmith.store.personalData['email'];
		let celular = appsmith.store.personalData['numero_celular'];
		let nome_da_mae = appsmith.store.personalData['nome_da_mae'];
		let nome_do_pai = appsmith.store.personalData['nome_do_pai'];
		let senha = appsmith.store.personalData['senha'];
		let orgao_emissor = appsmith.store.personalData['emissor'];
		let data_emissao = appsmith.store.personalData['emissao'];
		let uf = appsmith.store.personalData['uf'];
		let raca = appsmith.store.personalData['raca'];
		return {nome, cpf, genero, data_nascimento,rg,email,celular,nome_da_mae, nome_do_pai, senha, orgao_emissor, data_emissao, uf, raca};
	}
}