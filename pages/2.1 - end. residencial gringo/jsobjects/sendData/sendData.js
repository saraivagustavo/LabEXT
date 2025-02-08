export default {
	
	storageData: () => {
		const array = {residenobrasil:residesinbrazil.selectedOptionValue,pais:country.text, estado:state.selectedOptionValue,zip_code:zip_code.text,bairro:neighborhood.text, cidade:city.text, numero:number.text, rua:street.text};
		storeValue("personalResidence", array);
	}
}