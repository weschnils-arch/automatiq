const fs = require('fs');
let c = fs.readFileSync('ImagineAI.tsx', 'utf8');
c = c.replace(/className="absolute (h-\[\d+px\] left-\[\d+px\].*?w-\[\d+px\])"/g, 'className="absolute group overflow-hidden $1"');
c = c.replace(/className="absolute inset-0 max-w-none object-cover pointer-events-none (.*?)size-full"/g, 'className="absolute inset-0 max-w-none object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105 $1size-full"');
fs.writeFileSync('ImagineAI.tsx', c);
