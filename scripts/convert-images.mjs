import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const conversions = [
  // Public directory
  {
    input: 'public/led-van-hero-bg.png',
    outputs: [
      { path: 'public/led-van-hero-bg.webp', width: 1920, quality: 84 },
      { path: 'public/led-van-hero-bg-mobile.webp', width: 768, quality: 82 }
    ]
  },
  {
    input: 'public/led-van-advertising.png',
    outputs: [
      { path: 'public/led-van-advertising.webp', quality: 84 }
    ]
  },
  {
    input: 'public/led-van-gallery-1.png',
    outputs: [{ path: 'public/led-van-gallery-1.webp', quality: 82 }]
  },
  {
    input: 'public/led-van-gallery-2.png',
    outputs: [{ path: 'public/led-van-gallery-2.webp', quality: 82 }]
  },
  {
    input: 'public/led-van-gallery-3.png',
    outputs: [{ path: 'public/led-van-gallery-3.webp', quality: 82 }]
  },
  {
    input: 'public/led-van-gallery-4.png',
    outputs: [{ path: 'public/led-van-gallery-4.webp', quality: 82 }]
  },
  {
    input: 'public/lookwalker-gallery-1.png',
    outputs: [{ path: 'public/lookwalker-gallery-1.webp', quality: 84 }]
  },
  {
    input: 'public/lookwalker-gallery-2.png',
    outputs: [{ path: 'public/lookwalker-gallery-2.webp', quality: 82 }]
  },
  {
    input: 'public/lookwalker-gallery-3.jpg',
    outputs: [{ path: 'public/lookwalker-gallery-3.webp', quality: 82 }]
  },
  {
    input: 'public/lookwalker-gallery-4.jpg',
    outputs: [{ path: 'public/lookwalker-gallery-4.webp', quality: 82 }]
  },
  {
    input: 'public/lookwalker-demo.jpg',
    outputs: [{ path: 'public/lookwalker-demo.webp', quality: 82 }]
  },
  {
    input: 'public/lookwalker-hero.jpg',
    outputs: [{ path: 'public/lookwalker-hero.webp', quality: 82 }]
  },
  {
    input: 'public/led-wall-1.jpg',
    outputs: [{ path: 'public/led-wall-1.webp', quality: 84 }]
  },
  {
    input: 'public/led-wall-2.jpg',
    outputs: [{ path: 'public/led-wall-2.webp', quality: 82 }]
  },
  {
    input: 'public/led-wall-3.jpg',
    outputs: [{ path: 'public/led-wall-3.webp', quality: 82 }]
  },
  {
    input: 'public/adat-1.jpg',
    outputs: [{ path: 'public/adat-1.webp', quality: 82 }]
  },
  {
    input: 'public/adat-2.jpg',
    outputs: [{ path: 'public/adat-2.webp', quality: 82 }]
  },
  {
    input: 'public/adat-3.jpg',
    outputs: [{ path: 'public/adat-3.webp', quality: 82 }]
  },
  {
    input: 'public/vehicle-branding-hero-1.jpg',
    outputs: [{ path: 'public/vehicle-branding-hero-1.webp', quality: 84 }]
  },
  {
    input: 'public/vehicle-branding-hero-2.jpg',
    outputs: [{ path: 'public/vehicle-branding-hero-2.webp', quality: 82 }]
  },
  {
    input: 'public/vehicle-branding-hero-3.jpg',
    outputs: [{ path: 'public/vehicle-branding-hero-3.webp', quality: 82 }]
  },
  {
    input: 'public/video-production-preview.jpg',
    outputs: [{ path: 'public/video-production-preview.webp', quality: 82 }]
  },
  {
    input: 'public/printing-preview.jpg',
    outputs: [{ path: 'public/printing-preview.webp', quality: 82 }]
  },
  {
    input: 'public/signage-preview.jpg',
    outputs: [{ path: 'public/signage-preview.webp', quality: 82 }]
  },
  {
    input: 'public/ai-growth.png',
    outputs: [{ path: 'public/ai-growth.webp', quality: 85 }]
  },
  {
    input: 'public/global-marketing.png',
    outputs: [{ path: 'public/global-marketing.webp', quality: 85 }]
  },
  {
    input: 'public/services-hero-1.jpg',
    outputs: [{ path: 'public/services-hero-1.webp', quality: 82 }]
  },
  {
    input: 'public/services-hero-2.jpg',
    outputs: [{ path: 'public/services-hero-2.webp', quality: 82 }]
  },
  {
    input: 'public/services-hero-3.jpg',
    outputs: [{ path: 'public/services-hero-3.webp', quality: 82 }]
  },

  // src/assets/images
  {
    input: 'src/assets/images/services-hero.png',
    outputs: [{ path: 'src/assets/images/services-hero.webp', quality: 84 }]
  },
  {
    input: 'src/assets/images/van1.jpg',
    outputs: [{ path: 'src/assets/images/van1.webp', quality: 84 }]
  },
  {
    input: 'src/assets/images/van2.jpg',
    outputs: [{ path: 'src/assets/images/van2.webp', quality: 84 }]
  },
  {
    input: 'src/assets/images/van3.jpg',
    outputs: [{ path: 'src/assets/images/van3.webp', quality: 84 }]
  },

  // Logos in public/
  {
    input: 'public/B2P_logo_trimmed.png',
    outputs: [{ path: 'public/B2P_logo_trimmed.webp', quality: 90 }]
  },
  {
    input: 'public/B2P_no_bg.png',
    outputs: [{ path: 'public/B2P_no_bg.webp', quality: 90 }]
  },
  {
    input: 'public/tanishq.png',
    outputs: [{ path: 'public/tanishq.webp', quality: 90 }]
  },
  {
    input: 'public/nesto.png',
    outputs: [{ path: 'public/nesto.webp', quality: 90 }]
  },
  {
    input: 'public/asset.png',
    outputs: [{ path: 'public/asset.webp', quality: 90 }]
  },
  {
    input: 'public/swiggy.png',
    outputs: [{ path: 'public/swiggy.webp', quality: 90 }]
  },
  {
    input: 'public/lic.jpg',
    outputs: [{ path: 'public/lic.webp', quality: 85 }]
  },
  {
    input: 'public/vstar.jpg',
    outputs: [{ path: 'public/vstar.webp', quality: 85 }]
  },
  {
    input: 'public/ksfe.png',
    outputs: [{ path: 'public/ksfe.webp', quality: 90 }]
  },
  {
    input: 'public/josco.png',
    outputs: [{ path: 'public/josco.webp', quality: 90 }]
  },
  {
    input: 'public/tata-motors.png',
    outputs: [{ path: 'public/tata-motors.webp', quality: 90 }]
  },
  {
    input: 'public/tata.png',
    outputs: [{ path: 'public/tata.webp', quality: 90 }]
  },
  {
    input: 'public/vasan.jpg',
    outputs: [{ path: 'public/vasan.webp', quality: 85 }]
  },
  {
    input: 'public/renault.png',
    outputs: [{ path: 'public/renault.webp', quality: 90 }]
  }
];

