import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sökväg till din lokala OpenAPI-specifikation
const OPENAPI_FILE = path.join(__dirname, '../docs/PxAPI-2.yml');
// Output-fil
const OUTPUT_FILE = path.join(__dirname, '../src/types/generated/scb-schema.ts');

async function generateTypes() {
  // Kontrollera att specifikationen finns
  if (!fs.existsSync(OPENAPI_FILE)) {
    console.error(`❌ Kunde inte hitta OpenAPI-filen: ${OPENAPI_FILE}`);
    process.exit(1);
  }

  // Skapa mappen om den inte finns
  const generatedDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  console.log(`📦 Läser specifikation från: ${OPENAPI_FILE}`);

  try {
    // Generera typer från den lokala filen med npx (kräver ingen installation)
    execSync(`npx openapi-typescript "${OPENAPI_FILE}" -o "${OUTPUT_FILE}"`, { 
      stdio: 'inherit',
      encoding: 'utf-8' 
    });

    // Lägg till header
    if (fs.existsSync(OUTPUT_FILE)) {
      const content = fs.readFileSync(OUTPUT_FILE, 'utf-8');
      const header = `/**\n * AUTO-GENERATED FILE - DO NOT EDIT\n * Source: docs/PxAPI-2.yml\n * Generated at: ${new Date().toISOString()}\n */\n\n`;
      fs.writeFileSync(OUTPUT_FILE, header + content);
      console.log(`✅ Typer genererade till: ${OUTPUT_FILE}`);
    }
  } catch (error) {
    console.error('❌ Misslyckades med att generera typer.');
    process.exit(1);
  }
}

generateTypes().catch(console.error);
