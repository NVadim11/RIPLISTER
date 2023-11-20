import i18next from 'i18next'

i18next.init({
  lng: "en", 
  resources: {
    en: {
      translation: {
        key: "hello world"
      }
    }
  },
	lng: "ua",
	resources: {
		ua: {
			translation: {
				key: "test123"
			}
		}		
	}
})

i18next.changeLanguage("en");
console.log(i18next.t("key"));