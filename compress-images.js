// Image compression utility
// Run: node compress-images.js

const fs = require('fs');
const path = require('path');

console.log('⚠️  Manual Image Compression Required');
console.log('\nImages to compress:');
console.log('- src/assets/AnnandamHomes1.png (2.4 MB)');
console.log('- src/assets/Anandamslider2.png (2.6 MB)');
console.log('- src/assets/sliderhome3.png (2.7 MB)');

console.log('\n📝 Recommended Actions:');
console.log('\n1. Use online tools:');
console.log('   - TinyPNG: https://tinypng.com/');
console.log('   - Squoosh: https://squoosh.app/');
console.log('   - Compress PNG: https://compresspng.com/');

console.log('\n2. Target size: 300-500 KB per image');
console.log('   - Reduce quality to 75-85%');
console.log('   - Resize to max width 1920px');
console.log('   - Convert to WebP format for better compression');

console.log('\n3. Alternative: Install sharp package:');
console.log('   npm install sharp');
console.log('   Then this script will auto-compress images');

console.log('\n4. Quick fix: Reduce image dimensions:');
console.log('   - Desktop: 1920x1080 max');
console.log('   - Mobile: 800x600 max');

// Check if sharp is available
try {
  const sharp = require('sharp');
  console.log('\n✅ Sharp is installed! Running compression...\n');
  
  const images = [
    'src/assets/AnnandamHomes1.png',
    'src/assets/Anandamslider2.png',
    'src/assets/sliderhome3.png'
  ];

  images.forEach(async (imagePath) => {
    const outputPath = imagePath.replace('.png', '-compressed.jpg');
    try {
      await sharp(imagePath)
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(imagePath).size;
      const compressedSize = fs.statSync(outputPath).size;
      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
      
      console.log(`✓ ${path.basename(imagePath)}`);
      console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(compressedSize / 1024 / 1024).toFixed(2)} MB (${savings}% smaller)\n`);
    } catch (err) {
      console.error(`✗ Failed to compress ${imagePath}:`, err.message);
    }
  });

} catch (err) {
  console.log('\n⚠️  Sharp not installed. Please compress images manually or run:');
  console.log('   npm install sharp');
  console.log('   node compress-images.js');
}
