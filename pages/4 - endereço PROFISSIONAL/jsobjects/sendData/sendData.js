export default {
	storageData: () => {
		const array = {residenobrasil:residesinbrazil.selectedOptionValue,cep:zip_code.text, estado:state.selectedOptionValue,telefone:telephone.dialCode,cidade:city.text, bairro:neighborhood.text, celular:cellphone.dialCode, rua:street.text, numero:number.text, logradouro:publicplace.text, complemento:Input2.text};
		storeValue("professionalResidence", array);
	}

}