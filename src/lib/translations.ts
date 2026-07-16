export type Lang = "en" | "si" | "ta";

export interface Translation {
  navFeatures: string;
  navHiw: string;
  navPricing: string;
  navFaq: string;
  navCta: string;
  heroEyebrow: string;
  heroH1a: string;
  heroH1b: string;
  heroSub: string;
  heroCta1: string;
  heroCta2: string;
  heroStat1: string;
  heroStat2: string;
  probLabel: string;
  probHeading: string;
  probC1t: string;
  probC1d: string;
  probC2t: string;
  probC2d: string;
  probC3t: string;
  probC3d: string;
  featLabel: string;
  featHeading: string;
  feat1t: string;
  feat1d: string;
  feat2t: string;
  feat2d: string;
  feat3t: string;
  feat3d: string;
  feat4t: string;
  feat4d: string;
  feat5t: string;
  feat5d: string;
  feat6t: string;
  feat6d: string;
  hiwLabel: string;
  hiwHeading: string;
  hiw1l: string;
  hiw1t: string;
  hiw1d: string;
  hiw2l: string;
  hiw2t: string;
  hiw2d: string;
  hiw3l: string;
  hiw3t: string;
  hiw3d: string;
  priceLabel: string;
  priceHeading: string;
  priceSub: string;
  basicLabel: string;
  basicSub: string;
  basicCta: string;
  proLabel: string;
  proSub: string;
  proCta: string;
  popular: string;
  priceNote: string;
  pf1: string;
  pf2: string;
  pf3: string;
  pf4: string;
  pf5: string;
  pf6: string;
  pf7: string;
  pf8: string;
  pf9: string;
  pf10: string;
  pp1: string;
  pp2: string;
  pp3: string;
  pp4: string;
  pp5: string;
  pp6: string;
  pp7: string;
  pp8: string;
  pp9: string;
  faqLabel: string;
  faqHeading: string;
  ctaHeading: string;
  ctaSub: string;
  ctaBtn: string;
  ctaNote: string;
  footTagline: string;
  footDesc: string;
  footCopy: string;
  footProduct: string;
  footSupport: string;
  footLegal: string;
  footPrivacy: string;
  footTerms: string;
  footBuilt: string;
}

export interface Faq {
  q: string;
  a: string;
}

