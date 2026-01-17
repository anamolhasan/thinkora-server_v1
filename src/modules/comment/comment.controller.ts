import { Request, Response } from "express"
import { CommentService } from "./comment.service"


const createComment = async (req:Request, res:Response) => {
    try {
        const user = req.user
        req.body.authorId = user?.id
        const result = await CommentService.createComment(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({
            error:'Comment creation failed',
            details:error
        })
    }
}

const getCommentById = async (req:Request, res:Response) => {

}

const getCommentsByAuthor = async (req:Request, res:Response) => {

}

const deleteComment = async (req:Request, res:Response) => {

}

const updateComment = async (req:Request, res:Response) => {

}

export const CommentController = {
    createComment, 
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment
}