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
    newApp.save((err, doc) => {
        if (err) {
            return res.json({
                success: false
            });
        }
        // 返回结果
        return res.json({
            success: true,
            id:doc.id,
        });
    });

});

function findApp(id) {
    return new Promise((resolve, reject) => {
        App.findOne({ id: id }, (err, app) => {
            if (err) {
                reject(err);
            }
            if (!app) {
                const error = new Error('Incorrect id');
                error.name = 'IncorrectCredentialsError';
                console.log('no this app');
                reject(error);
            }
            resolve(app);
        });
    });
}

// Read
router.get('/:id', (req, res) => {
    console.log();
    const id = req.params.id;
    findApp(id)
        .then((data) => {
            console.log(data.name);
            return res.json({
                success: true,
                data: data,
            });
        })
        .catch((err) => {
            console.log(err)
        })

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
