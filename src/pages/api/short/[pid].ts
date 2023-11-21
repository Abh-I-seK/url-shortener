import { Url } from '../../../lib/schema';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {pid}=req.query;
    
    const exist = await Url.find({nos:pid})
    const h=exist[0].url;
    res.redirect(h);
    res.json({main:h});
}
