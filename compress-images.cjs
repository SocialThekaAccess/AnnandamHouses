// Automated Image Compression Script
// Run: npm run compress-images

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting automatic image compression...\n');

const images = [
  {
    input: 'src/assets/AnnandamHomes1.png',
    output: 'src/assets/AnnandamHomes1-compressed.jpg'
  },
  {
    input: 'src/assets/Anandamslider2.png',
    output: 'src/assets/Anandamslider2-compressed.jpg'
  },
  {
    input: 'src/assets/sliderhome3.png',
    output: 'src/assets/sliderhome3-compressed.jpg'
  }
];

async function compressImage(input, output) {
  try {
    const originalSize = fs.statSync(input).size;
    
    await sharp(input)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: 82, 
        progressive: true,
        mozjpeg: true
      })
      .toFile(output);
    
    const compressedSize = fs.statSync(output).size;
    const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(input)}`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(compressedSize / 1024 / 1024).toFixed(2)} MB (${savings}% smaller)`);
    
    return { success: true, input, output, originalSize, compressedSize };
  } catch (err) {
    console.error(`❌ Failed: ${path.basename(input)}`);
    console.error(`   Error: ${err.message}`);
    return { success: false, input };
  }
}

async function compressAll() {
  console.log('📦 Compressing 3 images...\n');
  
  const results = [];
  for (const img of images) {
    const result = await compressImage(img.input, img.output);
    results.push(result);
    console.log('');
  }
  
  const successful = results.filter(r => r.success).length;
  const totalSaved = results
    .filter(r => r.success)
    .reduce((sum, r) => sum + (r.originalSize - r.compressedSize), 0);
  
  console.log('═══════════════════════════════════════');
  console.log(`✨ Compression Complete!`);
  console.log(`   ${successful}/${images.length} images compressed`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log('═══════════════════════════════════════\n');
  
  if (successful === images.length) {
    console.log('📝 Next Steps:');
    console.log('1. Update Hero.jsx to use compressed images');
    console.log('2. Test locally');
    console.log('3. Commit and push to GitHub\n');
  }
}

compressAll().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
