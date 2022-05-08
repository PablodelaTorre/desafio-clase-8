const errorMiddleware = function(err,req,res,nect){
    if(err){
        return res.status(500).json({error:err})
    }
    next()
}

module.exports = errorMiddleware