import { connectDb } from "@/app/lib/connectDb";

export const GET = async(request, {params})=>{
    const db = await connectDb()
    const serviceCollection = db.collection('services')
    try {
        const service = await serviceCollection.findOne({_id: params.id});
        return Response.json(service)
        // return Response.json({services})
    } catch (error) {
        console.log(error);
    }
}