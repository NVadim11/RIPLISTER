import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
.use(LanguageDetector)
.init({	
  fallbackLng: "ua",
  debug: true,
  resources: {
    ua: {
      translation: {
        "promoTitle": "Спадок пам'яті, що об'єднує нас.",
				"promoDescr": "RIPlister народився з бажанням не лише для полегшення пошуку місць поховання та підвищення рівня догляду за могилами, але й з метою створення простору для збереження спогадів і формування родинного архіву. Цей проект спрямований на підтримку пам'яті про близьких людей та важливі моменти, створення місця, де можна зберігати найдорожчі історії та спогади.",
				"promoLink": "Детальніше про проект",
				"promoOrangeText": "Бажаєте бути серед перших, хто долучиться до цієї ініціативи? Підпишіться, щоб мати можливість скористатися нею з моменту запуску.",
				"promoInputBtn": "Підписатися",
				"socialsText": "Також додавайся до наших сторінок у соцмережах",
				"whiteTitleFirst": "Спадок пам'яті,",
				"whiteTitleSecond": "що об'єднує нас.",
				"promoVideoText": "Подивитись відео	про RIPlister",
				"promoDisplayLng": "УКР",
      }
    },
    en: {
      translation: {
				"promoTitle": "Legacy of memory that unites us.",
				"promoDescr": "RIPlister was born not only to facilitate the search for burial places and enhance the care levels for graves but also with the purpose of creating a space for preserving memories and forming a family archive. This project is aimed at supporting the memory of loved ones and significant moments, establishing a place to store the most cherished stories and memories.",
				"promoLink": "More about the project",
				"promoOrangeText": "Would you like to be among the first to join this initiative? Subscribe now to ensure early access upon its launch.",
				"promoInputBtn": "Subscribe",
				"socialsText": "Also, join our social media pages for updates.",
				"whiteTitleFirst": "Legacy of memory",
				"whiteTitleSecond": "that unites us.",
				"promoVideoText": "Watch a video about RIPlister",
				"promoDisplayLng": "ENG",
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
 document.querySelector(".promo__headerTitle").innerHTML = i18next.t("promoTitle");
 document.querySelector(".promo__descr").innerHTML = i18next.t("promoDescr");
 document.querySelector(".promo__link").innerHTML = i18next.t("promoLink");
 document.querySelector(".promo__orangeText").innerHTML = i18next.t("promoOrangeText");
 document.querySelector(".promo__input-btn").innerHTML = i18next.t("promoInputBtn");
 document.querySelector(".promo__socialsText").innerHTML = i18next.t("socialsText");
 document.querySelector(".promo__whiteTitleFirst").innerHTML = i18next.t("whiteTitleFirst");
 document.querySelector(".promo__whiteTitleSecond").innerHTML = i18next.t("whiteTitleSecond");
 document.querySelector(".promo__video-text").innerHTML = i18next.t("promoVideoText");
 document.querySelector(".headerAlt__langBtn span").innerHTML = i18next.t("promoDisplayLng");
}
export default function changeLng(lng) {
  i18next.changeLanguage(lng);
}
i18next.on("languageChanged", () => {
  updateContent();
});