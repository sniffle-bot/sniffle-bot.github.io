// static/js/terms.js
// This script handles language switching specifically for the Terms of Service page.

// --- BEGIN: Translations ---
// Object containing translations for the Terms of Service page.
// Each top-level key is a language code (e.g., 'en', 'ru').
// Each second-level key corresponds to an element ID in the HTML.
const termsTranslations = {
    en: {
        'terms-of-service-title': 'Terms of Service',
        'last-updated': 'Last Updated:',
        'terms-intro': 'Welcome to Sniffle Bot ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our Telegram bot ("Bot" or "Service"). By accessing or using the Bot, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Bot.',
        'service-description-title': '1. Description of Service',
        'service-description-text': 'Sniffle Bot is a tool designed for Open Source Intelligence (OSINT) gathering. It provides functionalities such as username searches, IP geolocation, email lookups (Premium), and social media reconnaissance (Premium) directly within the Telegram platform. The service is intended for use by security professionals, researchers, and investigators.',
        'eligibility-title': '2. Eligibility',
        'eligibility-text': 'You must be at least 18 years old to use this Bot. By using the Bot, you represent and warrant that you are at least 18 years old and have the right, authority, and capacity to enter into these Terms.',
        'account-registration-title': '3. Account Registration',
        'account-registration-text': 'To use certain features of the Bot, you may be required to interact with it via your Telegram account. You agree to provide accurate and complete information when interacting with the Bot and to update such information as necessary to maintain its accuracy.',
        'use-of-service-title': '4. Use of Service',
        'use-of-service-text': 'You agree to use the Bot only for lawful purposes and in accordance with these Terms. You will not use the Bot to violate any applicable local, state, national, or international law or regulation. You will not use the Bot to harass, abuse, spam, harm, defraud, impersonate, or intimidate people or entities. You understand that your use of the Bot must comply with Telegram\'s Terms of Service and its policies. You are solely responsible for your conduct and any data, text, information, usernames, graphics, photos, profiles, audio, and video clips, links ("Content") that you submit, post, and display through the Bot.',
        'use-of-service-list-1': 'You will not use the Bot to violate any applicable local, state, national, or international law or regulation.',
        'use-of-service-list-2': 'You will not use the Bot to harass, abuse, spam, harm, defraud, impersonate, or intimidate people or entities.',
        'use-of-service-list-3': 'You understand that your use of the Bot must comply with Telegram\'s Terms of Service and its policies.',
        'use-of-service-list-4': 'You are solely responsible for your conduct and any data, text, information, usernames, graphics, photos, profiles, audio, and video clips, links ("Content") that you submit, post, and display through the Bot.',
        'intellectual-property-title': '5. Intellectual Property',
        'intellectual-property-text': 'The Bot and its original content, features, and functionality are and will remain the exclusive property of Sniffle Bot and its licensors. The Bot is protected by copyright, trademark, and other laws of both the Russian Federation and foreign countries.',
        'subscriptions-payments-title': '6. Subscriptions & Payments',
        'subscriptions-payments-text': 'Certain features of the Bot are available only with a Premium subscription. Subscriptions are purchased via Telegram Stars within the Telegram application.',
        'subscriptions-payments-list-1': 'Payments are handled entirely by Telegram. We do not receive or process payment information directly.',
        'subscriptions-payments-list-2': 'Subscription fees are paid in advance and are non-refundable, except at Telegram\'s sole discretion.',
        'subscriptions-payments-list-3': 'You can manage your subscription and auto-renewal settings directly in your Telegram app.',
        'subscriptions-payments-list-4': 'We reserve the right to modify subscription fees at any time. Any changes will be communicated in advance.',
        'data-privacy-title': '7. Data Privacy',
        'data-privacy-text': 'Your privacy is important to us. Our collection and use of your information is described in our Privacy Policy. By using the Bot, you consent to the collection and use of information in accordance with our Privacy Policy.',
        'disclaimer-warranties-title': '8. Disclaimer of Warranties',
        'disclaimer-warranties-text': 'THE BOT IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. USE OF THE BOT IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE BOT IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE BOT WILL BE UNINTERRUPTED OR ERROR-FREE.',
        'limitation-liability-title': '9. Limitation of Liability',
        'limitation-liability-text': 'IN NO EVENT SHALL SNIFFLE BOT, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE BOT; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE BOT; (III) ANY CONTENT OBTAINED FROM THE BOT; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.',
        'termination-title': '10. Termination',
        'termination-text': 'We may terminate or suspend access to our Bot immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.',
        'changes-terms-title': '11. Changes to Terms',
        'changes-terms-text': 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 7 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
        'contact-us-title': '12. Contact Us',
        'contact-us-text': 'If you have any questions regarding these Terms, please contact us via the support email provided in the Support tab.',
        'terms-agreement-text': 'By using Sniffle Bot, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
        'footer-text': 'Sniffle. All rights reserved.'
    },
    ru: {
        'terms-of-service-title': 'Условия использования',
        'last-updated': 'Последнее обновление:',
        'terms-intro': 'Добро пожаловать в Sniffle Bot ("мы", "нас" или "наш"). Настоящие Условия использования ("Условия") регулируют ваш доступ к нашему Telegram-боту ("Бот" или "Сервис") и его использование. Получая доступ к Боту или используя его, вы соглашаетесь соблюдать настоящие Условия. Если вы не согласны с какой-либо частью условий, вы не имеете права получить доступ к Боту.',
        'service-description-title': '1. Описание Сервиса',
        'service-description-text': 'Sniffle Bot - это инструмент, предназначенный для сбора разведывательной информации из открытых источников (OSINT). Он предоставляет такие функции, как поиск по именам пользователей, геолокация IP-адресов, поиск по электронной почте и др. непосредственно в платформе Telegram. Сервис предназначен для использования специалистами по безопасности, исследователями и обычными людьми.',
        'eligibility-title': '2. Право на участие',
        'eligibility-text': 'Вам должно быть не менее 18 лет для использования этого Бота. Используя Бота, вы заявляете и гарантируете, что вам не менее 18 лет и у вас есть право, полномочия и способность заключить настоящие Условия.',
        'account-registration-title': '3. Регистрация аккаунта',
        'account-registration-text': 'Для использования определенных функций Бота может потребоваться взаимодействие с ним через вашу учетную запись Telegram. Вы соглашаетесь предоставлять точную и полную информацию при взаимодействии с Ботом и обновлять такую информацию по мере необходимости для обеспечения ее точности.',
        'use-of-service-title': '4. Использование Сервиса',
        'use-of-service-text': 'Вы соглашаетесь использовать Бота только в законных целях и в соответствии с настоящими Условиями. Вы не будете использовать Бота для нарушения какого-либо применимого местного, государственного, национального или международного закона или нормативного акта. Вы не будете использовать Бота для преследования, оскорбления, рассылки спама, причинения вреда, мошенничества, выдачи себя за кого-либо или запугивания людей или организаций. Вы понимаете, что использование вами Бота должно соответствовать Условиям использования Telegram и его политикам. Вы несете единоличную ответственность за ваше поведение и любые данные, текст, информацию, имена пользователей, графику, фотографии, профили, аудио- и видеоклипы, ссылки ("Контент"), которые вы отправляете, публикуете и отображаете через Бота.',
        'use-of-service-list-1': 'Вы не будете использовать бота для нарушения каких-либо применимых местных, государственных, национальных или международных законов или нормативных актов.',
        'use-of-service-list-2': 'Вы не будете использовать бота для преследования, оскорблений, рассылки спама, нанесения вреда, обмана, выдачи себя за других или запугивания людей или организаций.',
        'use-of-service-list-3': 'Вы понимаете, что использование вами бота должно соответствовать Условиям предоставления услуг Telegram и его политике.',
        'use-of-service-list-4': 'Вы несете единоличную ответственность за свое поведение и любые данные, текст, информацию, имена пользователей, графику, фотографии, профили, аудио- и видеоклипы, ссылки ("Контент"), которые вы отправляете, публикуете и показываете с помощью бота.',
        'intellectual-property-title': '5. Интеллектуальная собственность',
        'intellectual-property-text': 'Бот и его оригинальный контент, функции и функциональность являются и останутся исключительной собственностью Sniffle Bot и его лицензиаров. Бот защищен авторским правом, товарным знаком и другими законами Российской Федерации и зарубежных стран.',
        'subscriptions-payments-title': '6. Подписки и Платежи',
        'subscriptions-payments-text': 'Определенные функции Бота доступны только с премиум-подпиской. Подписки приобретаются через Telegram Stars в приложении Telegram.',
        'subscriptions-payments-list-1': 'Платежи обрабатываются исключительно Telegram. Мы не получаем и не обрабатываем платежную информацию напрямую.',
        'subscriptions-payments-list-2': 'Плата за подписку оплачивается заранее и не подлежит возврату, за исключением случаев, определяемых исключительно по усмотрению Telegram.',
        'subscriptions-payments-list-3': 'Вы можете управлять своей подпиской и настройками автоматического продления непосредственно в вашем приложении Telegram.',
        'subscriptions-payments-list-4': 'Мы оставляем за собой право изменить плату за подписку в любое время. Любые изменения будут сообщены заранее.',
        'data-privacy-title': '7. Конфиденциальность данных',
        'data-privacy-text': 'Ваша конфиденциальность важна для нас. Наш сбор и использование вашей информации описаны в нашей Политике конфиденциальности. Используя Бота, вы даете согласие на сбор и использование информации в соответствии с нашей Политикой конфиденциальности.',
        'disclaimer-warranties-title': '8. Отказ от гарантий',
        'disclaimer-warranties-text': 'БОТ ПРЕДОСТАВЛЯЕТСЯ НА ОСНОВАНИИ "КАК ЕСТЬ" И "КАК ДОСТУПЕН". ИСПОЛЬЗОВАНИЕ БОТА ПРОИСХОДИТ НА ВАШ СОБСТВЕННЫЙ РИСК. В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ПРИМЕНИМЫМ ЗАКОНОДАТЕЛЬСТВОМ, БОТ ПРЕДОСТАВЛЯЕТСЯ БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ПОДРАЗУМЕВАЕМЫМИ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ, ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ ИЛИ НЕНАРУШЕНИЯ ПРАВ. МЫ НЕ ГАРАНТИРУЕМ, ЧТО БОТ БУДЕТ РАБОТАТЬ БЕЗ ПЕРЕБОЕВ ИЛИ БЕЗ ОШИБОК.',
        'limitation-liability-title': '9. Ограничение ответственности',
        'limitation-liability-text': 'НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ SNIFFLE BOT, А ТАКЖЕ ЕГО ДИРЕКТОРЫ, СОТРУДНИКИ, ПАРТНЕРЫ, АГЕНТЫ, ПОСТАВЩИКИ ИЛИ ДОЧЕРНИЕ КОМПАНИИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ОСОБЫЕ, ПОСЛЕДУЮЩИЕ ИЛИ ШТРАФНЫЕ УБЫТКИ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ПОТЕРЮ ПРИБЫЛИ, ДАННЫХ, ИСПОЛЬЗОВАНИЯ, ДЕЛОВОЙ РЕПУТАЦИИ ИЛИ ДРУГИХ НЕМАТЕРИАЛЬНЫХ ПОТЕРЬ, ВОЗНИКШИХ В РЕЗУЛЬТАТЕ (I) ВАШЕГО ДОСТУПА К БОТУ ИЛИ ИСПОЛЬЗОВАНИЯ ИЛИ НЕВОЗМОЖНОСТИ ДОСТУПА К БОТУ ИЛИ ИСПОЛЬЗОВАНИЯ ЕГО; (II) ЛЮБОГО ПОВЕДЕНИЯ ИЛИ СОДЕРЖАНИЯ ЛЮБОЙ ТРЕТЬЕЙ СТОРОНЫ НА БОТУ; (III) ЛЮБОГО СОДЕРЖАНИЯ, ПОЛУЧЕННОГО ИЗ БОТА; И (IV) НЕСАНКЦИОНИРОВАННОГО ДОСТУПА, ИСПОЛЬЗОВАНИЯ ИЛИ ИЗМЕНЕНИЯ ВАШИХ ПЕРЕДАЧ ИЛИ СОДЕРЖАНИЯ, НЕЗАВИСИМО ОТ ТОГО, ОСНОВАНО ЛИ ЭТО НА ГАРАНТИИ, КОНТРАКТЕ, ДЕЛИКТЕ (ВКЛЮЧАЯ ХАЛАТНОСТЬ) ИЛИ ЛЮБОЙ ДРУГОЙ ПРАВОВОЙ ТЕОРИИ, БЫЛИ ЛИ МЫ ПРОИНФОРМИРОВАНЫ О ВОЗМОЖНОСТИ ТАКОГО УЩЕРБА.',
        'termination-title': '10. Расторжение',
        'termination-text': 'Мы можем немедленно прекратить или приостановить доступ к нашему Боту без предварительного уведомления или ответственности по любой причине, включая, помимо прочего, нарушение вами Условий. Все положения Условий, которые по своей сути должны выжить после прекращения действия, сохраняют силу после прекращения действия, включая, помимо прочего, положения о собственности, отказы от гарантий, возмещении убытков и ограничениях ответственности.',
        'changes-terms-title': '11. Изменения условий',
        'changes-terms-text': 'Мы оставляем за собой право по нашему собственному усмотрению изменять или заменять настоящие Условия в любое время. Если изменение является существенным, мы постараемся уведомить вас не менее чем за 7 дней до вступления в силу новых условий. Что составляет существенное изменение, будет определяться по нашему собственному усмотрению.',
        'contact-us-title': '12. Связаться с нами',
        'contact-us-text': 'Если у вас есть какие-либо вопросы относительно настоящих Условий, пожалуйста, свяжитесь с нами через почту поддержки, представленную во вкладке Support.',
        'terms-agreement-text': 'Используя Sniffle Bot, вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия использования.',
        'footer-text': 'Sniffle. Все права защищены.'
    }
};
// --- END: Translations ---

