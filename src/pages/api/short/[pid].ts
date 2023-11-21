import { Url } from '../../../lib/schema';
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoose } from '@/lib/mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await connectMongoose(process.env.DB_LINK);
    console.log("hmm");
    const {pid}=req.query;

    const exist = await Url.find({nos:pid});
    const h=exist[0].url;
    res.json(exist+"  "+h);
    
    // res.json({main:h});
    // res.redirect(h);
    
}
