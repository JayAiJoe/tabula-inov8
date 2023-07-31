import { NextApiRequest, NextApiResponse } from "next";
import { searchGroupBuys } from "../../lib/prismaHelpers";

export default async function handler(req, res){
    if(req.method === 'GET'){
        try{
            const {q} = req.query;

            if(typeof q !== "string"){
                throw new Error("Invalid request");
            }

            const gbs = await searchGroupBuys(q);
            res.status(200).json({groupbuys: gbs});
        } catch (error){
            res.status(500).end();
        }
    }
    
}