// --- BEGIN: DOM Elements ---
// Get references to DOM elements that will be updated or used.
const languageToggle = document.getElementById('languageToggle');
const currentYearElement = document.getElementById('currentYear');
const footerTextElement = document.getElementById('footer-text');
// --- END: DOM Elements ---

// --- BEGIN: Language Management ---
// Get the user's preferred language from localStorage or default to 'en'.
let currentLanguage = localStorage.getItem('language') || 'en';
// Ensure the language is either 'en' or 'ru'. Default to 'en' if not.
if (!['en', 'ru'].includes(currentLanguage)) {
    currentLanguage = 'en';
}

/**
 * Updates the content of the page based on the selected language.
 * @param {string} lang - The language code ('en' or 'ru').
 */
function updateTermsPageContent(lang) {
    // Select all elements with an ID attribute.
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        // Check if there's a translation for this element ID in the selected language.
        if (termsTranslations[lang] && termsTranslations[lang][key]) {
            // Handle input and textarea elements differently (placeholder text).
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = termsTranslations[lang][key];
            } else {
                // For all other elements, update the text content.
                // This replaces the entire content, which is suitable for this page
                // as there are no complex nested elements with mixed content like badges.
                element.textContent = termsTranslations[lang][key];
            }
        }
    });

    // Update the footer text separately to include the dynamic year.
    if (footerTextElement && termsTranslations[lang]['footer-text']) {
        footerTextElement.innerHTML = `&copy; ${new Date().getFullYear()} ${termsTranslations[lang]['footer-text']}`;
    }
    // Note: The date in the "Last Updated" section is static and defined in the HTML.
    // If you want it to be dynamic, you would update it here as well.
    // const lastUpdatedDateElement = document.getElementById('last-updated-date');
    // if (lastUpdatedDateElement) {
    //     lastUpdatedDateElement.textContent = new Date().toLocaleDateString(lang); // Or a fixed format
    // }
}

