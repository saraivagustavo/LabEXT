export default {
	
	getData: () =>
	{
		let rua = appsmith.store.professionalResidence['rua'];
		let numero = appsmith.store.professionalResidence['numero'];
		let cidade = appsmith.store.professionalResidence['cidade'];
		let estado = appsmith.store.professionalResidence['estado'];
		let resideNoBrasil = appsmith.store.professionalResidence['residenobrasil'];
		let cep = appsmith.store.professionalResidence['cep'];
		let bairro = appsmith.store.professionalResidence['bairro'];
		let logradouro = appsmith.store.professionalResidence['logradouro'];
		let complemento = appsmith.store.professionalResidence['complemento'];
		let telefone = appsmith.store.professionalResidence['telefone'];
		let celular = appsmith.store.professionalResidence['celular'];
		return {rua, numero, cidade, estado, resideNoBrasil, cep, bairro, logradouro, complemento, telefone, celular};
	}
}