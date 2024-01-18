import { existsSync, unlinkSync } from 'fs';
import path from 'path';

export const removeOldImage = (filesUrl: string[]) => {
  const deleteImageFolder = path.join(__dirname, '../files/');
  filesUrl.forEach(file => {
    const filePath = path.join(deleteImageFolder, file.split('/').pop() || '');
    const isFileExist = existsSync(filePath);
    if (isFileExist) unlinkSync(path.join(filePath));
  });
};

export const filesToURL = (files: Express.Multer.File[]) => {
  const basePathAssets = process.env.SERVER_URL + '/files/';
  return files.map(file => {
    return {
      url: basePathAssets + file.filename,
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
      path: file.path,
    };
  });
};
