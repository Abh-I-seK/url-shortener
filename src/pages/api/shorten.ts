import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoose } from '@/lib/mongoose';
import { Url, Variable } from '../../lib/schema';

let i=1;
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    await connectMongoose(process.env.DB_LINK);

    const m=await Variable.find();
    if(m==null || m.length==0){
        const n=new Variable({val:0});
        await n.save();
    }else{
        const k=m[0];
        i=k.val;
    }

    const {url}=req.body;
    const u=await Url.findOne({url:url});
    if(u){
        res.json({msg:u.shortUrl})
    }else{
        const shortUrl="https://url-shortener-ochre-tau.vercel.app/"+ (i);
        const uNew=new Url({url,shortUrl,nos:i});
        await uNew.save();
        i++;
        await Variable.deleteMany();
        const now=new Variable({val:i});
        await now.save();
        res.json({msg:shortUrl});
    }
  }