export const TR: Record<Lang, Translation> = {
  en: {
    navFeatures: "Features",
    navHiw: "How It Works",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navCta: "Get Started on WhatsApp",
    heroEyebrow: "NOW AVAILABLE IN SRI LANKA",
    heroH1a: "Your Service Center.",
    heroH1b: "Running Smart.",
    heroSub:
      "PitstopIQ replaces paper service cards with a digital platform that tracks every vehicle, sends automatic SMS reminders, and gives you full visibility of your business.",
    heroCta1: "Start on WhatsApp",
    heroCta2: "View Pricing",
    heroStat1: "LKR 4,999 / month to start",
    heroStat2: "No setup fee · Cancel anytime",
    probLabel: "THE PROBLEM",
    probHeading: "Running a service center on paper in 2026?",
    probC1t: "Lost Service Cards",
    probC1d:
      "Customers misplace the small card with their oil grade and next-service mileage. No record, no reminder, no return visit.",
    probC2t: "Zero Automatic Reminders",
    probC2d:
      "The only way to remind a customer is a manual phone call — which almost never happens during a busy day at the workshop.",
    probC3t: "No Business Visibility",
    probC3d:
      "You can't answer: Which service makes the most revenue? Which technician is busiest? How much stock is left? The data is stuck in paper.",
    featLabel: "WHAT PITSTOPIQ DOES",
    featHeading: "Everything your service center needs, in one platform",
    feat1t: "Vehicle & Customer Management",
    feat1d:
      "Register every vehicle with full specs: plate, make, model, year, oil brand, grade, and mileage. Every service is logged. Full history always available — even by QR scan.",
    feat2t: "Automatic SMS After Service",
    feat2d:
      "The moment you mark a service Done, your customer receives an SMS with what was done, the mileage, and when they're next due. Zero manual work.",
    feat3t: "Mileage-Based Reminder SMS",
    feat3d:
      "PitstopIQ automatically identifies vehicles approaching their next service mileage and sends a reminder SMS. Customers come back.",
    feat4t: "Inventory Management",
    feat4d:
      "Track your oil, filters, and parts. Set low-stock thresholds. Stock is automatically deducted when you record parts used in a service.",
    feat5t: "Invoice Generation",
    feat5d:
      "Generate a PDF invoice directly from the service job card. Download it or share it to the customer's WhatsApp in one tap.",
    feat6t: "Analytics & Reports",
    feat6d:
      "Monthly revenue charts, top services by frequency, technician performance, and peak-hour heatmaps. Know your business.",
    hiwLabel: "HOW IT WORKS",
    hiwHeading: "Running from day one in 3 steps",
    hiw1l: "STEP 01",
    hiw1t: "We set up your account",
    hiw1d:
      "Message us on WhatsApp. We send you the plan details, you pay, and your account is live within 2 hours — fully configured with your center name and SMS sender.",
    hiw2l: "STEP 02",
    hiw2t: "Register your vehicles",
    hiw2d:
      "Log your existing customers and their vehicles. It takes about 2 minutes per vehicle. Your technician can do this at drop-off.",
    hiw3l: "STEP 03",
    hiw3t: "PitstopIQ runs on autopilot",
    hiw3d:
      "Completion SMS fires automatically after every service. Reminder SMS fires nightly for all due vehicles. You just focus on the work.",
    priceLabel: "PRICING",
    priceHeading: "Simple, honest pricing",
    priceSub:
      "Pay monthly. No contracts. Cancel anytime. Prices in Sri Lankan Rupees.",
    basicLabel: "BASIC",
    basicSub: "/ month · Everything you need to start",
    basicCta: "Get Started",
    proLabel: "PRO",
    proSub: "/ month · Full platform for serious centers",
    proCta: "Get Pro",
    popular: "MOST POPULAR",
    priceNote:
      "No credit card required to start.",
    pf1: "Customer & vehicle management",
    pf2: "Service job cards & status tracking",
    pf3: "Automatic completion SMS",
    pf4: "Mileage-based reminder SMS",
    pf5: "200 SMS per month",
    pf6: "Dashboard & alerts",
    pf7: "QR code per vehicle",
    pf8: "Inventory management",
    pf9: "Invoice generation",
    pf10: "Analytics",
    pp1: "Everything in Basic",
    pp2: "Inventory management",
    pp3: "PDF invoice generation",
    pp4: "WhatsApp invoice sharing",
    pp5: "Employee management",
    pp6: "Analytics & revenue reports",
    pp7: "Multi-branch support",
    pp8: "1,000 SMS per month",
    pp9: "CSV data export",
    faqLabel: "FAQ",
    faqHeading: "Common questions",
    ctaHeading: "Ready to stop losing customers between services?",
    ctaSub: "Message us now on WhatsApp. Your account is live in 2 hours.",
    ctaBtn: "Start on WhatsApp →",
    ctaNote: "LKR 4,999/mo · No credit card",
    footTagline: "SERVICE INTELLIGENCE",
    footDesc: "Digital operations for Sri Lankan vehicle service centers.",
    footCopy: "© 2026 Lumora Ventures PVT Ltd.",
    footProduct: "Product",
    footSupport: "Support",
    footLegal: "Legal",
    footPrivacy: "Privacy Policy",
    footTerms: "Terms of Service",
    footBuilt: "Built in Sri Lanka 🇱🇰 · Service Intelligence",
  },
  si: {
    navFeatures: "ලක්ෂණ",
    navHiw: "ක්‍රියාකාරිත්වය",
    navPricing: "මිල ගණන්",
    navFaq: "නිතර ප්‍රශ්න",
    navCta: "WhatsApp හරහා ආරම්භ කරන්න",
    heroEyebrow: "දැන් ශ්‍රී ලංකාවේ",
    heroH1a: "ඔබේ සේවා මධ්‍යස්ථානය.",
    heroH1b: "ස්මාර්ට් ලෙස ක්‍රියාත්මකයි.",
    heroSub:
      "PitstopIQ කඩදාසි සේවා කාඩ්පත් වෙනුවට සෑම වාහනයක්ම නිරීක්ෂණය කරන, ස්වයංක්‍රීය SMS මතක් කිරීම් යවන සහ ඔබේ ව්‍යාපාරය පිළිබඳ සම්පූර්ණ දෘශ්‍යතාව ලබා දෙන ඩිජිටල් වේදිකාවක් සපයයි.",
    heroCta1: "WhatsApp හරහා ආරම්භ කරන්න",
    heroCta2: "මිල බලන්න",
    heroStat1: "LKR 4,999 / මාසයකට",
    heroStat2: "සැකසීමේ ගාස්තු නොමැත · ඕනෑ වේලාවක අවලංගු කරන්න",
    probLabel: "ගැටළුව",
    probHeading: "2026 දී කඩදාසි මත සේවා මධ්‍යස්ථානයක් පවත්වාගෙන යනවාද?",
    probC1t: "නැතිවූ සේවා කාඩ්පත්",
    probC1d:
      "ගනුදෙනුකරුවන් තෙල් ශ්‍රේණිය සහ ඊළඟ සේවා කිලෝමීටර් ඇති කාඩ්පත් නැති කරගනිති. වාර්තා නැත, මතක් කිරීමක් නැත, නැවත පැමිණීමක් නැත.",
    probC2t: "ස්වයංක්‍රීය මතක් කිරීම් නැත",
    probC2d:
      "ගනුදෙනුකරුවෙකුට මතක් කිරීමට ඇති එකම ක්‍රමය අතින් දුරකථන ඇමතුමකි — කාර්යාලයේ කාර්යබහුල දිනයක් තුළ එය සිදු නොවේ.",
    probC3t: "ව්‍යාපාරය පිළිබඳ පැහැදිලි දත්ත නොමැත",
    probC3d:
      "කුමන සේවාව වැඩිම ආදායම් දෙනවාද? කුමන තාක්ෂණිකයා වැඩිම කාර්යබහුලද? තොග කොපමණ ද? ඒ සියල්ල කඩදාසිවල සිරවී ඇත.",
    featLabel: "PitstopIQ කරන්නේ කුමක්ද",
    featHeading: "ඔබේ සේවා මධ්‍යස්ථානයට අවශ්‍ය සියල්ල, එක් වේදිකාවකින්",
    feat1t: "වාහන සහ ගනුදෙනුකරු කළමනාකරණය",
    feat1d:
      "සෑම වාහනයක්ම සම්පූර්ණ තොරතුරු සමඟ ලියාපදිංචි කරන්න. සෑම සේවාවක්ම සටහන් වේ. QR කේතය ස්කෑන් කිරීමෙන් සම්පූර්ණ ඉතිහාසය ලබාගත හැකිය.",
    feat2t: "සේවාවෙන් පසු ස්වයංක්‍රීය SMS",
    feat2d:
      "ඔබ සේවාව 'Done' ලෙස සලකුණු කළ විගස, ගනුදෙනුකරුට SMS ලැබේ — කළ දේ, කිලෝමීටර්, ඊළඟ සේවා දිනය. අතින් වැඩ නැත.",
    feat3t: "කිලෝමීටර් පාදක SMS මතක් කිරීම",
    feat3d:
      "PitstopIQ ඊළඟ සේවාවට ළඟාවන වාහන හඳුනා ගෙන SMS යවයි. ගනුදෙනුකරුවන් නැවත පැමිණේ.",
    feat4t: "ගබඩා කළමනාකරණය",
    feat4d:
      "ඔබේ තෙල්, ෆිල්ටර් සහ අමතර කොටස් හඹා යන්න. අඩු ගබඩා සීමා සකසන්න. සේවාවකදී භාවිත කෙරෙන තොග ස්වයංක්‍රීයව අඩු වේ.",
    feat5t: "ඉන්වොයිස් නිර්මාණය",
    feat5d:
      "සේවා ජොබ් කාඩ්පතෙන් PDF ඉන්වොයිසයක් සෘජුවම සාදන්න. ගනුදෙනුකරුගේ WhatsApp එකට tap එකකින් යවන්න.",
    feat6t: "විශ්ලේෂණ සහ වාර්තා",
    feat6d:
      "මාසික ආදායම් ප්‍රස්තාර, ජනප්‍රිය සේවා, තාක්ෂණික කාර්ය සාධනය, පීක් කාල. ඔබේ ව්‍යාපාරය දැනගන්න.",
    hiwLabel: "ක්‍රියා කරන ආකාරය",
    hiwHeading: "පළමු දිනයේ සිටම 3 පියවරෙන් ක්‍රියාත්මකයි",
    hiw1l: "පියවර 01",
    hiw1t: "ඔබේ ගිණුම සකසනවා",
    hiw1d:
      "WhatsApp හරහා අපට ලියන්න. ඔබ ගෙවීමෙන් පැය 2 ක් ඇතුළත ගිණුම සක්‍රීය වේ — ඔබේ මධ්‍යස්ථාන නමින් සම්පූර්ණයෙන් වින්‍යාස කෙරේ.",
    hiw2l: "පියවර 02",
    hiw2t: "වාහන ලියාපදිංචි කරන්න",
    hiw2d:
      "පවතින ගනුදෙනුකරුවන් සහ ඔවුන්ගේ වාහන ඇතුළු කරන්න. වාහනයකට මිනිත්තු 2 ක් ඇති. වාහනය භාරගන්නා අවස්ථාවේදී ඔබේ කාර්මිකයාට මෙය කළ හැකිය.",
    hiw3l: "පියවර 03",
    hiw3t: "PitstopIQ ස්වයංක්‍රීයව ක්‍රියාත්මකයි",
    hiw3d:
      "සෑම සේවාවකටම SMS ස්වයංක්‍රීයව යයි. සෑම රාත්‍රියකම සේවාවට නියමිත වාහන සඳහා SMS යවනු ලැබේ. ඔබ වැඩට අවධානය යොමු කරන්න.",
    priceLabel: "මිල ගණන්",
    priceHeading: "සරල, අවංක මිල ගණන්",
    priceSub: "මාසිකව ගෙවන්න. කොන්ත්‍රාත් නැත. ඕනෑ වේලාවක අවලංගු කරන්න.",
    basicLabel: "BASIC",
    basicSub: "/ මාසය · ආරම්භ කිරීමට අවශ්‍ය සියල්ල",
    basicCta: "ආරම්භ කරන්න",
    proLabel: "PRO",
    proSub: "/ මාසය · බැරෑරුම් සේවා මධ්‍යස්ථාන සඳහා",
    proCta: "Pro ලබාගන්න",
    popular: "වඩාත් ජනප්‍රිය",
    priceNote: "ක්‍රෙඩිට් කාඩ් අවශ්‍ය නැත.",
    pf1: "ගනුදෙනුකරු සහ වාහන කළමනාකරණය",
    pf2: "සේවා ජොබ් කාඩ් සහ ස්ථිතිය",
    pf3: "ස්වයංක්‍රීය SMS",
    pf4: "කිලෝමීටර් පාදක SMS",
    pf5: "SMS 200 ක් / මාසය",
    pf6: "ඩැෂ්බෝඩ් සහ දැනුම්දීම්",
    pf7: "QR කේතය",
    pf8: "ගබඩා කළමනාකරණය",
    pf9: "ඉන්වොයිස් නිර්මාණය",
    pf10: "විශ්ලේෂණ",
    pp1: "Basic හි සියල්ල",
    pp2: "ගබඩා කළමනාකරණය",
    pp3: "PDF ඉන්වොයිස්",
    pp4: "WhatsApp ඉන්වොයිස් බෙදාගැනීම",
    pp5: "සේවකයන් කළමනාකරණය",
    pp6: "විශ්ලේෂණ සහ ආදායම් වාර්තා",
    pp7: "බහු-ශාඛා සහාය",
    pp8: "SMS 1,000 ක් / මාසය",
    pp9: "CSV දත්ත",
    faqLabel: "නිතර ප්‍රශ්න",
    faqHeading: "සාමාන්‍ය ප්‍රශ්න",
    ctaHeading: "සේවා අතර ගනුදෙනුකරුවන් අහිමි කිරීම නවත්වන්නද?",
    ctaSub: "WhatsApp හරහා දැන්ම ලියන්න. ගිණුම පැය 2 ක් ඇතුළත සක්‍රීය.",
    ctaBtn: "WhatsApp හරහා ආරම්භ කරන්න →",
    ctaNote: "LKR 4,999/මාසය · ක්‍රෙඩිට් කාඩ් නැත",
    footTagline: "සේවා බුද්ධිය",
    footDesc: "ශ්‍රී ලාංකික වාහන සේවා මධ්‍යස්ථාන සඳහා ඩිජිටල් මෙහෙයුම්.",
    footCopy: "© 2026 Lumora Ventures PVT Ltd.",
    footProduct: "නිෂ්පාදිතය",
    footSupport: "සහාය",
    footLegal: "නීතිමය",
    footPrivacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
    footTerms: "සේවා කොන්දේසි",
    footBuilt: "ශ්‍රී ලංකාවේ නිර්මිතයි 🇱🇰 · සේවා බුද්ධිය",
  },
  ta: {
    navFeatures: "அம்சங்கள்",
    navHiw: "எவ்வாறு செயல்படுகிறது",
    navPricing: "விலை",
    navFaq: "கேள்விகள்",
    navCta: "WhatsApp இல் தொடங்கு",
    heroEyebrow: "இப்போது இலங்கையில் கிடைக்கிறது",
    heroH1a: "உங்கள் சேவை மையம்.",
    heroH1b: "நுட்பமாக இயங்குகிறது.",
    heroSub:
      "PitstopIQ காகித சேவை அட்டைகளை டிஜிட்டல் தளத்துடன் மாற்றுகிறது. ஒவ்வொரு வாகனத்தையும் கண்காணிக்கிறது, SMS நினைவூட்டல்களை அனுப்புகிறது, உங்கள் வணிகம் முழுவதும் தெரியும்.",
    heroCta1: "WhatsApp இல் தொடங்கு",
    heroCta2: "விலையை பார்",
    heroStat1: "LKR 4,999 / மாதம்",
    heroStat2: "அமைப்பு கட்டணம் இல்லை · எப்போதும் ரத்து செய்யலாம்",
    probLabel: "சிக்கல்",
    probHeading: "2026 இல் காகிதத்தில் சேவை மையம் நடத்துகிறீர்களா?",
    probC1t: "தொலைந்த சேவை அட்டைகள்",
    probC1d:
      "வாடிக்கையாளர்கள் சேவை அட்டையை அடிக்கடி இழந்து விடுகின்றனர். பதிவில்லை, நினைவூட்டல் இல்லை, திரும்பி வர மாட்டார்கள்.",
    probC2t: "தானியங்கி நினைவூட்டல்கள் இல்லை",
    probC2d:
      "வாடிக்கையாளரை நினைவூட்ட ஒரே வழி கையால் போன் செய்வது — பிஸியான நாளில் இது நடக்காது.",
    probC3t: "வணிகத் தகவல்களில் தெளிவான பார்வை இல்லை",
    probC3d:
      "எந்த சேவை அதிக வருமானம் தருகிறது? எந்த தொழிலாளி பிஸியாக உள்ளார்? தரவு காகிதத்தில் சிக்கியுள்ளது.",
    featLabel: "PitstopIQ என்ன செய்கிறது",
    featHeading: "உங்கள் சேவை மையத்திற்கு தேவையான அனைத்தும், ஒரே தளத்தில்",
    feat1t: "வாகன & வாடிக்கையாளர் மேலாண்மை",
    feat1d:
      "ஒவ்வொரு வாகனத்தையும் முழு விவரங்களுடன் பதிவு செய்யுங்கள். QR ஸ்கேன் மூலம் வரலாறு கிடைக்கும்.",
    feat2t: "சேவைக்கு பின் தானியங்கி SMS",
    feat2d:
      "சேவை முடிந்தவுடன், வாடிக்கையாளருக்கு SMS போகும் — என்ன செய்யப்பட்டது, கிலோமீட்டர், அடுத்த சேவை எப்போது.",
    feat3t: "கிலோமீட்டர் அடிப்படையிலான SMS நினைவூட்டல்",
    feat3d:
      "PitstopIQ அடுத்த சேவைக்கு நெருங்கும் வாகனங்களுக்கு SMS அனுப்புகிறது.",
    feat4t: "சரக்கு மேலாண்மை",
    feat4d:
      "உங்கள் எண்ணெய், வடிகட்டிகள் மற்றும் பாகங்களை கண்காணியுங்கள். குறைந்த இருப்பு எல்லையை அமைக்கலாம்.",
    feat5t: "விலைப்பட்டியல் உருவாக்கம்",
    feat5d:
      "சேவை அட்டையிலிருந்து நேரடியாக PDF விலைப்பட்டியல் உருவாக்கலாம். WhatsApp இல் பகிரலாம்.",
    feat6t: "பகுப்பாய்வு & அறிக்கைகள்",
    feat6d:
      "மாதாந்திர வருமான விளக்கப்படங்கள், சிறந்த சேவைகள், தொழிலாளர் செயல்திறன். உங்கள் வணிகத்தை அறியுங்கள்.",
    hiwLabel: "எவ்வாறு செயல்படுகிறது",
    hiwHeading: "3 படிகளில் முதல் நாளிலிருந்தே இயங்கும்",
    hiw1l: "படி 01",
    hiw1t: "உங்கள் கணக்கை அமைக்கிறோம்",
    hiw1d:
      "WhatsApp இல் எங்களுக்கு செய்தி அனுப்புங்கள். நீங்கள் பணம் செலுத்திய 2 மணி நேரத்திற்குள் கணக்கு செயலில் இருக்கும்.",
    hiw2l: "படி 02",
    hiw2t: "வாகனங்களை பதிவு செய்யுங்கள்",
    hiw2d:
      "உங்கள் வாடிக்கையாளர்களையும் அவர்களின் வாகனங்களையும் பதிவு செய்யுங்கள். வாகனம் ஒன்றுக்கு சுமார் 2 நிமிடங்கள் ஆகும்.",
    hiw3l: "படி 03",
    hiw3t: "PitstopIQ தானாகவே இயங்குகிறது",
    hiw3d:
      "ஒவ்வொரு சேவைக்கும் SMS தானாக போகும். தினமும் இரவு நினைவூட்டல் SMS போகும். நீங்கள் வேலையில் கவனம் செலுத்துங்கள்.",
    priceLabel: "விலை",
    priceHeading: "எளிய, நேர்மையான விலை",
    priceSub:
      "மாதாந்திரம் செலுத்துங்கள். ஒப்பந்தம் இல்லை. எப்போதும் ரத்து செய்யலாம்.",
    basicLabel: "BASIC",
    basicSub: "/ மாதம் · தொடங்க தேவையான அனைத்தும்",
    basicCta: "தொடங்கு",
    proLabel: "PRO",
    proSub: "/ மாதம் · தீவிர மையங்களுக்கு",
    proCta: "Pro எடுங்கள்",
    popular: "மிகவும் பிரபலமானது",
    priceNote:
      "கிரெடிட் கார்டு தேவையில்லை.",
    pf1: "வாடிக்கையாளர் & வாகன மேலாண்மை",
    pf2: "சேவை அட்டைகள் & நிலை கண்காணிப்பு",
    pf3: "தானியங்கி SMS",
    pf4: "கிலோமீட்டர் நினைவூட்டல் SMS",
    pf5: "மாதம் 200 SMS",
    pf6: "டாஷ்போர்டு & எச்சரிக்கைகள்",
    pf7: "வாகன QR குறியீடு",
    pf8: "சரக்கு மேலாண்மை",
    pf9: "விலைப்பட்டியல் உருவாக்கம்",
    pf10: "பகுப்பாய்வு",
    pp1: "Basic இல் உள்ள அனைத்தும்",
    pp2: "சரக்கு மேலாண்மை",
    pp3: "PDF விலைப்பட்டியல்",
    pp4: "WhatsApp விலைப்பட்டியல் பகிர்வு",
    pp5: "பணியாளர் மேலாண்மை",
    pp6: "பகுப்பாய்வு & வருமான அறிக்கைகள்",
    pp7: "பல-கிளை ஆதரவு",
    pp8: "மாதம் 1,000 SMS",
    pp9: "CSV தரவு ஏற்றுமதி",
    faqLabel: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faqHeading: "பொதுவான கேள்விகள்",
    ctaHeading: "சேவைகளுக்கு இடையில் வாடிக்கையாளர்களை இழப்பதை நிறுத்த தயாரா?",
    ctaSub:
      "இப்போதே WhatsApp இல் செய்தி அனுப்புங்கள். 2 மணி நேரத்தில் கணக்கு தயார்.",
    ctaBtn: "WhatsApp இல் தொடங்கு →",
    ctaNote: "LKR 4,999/மாதம் · கிரெடிட் கார்டு இல்லை",
    footTagline: "சேவை நுண்ணறிவு",
    footDesc: "இலங்கை வாகன சேவை மையங்களுக்கான டிஜிட்டல் செயல்பாடுகள்.",
    footCopy: "© 2026 Lumora Ventures PVT Ltd.",
    footProduct: "தயாரிப்பு",
    footSupport: "ஆதரவு",
    footLegal: "சட்டம்",
    footPrivacy: "தனியுரிமைக் கொள்கை",
    footTerms: "சேவை விதிமுறைகள்",
    footBuilt: "இலங்கையில் கட்டப்பட்டது 🇱🇰 · சேவை நுண்ணறிவு",
  },
};

