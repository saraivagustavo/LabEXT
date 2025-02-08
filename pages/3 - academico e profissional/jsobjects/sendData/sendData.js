export default {
	storageData: () => {
		const array = {lattes:link_lattes.text, nvAcademico:nivel_academico.selectedOptionValue, area_conhecimento1:area_conhecimento_1.selectedOptionValue, area_conhecimento2:area_conhecimento_2.selectedOptionValue, area_conhecimento3: area_conhecimento_3.selectedOptionValue};
		
		storeValue("academicData", array);
	}
}