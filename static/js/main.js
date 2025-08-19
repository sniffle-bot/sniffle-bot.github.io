// Объект переводов
const translations = {
    en: {
        'hero-title': 'Advanced OSINT Tools',
        'hero-subtitle': 'Powerful intelligence gathering tools built for security professionals, researchers, and investigators. Access comprehensive data across multiple platforms directly from Telegram.',
        'features-title': 'Features',
        'feature-1-title': 'Username Search',
        'feature-1-desc': 'Find profiles across multiple social media platforms and websites using username lookups.',
        'feature-2-title': 'IP Geolocation',
        'feature-2-desc': 'Get detailed geographical information and network details for any IP address.',
        'feature-3-title': 'Email Search',
        'feature-3-desc': 'Find associated accounts, breaches, and online presence linked to email addresses.',
        'feature-4-title': 'Blackbird OSINT',
        'feature-4-desc': 'Advanced social media reconnaissance with comprehensive profile analysis.',
        'why-choose-title': 'Why Choose Our OSINT Bot?',
        'why-choose-subtitle': 'Built by security professionals, for security professionals. Experience the difference.',
        'why-choose-1-title': 'All in Telegram',
        'why-choose-1-desc': 'No need to switch apps. Access powerful OSINT tools directly in your favorite messaging platform.',
        'why-choose-2-title': 'Lightning Fast',
        'why-choose-2-desc': 'Get instant results with our optimized search algorithms and global data sources.',
        'why-choose-3-title': 'Privacy First',
        'why-choose-3-desc': 'Your searches remain private and secure. We don\'t log or store your investigation data.',
        'pricing-title': 'Pricing Plans',
        'pricing-subtitle': 'Choose the plan that works best for your needs.',
        'plan-free-title': 'Free',
        'plan-free-feature-1': 'Username Search',
        'plan-free-feature-2': 'IP Geolocation',
        'plan-free-feature-3': 'Basic Profile Analysis',
        'plan-free-feature-4': 'Limited Monthly Searches',
        'plan-free-try': 'Try Free',
        'plan-premium-title': 'Premium',
        'plan-premium-period': 'stars per month',
        'plan-premium-feature-1': 'All Free Features',
        'plan-premium-feature-2': 'Email Search',
        'plan-premium-feature-3': 'Blackbird OSINT',
        'plan-premium-feature-4': 'Unlimited Daily Searches',
        'plan-premium-feature-5': 'Priority Support',
        'plan-premium-feature-6': 'Advanced Analytics',
        'plan-premium-try': 'Get Premium in Bot',
        "pay_in_tg": 'Purchase directly in our Telegram bot',
        'faq-title': 'Frequently Asked Questions',
        'faq-1-title': 'How does the bot work?',
        'faq-1-desc': 'Our bot uses advanced algorithms to search across multiple platforms and databases to provide you with comprehensive information about usernames, emails, and IP addresses. All searches are performed securely within the Telegram environment.',
        'faq-2-title': 'Is my data secure?',
        'faq-2-desc': 'Yes, we prioritize your privacy. We don\'t store your search queries or personal information. All data is processed securely and deleted immediately after use.',
        'faq-3-title': 'What makes your bot different?',
        'faq-3-desc': 'Our bot is built by security professionals for security professionals. We offer lightning-fast results, comprehensive data coverage, and a seamless experience all within Telegram without needing to switch between multiple applications.',
        'faq-4-title': 'Can I use this for professional investigations?',
        'faq-4-desc': 'Absolutely! Our tool is designed for security professionals, investigators, and researchers who need reliable OSINT capabilities. The premium version offers advanced features for professional use cases.',
        'footer-text': 'Sniffle. All rights reserved.'
    },
    ru: {
        'hero-title': 'Продвинутые инструменты OSINT',
        'hero-subtitle': 'Мощные инструменты сбора информации, разработанные для специалистов в области безопасности, исследователей и расследователей. Получайте полные данные с множества платформ напрямую из Telegram.',
        'features-title': 'Функции',
        'feature-1-title': 'Поиск по имени пользователя',
        'feature-1-desc': 'Найдите профили в различных социальных сетях и на сайтах по имени пользователя.',
        'feature-2-title': 'Геолокация IP',
        'feature-2-desc': 'Получите подробную географическую информацию и сетевые данные по любому IP-адресу.',
        'feature-3-title': 'Поиск по Email',
        'feature-3-desc': 'Найдите связанные аккаунты, утечки и онлайн-присутствие по адресу электронной почты.',
        'feature-4-title': 'Blackbird OSINT',
        'feature-4-desc': 'Продвинутый разведывательный анализ социальных сетей с подробным анализом профилей.',
        'why-choose-title': 'Почему выбрать наш бот OSINT?',
        'why-choose-subtitle': 'Создано профессионалами в области безопасности для профессионалов. Почувствуйте разницу.',
        'why-choose-1-title': 'Все в Telegram',
        'why-choose-1-desc': 'Нет необходимости переключаться между приложениями. Доступ к мощным инструментам OSINT прямо в вашей любимой мессенджер-платформе.',
        'why-choose-2-title': 'Молниеносно быстро',
        'why-choose-2-desc': 'Получайте мгновенные результаты с помощью наших оптимизированных алгоритмов поиска и глобальных источников данных.',
        'why-choose-3-title': 'Конфиденциальность в приоритете',
        'why-choose-3-desc': 'Ваши поисковые запросы остаются конфиденциальными и безопасными. Мы не записываем и не храним данные ваших расследований.',
        'pricing-title': 'Тарифные планы',
        'pricing-subtitle': 'Выберите план, который лучше всего подходит для ваших нужд.',
        'plan-free-title': 'Бесплатный',
        'plan-free-feature-1': 'Поиск по имени пользователя',
        'plan-free-feature-2': 'Геолокация IP',
        'plan-free-feature-3': 'Базовый анализ профиля',
        'plan-free-feature-4': 'Ограниченное количество ежемесячных поисков',
        'plan-free-try': 'Начать бесплатно',
        'plan-premium-title': 'Премиум',
        'plan-premium-period': 'звезд в месяц',
        'plan-premium-feature-1': 'Все функции бесплатного плана',
        'plan-premium-feature-2': 'Поиск по Email',
        'plan-premium-feature-3': 'Blackbird OSINT',
        'plan-premium-feature-4': 'Неограниченное количество ежедневных поисков',
        'plan-premium-feature-5': 'Приоритетная поддержка',
        'plan-premium-feature-6': 'Расширенная аналитика',
        'plan-premium-try': 'Получить премиум в боте',
        "pay_in_tg": "Оплата в телеграм боте",
        'faq-title': 'Часто задаваемые вопросы',
        'faq-1-title': 'Как работает бот?',
        'faq-1-desc': 'Наш бот использует передовые алгоритмы для поиска в различных платформах и базах данных, чтобы предоставить вам исчерпывающую информацию об именах пользователей, электронных адресах и IP-адресах. Все поиски выполняются безопасно в среде Telegram.',
        'faq-2-title': 'Мои данные в безопасности?',
        'faq-2-desc': 'Да, мы приоритетно относимся к вашей конфиденциальности. Мы не храним ваши поисковые запросы или личную информацию. Все данные обрабатываются безопасно и удаляются сразу после использования.',
        'faq-3-title': 'Что делает вашего бота особенным?',
        'faq-3-desc': 'Наш бот создан профессионалами в области безопасности для профессионалов. Мы предлагаем молниеносные результаты, полное покрытие данных и удобный опыт работы — все это прямо в Telegram, без необходимости переключаться между несколькими приложениями.',
        'faq-4-title': 'Можно ли использовать это для профессиональных расследований?',
        'faq-4-desc': 'Абсолютно! Наш инструмент разработан для специалистов в области безопасности, расследователей и исследователей, которым нужны надежные возможности OSINT. Премиум-версия предлагает расширенные функции для профессионального использования.',
        'footer-text': 'Sniffle. Все права защищены.'
    }
};