/**
 * Updates the icon/text on the language toggle button based on the current language.
 * @param {string} lang - The current language code ('en' or 'ru').
 */
function updateLanguageIcon(lang) {
    if (languageToggle) {
        // Simple text indicator for language. Could be replaced with flag icons or Lucide icons.
        languageToggle.textContent = lang === 'en' ? 'RU' : 'EN';
    }
}

/**
 * Sets up the event listener for the language toggle button.
 */
function setupLanguageToggle() {
    languageToggle?.addEventListener('click', () => {
        // Toggle the language.
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        // Save the selected language to localStorage for persistence.
        localStorage.setItem('language', currentLanguage);
        // Update the page content and button icon.
        updateTermsPageContent(currentLanguage);
        updateLanguageIcon(currentLanguage);

        // Re-initialize Lucide icons if they were used and might have changed.
        // This is important if the HTML for icons was updated via innerHTML.
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    });
}
// --- END: Language Management ---

// --- BEGIN: Initialization ---
// Run code once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Set the current year in the footer.
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Perform initial setup: update content, icon, and set up the toggle button.
    updateTermsPageContent(currentLanguage);
    updateLanguageIcon(currentLanguage);
    setupLanguageToggle();

    // Initialize any Lucide icons present in the initial HTML.
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
});
// --- END: Initialization ---