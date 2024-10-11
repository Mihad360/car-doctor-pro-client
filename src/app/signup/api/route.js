import { connectDb } from "@/app/lib/connectDb";
import bcrypt from "bcrypt";


export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDb();
    const userCollection = db.collection('users')
    const exist = await userCollection.findOne({email: newUser.email})
    if(exist){
        return Response.json({message: 'user already exist'}, {status: 401})
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({...newUser, password: hashPassword})
    return Response.json({message: 'User created'}, {status: 200})
  } catch (error) {
    return Response.json({message: 'something is wrong', error}, {status: 500})
  }
};
