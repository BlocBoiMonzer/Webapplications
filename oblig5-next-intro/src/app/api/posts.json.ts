import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Construct the path to the posts.json file
  const filePath = path.join(process.cwd(), 'public', 'posts.json');

  // Read the file asynchronously
  const postsJson = await fs.promises.readFile(filePath, 'utf8');

  // Parse the JSON string into a JavaScript object
  const posts = JSON.parse(postsJson);

  // Send the posts as the response
  res.status(200).json(posts);
}