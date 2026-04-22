const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Set order: prompt group 4,6,5,3,1,2,7,8,9 mapped to set-01 through set-09
const ORDER = [
  '8fb41869-6bb3-4e36-9230-bbdfddf2da67', // set-01 (prompt 4)
  'cc634897-e2fa-4cd2-98a8-553d4f349fe2', // set-02 (prompt 6)
  '350a56ab-7719-45a4-806a-062d047bca6a', // set-03 (prompt 5)
  'ca93566d-4a48-4f58-84fd-f531f602ad32', // set-04 (prompt 3)
  '05d1959a-e2f5-4009-b83a-2b669b9442c1', // set-05 (prompt 1)
  '5cd489f1-3882-4309-9a39-7ffd2b27448f', // set-06 (prompt 2)
  'bd9f90ec-8c2e-49dc-bbbb-abe98bae7590', // set-07 (prompt 7)
  '2767d2f6-58af-42e4-bb52-952327103322', // set-08 (prompt 8)
  '8def6f0f-e3d0-46ea-ab7d-75d22867549b', // set-09 (prompt 9)
];

const SLOTS = ['a', 'b', 'c', 'd'];
const ORIGINALS = path.join(__dirname, 'images', 'originals');
const WEB = path.join(__dirname, 'images', 'web');
const QUALITY = 85;

async function convert() {
  const files = fs.readdirSync(ORIGINALS);
  let converted = 0;
  let missing = 0;

  for (let setIdx = 0; setIdx < ORDER.length; setIdx++) {
    const uuid = ORDER[setIdx];
    const setNum = String(setIdx + 1).padStart(2, '0');
    const outDir = path.join(WEB, `set-${setNum}`);

    fs.mkdirSync(outDir, { recursive: true });

    for (let variantIdx = 0; variantIdx < 4; variantIdx++) {
      const slot = SLOTS[variantIdx];
      const srcFile = files.find(f => f.endsWith(`_${uuid}_${variantIdx}.png`));

      if (!srcFile) {
        console.error(`  MISSING: set-${setNum}/${setNum}-${slot} (uuid ${uuid}, variant ${variantIdx})`);
        missing++;
        continue;
      }

      const src = path.join(ORIGINALS, srcFile);
      const out = path.join(outDir, `${setNum}-${slot}.webp`);

      await sharp(src).webp({ quality: QUALITY }).toFile(out);
      console.log(`  OK  set-${setNum}/${setNum}-${slot}.webp`);
      converted++;
    }
  }

  console.log(`\nDone. ${converted} converted, ${missing} missing.`);
}

convert().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
