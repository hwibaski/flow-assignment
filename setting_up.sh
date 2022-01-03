#!/bin/sh
npm install
npx prisma migrate dev
node dataUploader/dataUploader.js
npm start