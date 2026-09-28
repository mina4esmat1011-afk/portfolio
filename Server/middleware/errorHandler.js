
const errorHandler = (err,req,res,next) => {
    console.log(err)

    if (err.name === 'CastError') {
        return res.status(400).json({message:"invalid id"})
    }

    if (err.code === 11000) {
        const keyValue = err.keyValue || err.errorResponse?.keyValue
        if (keyValue) {
            const field = Object.keys(keyValue)[0]
            const value = keyValue[field]
            return res.status(409).json({
                message:`${field} '${value}'already exists`
            })
        }
            return res.status(409).json({ message: 'duplicate value, item already exists' })

    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(e => e.message)

        return res.status(400).json({message:message.join(',')})
    }

    res.status(500).json({message:'error at server request'})
}

export default errorHandler