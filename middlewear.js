module.exports = middlewear = {
    logger: function(req, res, next){
    console.log('odpalona strona About');
    next();
    }
};