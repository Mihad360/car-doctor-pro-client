import { connectDb } from "@/app/lib/connectDb"
import { services } from "@/app/lib/services"

export const GET = async()=>{
    const db = await connectDb()
    const serviceCollection = db.collection('services')
    try {
        await serviceCollection.deleteMany()
        const res = await serviceCollection.insertMany(services)
        return Response.json({message: 'services added successfully', status: 200})
    } catch (error) {
        console.log(error);
    }
}