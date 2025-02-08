export default {
	
	armazenarInfos: () => {
	const array = { nome: full_name.text, data_nascimento: date_of_birth.selectedDate, email: email.text, nome_da_mae: mother_name.text, cpf: cpf.text,senha: password.text, nome_do_pai: father_name.text, numero_celular: phone_number.text,rg: rg.text, emissor: org_emissor.text, uf: uf.selectedOptionValue, emissao: date_emissao.selectedDate, genero: sex.selectedOptionValue, raca: raca_cor.selectedOptionValue};
	storeValue("personalData", array);
	}
	
}