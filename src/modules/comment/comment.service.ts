import { prisma } from "../../lib/prisma";


const createComment = async (payload:{
    content:string;
    authorId:string;
    postId:string;
    parentId?:string
}) => {
   await prisma.post.findUniqueOrThrow({
    where:{
        id:payload.postId
    }
   })
   if(payload.parentId){
    await prisma.comment.findUniqueOrThrow({
        where:{
            id:payload.parentId
        }
    })
   }
   return await prisma.comment.create({
    data:payload
   })
}

const getCommentById = async () => {

}

const getCommentsByAuthor = async () => {

}

const deleteComment = async () => {

}

const updateComment = async () => {

}


export const  CommentService = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment
}