export const FAQ_DATA: Record<Lang, Faq[]> = {
  en: [
    {
      q: "How do I get started?",
      a: "Message us on WhatsApp — the button at the top of the page. We'll send you plan details and payment info. Your account is live within 2 hours of payment.",
    },
    {
      q: "Which networks does the SMS work on?",
      a: "We use Dialog Axiata's eSMS platform. Messages are delivered to all Sri Lankan networks: Dialog, Mobitel, Hutch, Airtel, and Lanka Bell.",
    },
    {
      q: "Can my technicians also log in?",
      a: "Yes. You can invite your staff with different roles: Manager, Technician, Cashier, and Receptionist. Each sees only what they need.",
    },
    {
      q: "What if a customer changes their phone number?",
      a: "Just update the number in their customer profile. All future SMS will go to the new number.",
    },
    {
      q: "Is there a setup fee?",
      a: "No. You pay the monthly subscription only. We set up your account and onboard you at no extra charge.",
    },
    {
      q: "Can I use it on my phone?",
      a: "Yes. PitstopIQ is a web app that works on any smartphone browser. No app download required.",
    },
    {
      q: "What happens after 200 SMS on the Basic plan?",
      a: "You'll see a warning at 80% usage. Once the quota is reached, SMS pauses for the rest of the month. You can upgrade to Pro for 1,000 SMS.",
    },
  ],
  si: [
    {
      q: "ආරම්භ කරන්නේ කෙසේද?",
      a: "WhatsApp හරහා අපට ලියන්න. ඔබ ගෙවීමෙන් පසු පැය 2 ක් ඇතුළත ගිණුම සක්‍රීය වේ.",
    },
    {
      q: "SMS ක්‍රියා කරන ජාල මොනවාද?",
      a: "Dialog Axiata eSMS වේදිකාව භාවිතා කරයි. Dialog, Mobitel, Hutch, Airtel සහ Lanka Bell ජාල වලට ලැබේ.",
    },
    {
      q: "තාක්ෂණිකයන්ට පිවිසිය හැකිද?",
      a: "ඔව්. කළමනාකරු, කාර්මික, මුදල් අයකැමි සහ පිළිගැනීමේ නිලධාරී ලෙස සේවකයන් එක් කළ හැකිය. එක් එක් කෙනාට ඔවුන්ට අදාළ දෑ පමණක් දිස් වේ.",
    },
    {
      q: "ගනුදෙනුකරු දුරකථන අංකය වෙනස් කළොත්?",
      a: "ගනුදෙනුකරුගේ පැතිකඩෙහි දුරකථන අංකය යාවත්කාලීන කරන්න. ඊළඟ SMS නව අංකට යයි.",
    },
    {
      q: "සැකසීමේ ගාස්තු තිබේද?",
      a: "නැත. මාසික ගාස්තු පමණයි. ගිණුම සකසා onboard කිරීම නොමිලේ.",
    },
    {
      q: "දුරකථනයෙන් භාවිතා කළ හැකිද?",
      a: "ඔව්. PitstopIQ ඕනෑම smartphone browser තුළ ක්‍රියා කරයි. app download කිරීම අවශ්‍ය නැත.",
    },
    {
      q: "Basic plan SMS 200 ශේෂ ඉවර වූ විට?",
      a: "80% දී අනතුරු ඇඟවීමක් ලැබේ. ශේෂ ඉවර වූ පසු SMS pause වේ. Pro plan upgrade කළ හැකිය.",
    },
  ],
  ta: [
    {
      q: "எவ்வாறு தொடங்குவது?",
      a: "WhatsApp இல் செய்தி அனுப்புங்கள். நீங்கள் பணம் செலுத்திய 2 மணி நேரத்திற்குள் கணக்கு செயலில் இருக்கும்.",
    },
    {
      q: "SMS எந்த நெட்வொர்க்கில் வேலை செய்கிறது?",
      a: "Dialog Axiata eSMS தளத்தை பயன்படுத்துகிறோம். Dialog, Mobitel, Hutch, Airtel, Lanka Bell நெட்வொர்க்கில் SMS கிடைக்கும்.",
    },
    {
      q: "என் தொழிலாளிகள் உள்நுழையலாமா?",
      a: "ஆம். Manager, Technician, Cashier, Receptionist என பல பாத்திரங்களில் அழைக்கலாம். ஒவ்வொருவரும் தேவையான தகவல்களை மட்டும் காண்கிறார்கள்.",
    },
    {
      q: "வாடிக்கையாளர் தொலைபேசி எண் மாறினால்?",
      a: "வாடிக்கையாளர் சுயவிவரத்தில் எண்ணை புதுப்பியுங்கள். அடுத்த SMS புதிய எண்ணுக்கு போகும்.",
    },
    {
      q: "அமைப்பு கட்டணம் உள்ளதா?",
      a: "இல்லை. மாதாந்திர சந்தா மட்டுமே. ஆரம்ப அமைப்பு மற்றும் பயிற்சி இலவசம்.",
    },
    {
      q: "தொலைபேசியில் பயன்படுத்தலாமா?",
      a: "ஆம். PitstopIQ எந்த ஸ்மார்ட்போன் பிரவுசரிலும் இயங்கும். தனியான பயன்பாட்டை பதிவிறக்கம் செய்ய தேவையில்லை.",
    },
    {
      q: "Basic plan 200 SMS தீர்ந்தால்?",
      a: "80% பயன்பாட்டில் எச்சரிக்கை வரும். நிரம்பிய பின் SMS நிறுத்தப்படும். Pro plan க்கு மேம்படுத்தலாம்.",
    },
  ],
};

/** Central place to configure the WhatsApp business number (digits only, intl format). */
export const WHATSAPP_NUMBER = "94711100800";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
