export default {
	storageData: () => {
		const array = {residenobrasil:residentinbrazil.selectedOptionValue,pais:country.text, estado:state.selectedOptionValue, zip_code:zip_code.text, cidade:city.text, bairro:neighborhood.text,rua: street.text, numero:number.text,]};
		storeValue("professionalResidence", array);
	}
}