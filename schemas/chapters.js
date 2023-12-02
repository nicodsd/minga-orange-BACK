import joi from 'joi'

export const createChapter = joi.object({
    title: joi.string()
        .required()
        .messages({
            'any.required': 'Title Required',
            'string.empty': 'Title Required'
        }),
    cover_photo: joi.string()
        .uri()
        .required()
        .messages({
            'any.required': 'Cover Photo Required',
            'string.empty': 'Cover Photo Required',
            'string.uri': 'Invalid Url'
        }),
    pages: joi.array()
        .items(
            joi.string()
                .uri())
        .required()
        .messages({
            'any.required': 'Pages Required',
            /* 'array.base': 'Pages Required',
            'array.empty': 'Pages Required',
            'string.uri': 'Invalid Url' */
        }),
    order: joi.number()
        .required()
        .messages({
            'number.base': 'Order must be a number'
        })
})

export const editChapter = joi.object({
    
})  

