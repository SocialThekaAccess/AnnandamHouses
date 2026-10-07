# Hero Section Image Optimization Guide

## Current Issue
Hero slider images are too large (2-3 MB each), causing slow loading on mobile devices.

## Images to Optimize

### Current Sizes:
- `src/assets/AnnandamHomes1.png` - 2.4 MB
- `src/assets/Anandamslider2.png` - 2.6 MB  
- `src/assets/sliderhome3.png` - 2.7 MB

### Target Sizes:
- Desktop: 300-500 KB per image
- Mobile: 100-200 KB per image (optional separate mobile versions)

## Optimization Methods

### Method 1: Online Tools (Quickest)
1. Go to [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. Upload each image
3. Download compressed version
4. Replace original files

### Method 2: Using Sharp (Automated)
```bash
# Install Sharp
npm install sharp

# Run compression script
node compress-images.js
```

### Method 3: Manual Resize
1. Open images in image editor (Photoshop, GIMP, etc.)
2. Resize to max width 1920px
3. Save as JPEG with 75-85% quality
4. Or convert to WebP format (even better compression)

## Recommended Settings

### For JPEG:
- Max width: 1920px
- Quality: 75-85%
- Progressive: Yes

### For WebP (Best):
- Max width: 1920px
- Quality: 75-80%
- File extension: `.webp`

## Implementation Done

✅ Added image preloading with loading spinner
✅ Progressive image loading (first image loads first)
✅ Better mobile optimization
✅ Smooth transitions
✅ Lazy loading for subsequent images
✅ Hardware acceleration (backface-visibility, will-change)

## Next Steps

1. **Compress the images** using any method above
2. Replace old images with compressed versions
3. Clear browser cache and test
4. Check mobile loading speed

## Expected Results

After compression:
- Initial load time: 2-3 seconds → 0.5-1 second
- Mobile data usage: 7-8 MB → 1-2 MB
- Better mobile experience
- Faster slider transitions

## Testing

Test on:
- Desktop browser
- Mobile browser (Chrome DevTools device emulation)
- Real mobile device
- Slow 3G connection (Chrome DevTools Network throttling)
