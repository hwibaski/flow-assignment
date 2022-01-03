const csv = require('csv-parser');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createExtension = () => {
  fs.createReadStream('./dataUploader/extension.csv')
    .pipe(csv())
    .on('data', async c => {
      try {
        console.log(c);
        await prisma.$queryRaw`
          INSERT INTO extensions(id, extension_name, tag) VALUES (${c.id}, ${c.extension_name}, ${c.tag})
        `;
      } catch (error) {
        console.log('error :', error);
      }
    })
    .on('end', async () => {
      prisma.$disconnect();
    });
};

createExtension();
