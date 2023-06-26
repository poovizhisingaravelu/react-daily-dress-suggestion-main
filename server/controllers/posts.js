import postMessage from '../models/postMessage';
import postMessage from '../models/postMessage';
export const getposts = async (req, res) => {
  try {
    const PostMessage = await postMessage.find();
    console.log(postMessage)
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({message:error.message})
  }
};
export const createpost =async (req, res) => {
const post=req.body;
const newPost=new postMessage(post);
try{
await newPost.save()
res.status(201)
}catch(error){
res.status(409).json({})
}
};
