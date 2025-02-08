export default {
	
	storageData: () => {
		const array = {resideNoBrasil:residesinbrazil.selectedOptionValue, cep:zip_code.text,estado: state.selectedOptionValue,telefone: telephone.dialCode, cidade: city.text, bairro: neighborhood.text,celular: cellphone.dialCode, rua: street.text, numero: number.text,logradouro: publicplace.text, complemento: complement.text};
		storeValue("personalResidence", array);
	}

}
