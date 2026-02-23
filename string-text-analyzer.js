// STRING TEXT ANALYZER
// Girilen metni analiz eden basit bir araç

const text = "  Hello World! Welcome to JavaScript String Methods Project.  ";

// 1. trim() → baştaki ve sondaki boşlukları temizler
const cleanedText = text.trim();
console.log("Temizlenmiş Metin:", cleanedText);

// 2. toUpperCase() ve toLowerCase()
console.log("Büyük Harf:", cleanedText.toUpperCase());
console.log("Küçük Harf:", cleanedText.toLowerCase());

// 3. includes() → kelime var mı kontrolü
console.log("JavaScript içeriyor mu?", cleanedText.includes("JavaScript"));

// 4. startsWith() ve endsWith()
console.log("Hello ile başlıyor mu?", cleanedText.startsWith("Hello"));
console.log("Project ile bitiyor mu?", cleanedText.endsWith("Project."));

// 5. replace() → kelime değiştirme
const replacedText = cleanedText.replace("World", "Developer");
console.log("Değiştirilmiş Metin:", replacedText);

// 6. split() → kelimelere ayırma
const words = cleanedText.split(" ");
console.log("Kelimeler:", words);

// 7. substring() → belirli kısmı alma
const shortText = cleanedText.substring(0, 12);
console.log("Kısa Metin:", shortText);

// 8. charAt() → belirli indexteki karakter
console.log("5. karakter:", cleanedText.charAt(5));

// 9. length → karakter sayısı
console.log("Karakter Sayısı:", cleanedText.length);

// 10. indexOf() → kelimenin indexi
console.log("JavaScript index:", cleanedText.indexOf("JavaScript"));
