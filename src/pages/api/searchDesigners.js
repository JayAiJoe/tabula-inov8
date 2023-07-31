import { NextApiRequest, NextApiResponse } from "next";
import { searchDesigners } from "../../lib/prismaHelpers";

export default async function handler(req, res){
    if(req.method === 'GET'){
        try{
            const {q} = req.query;

            if(typeof q !== "string"){
                throw new Error("Invalid request");
            }

            const ds = await searchDesigners(q);
            res.status(200).json({designers: ds});
        } catch (error){
            res.status(500).end();
        }
    }
    
}