// Элементы для обновления
const languageToggle = document.getElementById('languageToggle');
const currentYearElement = document.getElementById('currentYear');
const footerTextElement = document.getElementById('footer-text');

// Установка текущего года в футере
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Получение сохраненного языка или установка по умолчанию
let currentLanguage = localStorage.getItem('language') || 'en';
if (!['en', 'ru'].includes(currentLanguage)) {
    currentLanguage = 'en';
}

// Функция обновления контента страницы
function updatePageContent(lang) {
    // Обновление простых элементов по их ID
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[lang] && translations[lang][key]) {
            // Проверяем, является ли элемент полем ввода
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Проверяем, есть ли внутри элемента плашка "Premium"
                const premiumBadge = element.querySelector('.premium-badge'); // Используем класс .premium-badge
                if (premiumBadge) {
                    // Если плашка найдена, обновляем только текст *до* неё
                    // Предполагаем, что плашка идёт в конце и отделена пробелом
                    const badgeHtml = premiumBadge.outerHTML;
                    
                    // Устанавливаем новый текст + сохраняем плашку
                    element.innerHTML = translations[lang][key] + ' ' + badgeHtml;
                } else {
                    // Если плашки нет, обновляем весь текст
                    element.textContent = translations[lang][key];
                }
            }
        }
    });

    // Обновление текста в футере отдельно, так как он содержит год
    if (footerTextElement && translations[lang]['footer-text']) {
        footerTextElement.innerHTML = `&copy; ${new Date().getFullYear()} ${translations[lang]['footer-text']}`;
    }
}

// Функция обновления иконки переключателя языка
function updateLanguageIcon(lang) {
    // Lucide не имеет иконки "globe", поэтому используем SVG напрямую или другую подходящую
    // Здесь мы просто меняем текст, можно заменить на реальные SVG иконки
    // Для примера, используем простой текстовый индикатор
    if (languageToggle) {
        languageToggle.textContent = lang === 'en' ? 'RU' : 'EN';
        // Или, если хотите использовать Lucide иконки, нужно будет создать SVG вручную или найти подходящую
        // languageToggle.innerHTML = lang === 'en' ? '<i data-lucide="globe"></i>' : '<i data-lucide="globe"></i>';
        // lucide.createIcons(); // Не забудьте переинициализировать иконки
    }
}

// Переключение языка
languageToggle?.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', currentLanguage);
    updatePageContent(currentLanguage);
    updateLanguageIcon(currentLanguage);
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent(currentLanguage);
    updateLanguageIcon(currentLanguage);

    // Добавление анимаций slide-up
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transitionDelay = `${index * 100}ms`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Настройка аккордеона FAQ
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('i'); // Предполагаем, что иконка это <i>
            answer?.classList.toggle('hidden');
            // Переключаем иконку Lucide
            if (icon) {
                const isExpanded = !answer?.classList.contains('hidden');
                // Предполагаем, что data-lucide атрибут установлен правильно в HTML
                icon.setAttribute('data-lucide', isExpanded ? 'chevron-up' : 'chevron-down');
                // Переинициализируем Lucide для этой конкретной иконки
                lucide.createIcons({ icons: { 'chevron-up': lucide.icons['ChevronUp'], 'chevron-down': lucide.icons['ChevronDown'] }, nameAttr: 'data-lucide', render: (iconName) => lucide.icons[iconName] });
            }
        });
    });
});