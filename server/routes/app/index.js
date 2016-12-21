//应用的增删查改
const express = require('express');

const router = new express.Router();
const App = require('mongoose').model('App');

// Create
router.post('/', (req, res, next) => {
    // 提交数据
    req.body.name;
    req.body.description;
    const appData = {
        createTime: new Date(),
        name: req.body.name,
        description: req.body.description
    };

    const newApp = new App(appData);
    newApp.save((err) => {
        if (err) {
            return res.json({
                success: false
            });
        }

        // 返回结果
        return res.json({
            success: true,
        });
    });


});


// Read
router.get('/login', (req, res, next) => {
    return res.json({
        success: false,
    });
});
// Update
router.put('/', (req, res, next) => {

    //是否存在Id
    if(req.body.id){
        // 如果存在，那么就是Update
    } else {
        // 如果不存在，就是Create

    }
    return res.json({
        success: false,
    });

});
// Delete
router.delete('/', (req, res, next) => {
    return res.json({
        success: false,
    });
});


module.exports = router;
