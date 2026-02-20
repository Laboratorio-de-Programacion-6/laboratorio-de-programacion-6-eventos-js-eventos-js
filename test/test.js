const fs = require('fs');

const content = fs.readFileSync('script.js', 'utf8');

if (!content.includes('addEventListener')) {
    console.log("❌ No se detectó addEventListener");
    process.exit(1);
}

if (!content.includes('preventDefault')) {
    console.log("❌ No se detectó preventDefault()");
    process.exit(1);
}

console.log("✅ Estructura básica correcta");
