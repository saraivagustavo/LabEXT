export default {
	
	getData: () =>
	{
		let rua = appsmith.store.personalResidence['rua'];
		let numero = appsmith.store.personalResidence['numero'];
		let cidade = appsmith.store.personalResidence['cidade'];
		let estado = appsmith.store.personalResidence['estado'];
		let resideNoBrasil = appsmith.store.personalResidence['resideNoBrasil'];
		let cep = appsmith.store.personalResidence['cep'];
		let bairro = appsmith.store.personalResidence['bairro'];
		let logradouro = appsmith.store.personalResidence['logradouro'];
		let complemento = appsmith.store.personalResidence['complemento'];
		let telefone = appsmith.store.personalResidence['telefone'];
		let celular = appsmith.store.personalResidence['celular'];
		return {rua, numero, cidade, estado, resideNoBrasil, cep, bairro, logradouro, complemento, telefone, celular};
	}
}