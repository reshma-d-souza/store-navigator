import type { Product, FloorArea, NavigationNode } from './types';

export const floorAreas: FloorArea[] = [
  // Floor 1
  { id: 'f1_entrance', name: { en: 'Main Entrance', kn: 'ಮುಖ್ಯ ದ್ವಾರ', hi: 'मुख्य द्वार' }, type: 'entrance', x: 40, y: 85, width: 20, height: 10, color: 'bg-transparent', textColor: 'text-gray-500 font-semibold', floor: 1, entrancePoint: { x: 50, y: 95, floor: 1 } },
  { id: 'f1_exit', name: { en: 'Exit', kn: 'ನಿರ್ಗಮನ', hi: 'बाहर' }, type: 'exit', x: 80, y: 85, width: 10, height: 10, color: 'bg-gray-200', textColor: 'text-gray-600', floor: 1, entrancePoint: { x: 85, y: 95, floor: 1 } },
  { id: 'f1_produce', name: { en: 'Fresh Produce', kn: 'ತಾಜಾ ಉತ್ಪನ್ನಗಳು', hi: 'ताज़ी उपज' }, type: 'shop', x: 5, y: 10, width: 30, height: 40, color: 'bg-green-200', textColor: 'text-green-800', floor: 1, entrancePoint: { x: 20, y: 51, floor: 1 } },
  { id: 'f1_butcher', name: { en: 'Butcher Shop', kn: 'ಕಟುಕನ ಅಂಗಡಿ', hi: 'कसाई की दुकान' }, type: 'shop', x: 5, y: 55, width: 30, height: 25, color: 'bg-red-200', textColor: 'text-red-800', floor: 1, entrancePoint: { x: 20, y: 54, floor: 1 } },
  { id: 'f1_bakery', name: { en: 'Bakery', kn: 'ಬೇಕರಿ', hi: 'बेकरी' }, type: 'shop', x: 40, y: 10, width: 25, height: 25, color: 'bg-amber-200', textColor: 'text-amber-800', floor: 1, entrancePoint: { x: 52.5, y: 36, floor: 1 } },
  { id: 'f1_dairy', name: { en: 'Dairy & Cheese', kn: 'ಡೈರಿ ಮತ್ತು ಚೀಸ್', hi: 'डेयरी और पनीर' }, type: 'shop', x: 40, y: 40, width: 25, height: 25, color: 'bg-blue-200', textColor: 'text-blue-800', floor: 1, entrancePoint: { x: 52.5, y: 39, floor: 1 } },
  { id: 'f1_washroom_m', name: { en: "Men's Washroom", kn: 'ಪುರುಷರ ಶೌಚಾಲಯ', hi: 'पुरुषों का शौचालय' }, type: 'washroom', gender: 'male', x: 75, y: 10, width: 20, height: 15, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 1, entrancePoint: { x: 85, y: 26, floor: 1 } },
  { id: 'f1_washroom_f', name: { en: "Women's Washroom", kn: 'ಮಹಿಳೆಯರ ಶೌಚಾಲಯ', hi: 'महिलाओं का शौचालय' }, type: 'washroom', gender: 'female', x: 75, y: 30, width: 20, height: 15, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 1, entrancePoint: { x: 85, y: 29, floor: 1 } },

  // Floor 2
  { id: 'f2_frozen', name: { en: 'Frozen Foods', kn: 'ಹೆಪ್ಪುಗಟ್ಟಿದ ಆಹಾರಗಳು', hi: 'जमे हुए खाद्य पदार्थ' }, type: 'shop', x: 5, y: 10, width: 30, height: 30, color: 'bg-cyan-200', textColor: 'text-cyan-800', floor: 2, entrancePoint: { x: 20, y: 41, floor: 2 } },
  { id: 'f2_canned', name: { en: 'Canned Goods', kn: 'ಡಬ್ಬಿಗಳು', hi: 'डिब्बाबंद सामान' }, type: 'shop', x: 5, y: 45, width: 30, height: 35, color: 'bg-gray-400', textColor: 'text-white', floor: 2, entrancePoint: { x: 20, y: 44, floor: 2 } },
  { id: 'f2_snacks', name: { en: 'Snacks', kn: 'ತಿಂಡಿಗಳು', hi: 'स्नैक्स' }, type: 'shop', x: 40, y: 10, width: 55, height: 30, color: 'bg-orange-200', textColor: 'text-orange-800', floor: 2, entrancePoint: { x: 67.5, y: 41, floor: 2 } },
  { id: 'f2_checkout', name: { en: 'Checkout', kn: 'ಚೆಕ್ಔಟ್', hi: 'चेक आउट' }, type: 'shop', x: 40, y: 45, width: 55, height: 35, color: 'bg-indigo-300', textColor: 'text-indigo-800', floor: 2, entrancePoint: { x: 67.5, y: 44, floor: 2 } },
  { id: 'f2_washroom_m', name: { en: "Men's Washroom", kn: 'ಪುರುಷರ ಶೌಚಾಲಯ', hi: 'पुरुषों का शौचालय' }, type: 'washroom', gender: 'male', x: 80, y: 83, width: 15, height: 12, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 2, entrancePoint: { x: 87.5, y: 82, floor: 2 } },
  { id: 'f2_washroom_f', name: { en: "Women's Washroom", kn: 'ಮಹಿಳೆಯರ ಶೌಚಾಲಯ', hi: 'महिलाओं का शौचालय' }, type: 'washroom', gender: 'female', x: 60, y: 83, width: 15, height: 12, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 2, entrancePoint: { x: 67.5, y: 82, floor: 2 } },

  // Floor 3
  { id: 'f3_electronics', name: { en: 'Electronics', kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್', hi: 'इलेक्ट्रानिक्स' }, type: 'shop', x: 5, y: 10, width: 40, height: 70, color: 'bg-slate-400', textColor: 'text-white', floor: 3, entrancePoint: { x: 46, y: 45, floor: 3 } },
  { id: 'f3_home', name: { en: 'Home Goods', kn: 'ಗೃಹಬಳಕೆಯ ವಸ್ತುಗಳು', hi: 'घर का सामान' }, type: 'shop', x: 50, y: 10, width: 45, height: 40, color: 'bg-violet-200', textColor: 'text-violet-800', floor: 3, entrancePoint: { x: 49, y: 30, floor: 3 } },
  { id: 'f3_office', name: { en: 'Mall Office', kn: 'ಮಾಲ್ ಕಚೇರಿ', hi: 'मॉल कार्यालय' }, type: 'utility', x: 50, y: 55, width: 20, height: 25, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 3, entrancePoint: { x: 60, y: 54, floor: 3 } },
  { id: 'f3_washroom_m', name: { en: "Men's Washroom", kn: 'ಪುರುಷರ ಶೌಚಾಲಯ', hi: 'पुरुषों का शौचालय' }, type: 'washroom', gender: 'male', x: 75, y: 55, width: 20, height: 12, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 3, entrancePoint: { x: 85, y: 68, floor: 3 } },
  { id: 'f3_washroom_f', name: { en: "Women's Washroom", kn: 'ಮಹಿಳೆಯರ ಶೌಚಾಲಯ', hi: 'महिलाओं का शौचालय' }, type: 'washroom', gender: 'female', x: 75, y: 70, width: 20, height: 12, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 3, entrancePoint: { x: 85, y: 69, floor: 3 } },

  // Floor 4
  { id: 'f4_cafe', name: { en: 'Cafe', kn: 'ಕೆಫೆ', hi: 'कैफे' }, type: 'shop', x: 5, y: 10, width: 40, height: 40, color: 'bg-amber-300', textColor: 'text-amber-800', floor: 4, entrancePoint: { x: 46, y: 30, floor: 4 } },
  { id: 'f4_books', name: { en: 'Bookstore', kn: 'ಪುಸ್ತಕದಂಗಡಿ', hi: 'किताबों की दुकान' }, type: 'shop', x: 50, y: 10, width: 45, height: 70, color: 'bg-sky-200', textColor: 'text-sky-800', floor: 4, entrancePoint: { x: 49, y: 45, floor: 4 } },
  { id: 'f4_patio', name: { en: 'Rooftop Patio', kn: 'ರೂಫ್‌ಟಾಪ್ ಪ್ಯಾಟಿಯೊ', hi: 'रूफटॉप आंगन' }, type: 'utility', x: 5, y: 55, width: 40, height: 25, color: 'bg-lime-200', textColor: 'text-lime-800', floor: 4, entrancePoint: { x: 46, y: 67.5, floor: 4 } },
  { id: 'f4_washroom_m', name: { en: "Men's Washroom", kn: 'ಪುರುಷರ ಶೌಚಾಲಯ', hi: 'पुरुषों का शौचालय' }, type: 'washroom', gender: 'male', x: 80, y: 83, width: 15, height: 12, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 4, entrancePoint: { x: 87.5, y: 82, floor: 4 } },
  { id: 'f4_washroom_f', name: { en: "Women's Washroom", kn: 'ಮಹಿಳೆಯರ ಶೌಚಾಲಯ', hi: 'महिलाओं का शौचालय' }, type: 'washroom', gender: 'female', x: 60, y: 83, width: 15, height: 12, color: 'bg-gray-300', textColor: 'text-gray-600', floor: 4, entrancePoint: { x: 67.5, y: 82, floor: 4 } },
];


export const navigationNodes: NavigationNode[] = [
    // Stairs (Left side)
    { id: 's1_left', type: 'stairs', floor: 1, x: 2.5, y: 45, links: [{ floor: 2, id: 's2_left' }] },
    { id: 's2_left', type: 'stairs', floor: 2, x: 2.5, y: 45, links: [{ floor: 1, id: 's1_left' }, { floor: 3, id: 's3_left' }] },
    { id: 's3_left', type: 'stairs', floor: 3, x: 2.5, y: 45, links: [{ floor: 2, id: 's2_left' }, { floor: 4, id: 's4_left' }] },
    { id: 's4_left', type: 'stairs', floor: 4, x: 2.5, y: 45, links: [{ floor: 3, id: 's3_left' }] },
    // Escalators (Center)
    { id: 'e1_center', type: 'escalator', floor: 1, x: 52.5, y: 80, links: [{ floor: 2, id: 'e2_center' }] },
    { id: 'e2_center', type: 'escalator', floor: 2, x: 52.5, y: 80, links: [{ floor: 1, id: 'e1_center' }, { floor: 3, id: 'e3_center' }] },
    { id: 'e3_center', type: 'escalator', floor: 3, x: 52.5, y: 85, links: [{ floor: 2, id: 'e2_center' }] },
    // Lifts (Right side)
    { id: 'l1_right', type: 'lift', floor: 1, x: 97.5, y: 45, links: [{ floor: 2, id: 'l2_right' }, { floor: 3, id: 'l3_right' }, { floor: 4, id: 'l4_right' }] },
    { id: 'l2_right', type: 'lift', floor: 2, x: 97.5, y: 45, links: [{ floor: 1, id: 'l1_right' }, { floor: 3, id: 'l3_right' }, { floor: 4, id: 'l4_right' }] },
    { id: 'l3_right', type: 'lift', floor: 3, x: 97.5, y: 45, links: [{ floor: 1, id: 'l1_right' }, { floor: 2, id: 'l2_right' }, { floor: 4, id: 'l4_right' }] },
    { id: 'l4_right', type: 'lift', floor: 4, x: 97.5, y: 45, links: [{ floor: 1, id: 'l1_right' }, { floor: 2, id: 'l2_right' }, { floor: 3, id: 'l3_right' }] },
];

export const initialProducts: Product[] = [
  { id: 1, name: { en: 'Avocados', kn: 'ಆವಕಾಡೊಗಳು', hi: 'एवोकाडो' }, price: 1.75, category: { en: 'Fruits & Vegetables', kn: 'ಹಣ್ಣುಗಳು ಮತ್ತು ತರಕಾರಿಗಳು', hi: 'फल और सब्जियां' }, shopId: 'f1_produce', floor: 1 },
  { id: 2, name: { en: 'Cheddar Cheese', kn: 'ಚೆಡ್ಡಾರ್ ಚೀಸ್', hi: 'चेडर चीज़' }, price: 8.00, category: { en: 'Dairy', kn: 'ಡೈರಿ', hi: 'डेयरी' }, shopId: 'f1_dairy', floor: 1 },
  { id: 3, name: { en: 'Croissants', kn: 'ಕ್ರೋಸೆಂಟ್‌ಗಳು', hi: 'क्रोइसैन' }, price: 2.50, category: { en: 'Bakery', kn: 'ಬೇಕರಿ', hi: 'बेकरी' }, shopId: 'f1_bakery', floor: 1 },
  { id: 4, name: { en: 'Frozen Pizza', kn: 'ಹೆಪ್ಪುಗಟ್ಟಿದ ಪಿಜ್ಜಾ', hi: 'फ्रोजन पिज्जा' }, price: 7.99, category: { en: 'Frozen', kn: 'ಹೆಪ್ಪುಗಟ್ಟಿದ', hi: 'जमे हुए' }, shopId: 'f2_frozen', floor: 2 },
  { id: 5, name: { en: 'Ground Beef (lb)', kn: 'ಕೊಚ್ಚಿದ ಗೋಮಾಂಸ (lb)', hi: 'कीमा बनाया हुआ बीफ़ (lb)' }, price: 6.50, category: { en: 'Meat', kn: 'ಮಾಂಸ', hi: 'मांस' }, shopId: 'f1_butcher', floor: 1 },
  { id: 6, name: { en: 'Organic Milk', kn: 'ಸಾವಯವ ಹಾಲು', hi: 'ऑर्गेनिक दूध' }, price: 4.20, category: { en: 'Dairy', kn: 'ಡೈರಿ', hi: 'डेयरी' }, shopId: 'f1_dairy', floor: 1 },
  { id: 7, name: { en: 'Artisan Bread', kn: 'ಕುಶಲಕರ್ಮಿ ಬ್ರೆಡ್', hi: 'कारीगर रोटी' }, price: 5.50, category: { en: 'Bakery', kn: 'ಬೇಕರಿ', hi: 'बेकरी' }, shopId: 'f1_bakery', floor: 1 },
  { id: 8, name: { en: 'Potato Chips', kn: 'ಆಲೂಗೆಡ್ಡೆ ಚಿಪ್ಸ್', hi: 'आलू के चिप्स' }, price: 3.25, category: { en: 'Snacks', kn: 'ತಿಂಡಿಗಳು', hi: 'स्नैक्स' }, shopId: 'f2_snacks', floor: 2 },
  { id: 9, name: { en: 'Headphones', kn: 'ಹೆಡ್‌ಫೋನ್‌ಗಳು', hi: 'हेडफोन' }, price: 149.99, category: { en: 'Electronics', kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್', hi: 'इलेक्ट्रानिक्स' }, shopId: 'f3_electronics', floor: 3 },
  { id: 10, name: { en: 'Throw Pillow', kn: 'ಥ್ರೋ ಪಿಲ್ಲೊ', hi: 'थ्रो पिलो' }, price: 25.00, category: { en: 'Home Decor', kn: 'ಮನೆ ಅಲಂಕಾರ', hi: 'गृह सज्जा' }, shopId: 'f3_home', floor: 3 },
  { id: 11, name: { en: 'Espresso', kn: 'ಎಸ್ಪ್ರೆಸೊ', hi: 'एस्प्रेसो' }, price: 3.75, category: { en: 'Beverages', kn: 'ಪಾನೀಯಗಳು', hi: 'पेय पदार्थ' }, shopId: 'f4_cafe', floor: 4 },
  { id: 12, name: { en: 'Bestseller Novel', kn: 'ಅತ್ಯುತ್ತಮ ಮಾರಾಟವಾದ ಕಾದಂಬರಿ', hi: 'सबसे ज्यादा बिकने वाला उपन्यास' }, price: 18.99, category: { en: 'Books', kn: 'ಪುಸ್ತಕಗಳು', hi: 'किताबें' }, shopId: 'f4_books', floor: 4 },
  { id: 13, name: { en: 'Canned Tomatoes', kn: 'ಡಬ್ಬಿಯಲ್ಲಿಟ್ಟ ಟೊಮ್ಯಾಟೊ', hi: 'डिब्बाबंद टमाटर' }, price: 1.50, category: { en: 'Pantry', kn: 'ಪ್ಯಾಂಟ್ರಿ', hi: 'पेंट्री' }, shopId: 'f2_canned', floor: 2 },
  { id: 14, name: { en: 'Smart TV', kn: 'ಸ್ಮಾರ್ಟ್ ಟಿವಿ', hi: 'स्मार्ट टीवी' }, price: 499.99, category: { en: 'Electronics', kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್', hi: 'इलेक्ट्रानिक्स' }, shopId: 'f3_electronics', floor: 3 },
];