async function run() {
  console.log('Starting conversion...');
  const results = [];
  let totalOriginalBytes = 0;
  let totalOptimizedBytes = 0;

  for (const item of conversions) {
    const inputPath = path.resolve(item.input);
    if (!fs.existsSync(inputPath)) {
      console.warn(`Input not found: ${item.input}`);
      continue;
    }

    const inStats = fs.statSync(inputPath);
    totalOriginalBytes += inStats.size;

    for (const out of item.outputs) {
      const outPath = path.resolve(out.path);
      let transform = sharp(inputPath);
      if (out.width) {
        transform = transform.resize({ width: out.width, withoutEnlargement: true });
      }

      await transform.webp({ quality: out.quality || 82, effort: 6 }).toFile(outPath);
      const outStats = fs.statSync(outPath);
      totalOptimizedBytes += outStats.size;

      const saving = ((1 - outStats.size / inStats.size) * 100).toFixed(1);
      results.push({
        input: item.input,
        output: out.path,
        origKB: (inStats.size / 1024).toFixed(1),
        newKB: (outStats.size / 1024).toFixed(1),
        savingsPercent: `${saving}%`
      });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  console.log('--- SUMMARY ---');
  console.log(`Original total: ${(totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalOptimizedBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved: ${(((totalOriginalBytes - totalOptimizedBytes) / totalOriginalBytes) * 100).toFixed(1)}%`);
}

run().catch(console.error);
