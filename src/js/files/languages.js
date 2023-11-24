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
        "thanksPopupText": "Дякуємо вам за підписку!",
        "thanksPopupBtn": "Продовжити",
        "promoVideoLabel": "Закрити",
        "promoPopupTitle": "Спадок пам'яті, що об'єднує нас.",
        "promoPopup__about1": "Ласкаво просимо до нашого проєкту! Ми - команда ентузіастів, які працюють над створенням унікального вебсайту, який надасть можливість легко знайти місце поховання людини, що вас цікавить, а також допомогти відшукати ваші коріння та родинні зв'язки.",
        "promoPopup__about2": "Ми знаємо, як важливо мати зручну та надійну платформу, яка допоможе знайти поховання за ім'ям та прізвищем. Наша команда працює над створенням потужної бази даних, що охоплюватиме поховання з різних країн та регіонів, щоб забезпечити найактуальнішу інформацію.",
        "promoPopup__about3": "Наш сайт також надасть можливість створити сторінку пам'яті для вашої рідної людини. На цій особистій сторінці ви зможете поділитися фотографіями, спогадами та іншими матеріалами, які нагадують вам про вашого близького. Це буде місце, де ви зможете зібрати пам'ять про вашого рідного та запросити інших людей долучитися до вшанування його пам'яті, залишивши слова шани, запалюючи віртуальну свічку чи зробивши підношення у вигляді віртуального букета квітів.",
        "promoPopup__about4": "У нашому проєкті ми також пропонуємо різноманітні послуги, які допоможуть вам дбати про могилу вашого близького. Ви зможете замовити послугу з прибирання могили, яка дозволить підтримувати її в чистоті та порядку. Крім того, ми пропонуємо нанесення QR-коду на могилу, який дозволить людям перейти на сторінку пам'яті вашого рідного. Це створить можливість для кожного, хто відвідує могилу, дізнатися більше про людину, що похована там, і висловити свою шану та повагу.",
        "promoPopup__about5": "Ми з великим запалом продовжуємо працювати над розробкою сайту, щоб забезпечити вам якісну та інтуїтивно зрозумілу платформу. Наша мета - зробити процес пошуку місць поховання, вшанування пам'яті та догляду за могилами простими та доступними для всіх.",
        "promoPopup__about6": "Приєднуйтесь до нас, аби бути в курсі розвитку проєкту та мати можливість робити свій внесок у розширення світової бази поховань. Разом ми зможемо створити особливе місце, де пам'ять про наших рідних буде жити назавжди.",
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
        "thanksPopupText": "Thank you for subscribing!",
        "thanksPopupBtn": "Continue",
        "promoVideoLabel": "Close",
        "promoPopupTitle": "Legacy of memory that unites us.",
        "promoPopup__about1": "Welcome to our project! We are a team of enthusiasts working on creating a unique website that will allow you to easily find the burial place of a person you're interested in and help you discover your roots and family connections.",
        "promoPopup__about2": "We understand the importance of having a convenient and reliable platform that can help locate burials by name and surname. Our team is working on building a powerful database that will cover burials from different countries and regions to provide the most up-to-date information.",
        "promoPopup__about3": "Our website will also provide the opportunity to create a memorial page for your loved ones. On this personal page, you'll be able to share photos, memories, and other materials that remind you of your dear ones. It will be a place where you can gather memories of your loved ones and invite others to join in honoring their memory by leaving words of tribute, lighting a virtual candle, or offering virtual flower arrangements.",
        "promoPopup__about4": "In our project, we also offer various services to help you care for the grave of your loved one. You'll be able to request a grave maintenance service to keep it clean and tidy. Additionally, we provide the option to add a QR code to the grave, allowing people to visit the memorial page of your loved one. This creates an opportunity for anyone visiting the grave to learn more about the person buried there and express their respect and tribute.",
        "promoPopup__about5": "We are passionate about continuing our work on developing the website to provide you with a high-quality and user-friendly platform. Our goal is to make the process of searching for burial places, honoring memories, and caring for graves simple and accessible to everyone.",
        "promoPopup__about6": "Join us to stay updated on the project's development and have the opportunity to contribute to the expansion of the global burial database. Together, we can create a special place where the memory of our loved ones will live forever.",
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
 document.querySelector(".promo__link a").innerHTML = i18next.t("promoLink");
 document.querySelector(".promo__orangeText").innerHTML = i18next.t("promoOrangeText");
 document.querySelector(".promo__input-btn").innerHTML = i18next.t("promoInputBtn");
 document.querySelector(".promoPopup__input-btn").innerHTML = i18next.t("promoInputBtn");
 document.querySelector(".promo__socialsText").innerHTML = i18next.t("socialsText");
 document.querySelector(".promoPopup__socialsText h4").innerHTML = i18next.t("socialsText");
 document.querySelector(".promo__whiteTitleFirst").innerHTML = i18next.t("whiteTitleFirst");
 document.querySelector(".promo__whiteTitleSecond").innerHTML = i18next.t("whiteTitleSecond");
//  document.querySelector(".promo__video-text").innerHTML = i18next.t("promoVideoText");
 document.querySelector(".headerAlt__langBtn span").innerHTML = i18next.t("promoDisplayLng");
 document.querySelector(".popupThanks__Text h4").innerHTML = i18next.t("thanksPopupText");
 document.querySelector(".popupThanks__closeBtn").innerHTML = i18next.t("thanksPopupBtn");
 document.querySelector(".promoPopup__orangeText h4").innerHTML = i18next.t("promoOrangeText");
 document.querySelector(".popupVideo__close label").innerHTML = i18next.t("promoVideoLabel");
 document.querySelector(".promoPopup__title").innerHTML = i18next.t("promoPopupTitle");
document.querySelector(".promoPopup__about1").innerHTML = i18next.t("promoPopup__about1");
document.querySelector(".promoPopup__about2").innerHTML = i18next.t("promoPopup__about2");
document.querySelector(".promoPopup__about3").innerHTML = i18next.t("promoPopup__about3");
document.querySelector(".promoPopup__about4").innerHTML = i18next.t("promoPopup__about4");
document.querySelector(".promoPopup__about5").innerHTML = i18next.t("promoPopup__about5");
document.querySelector(".promoPopup__about6").innerHTML = i18next.t("promoPopup__about6");
}
export default function changeLng(lng) {
  i18next.changeLanguage(lng);
}
i18next.on("languageChanged", () => {
  updateContent();
});