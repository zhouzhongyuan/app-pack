//应用的增删查改
const express = require('express');

const router = new express.Router();
const App = require('mongoose').model('App');

// Create
router.post('/', (req, res) => {
    // 提交数据
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
function findAppList() {
    return new Promise((resolve, reject) => {
        App.find({}, (err, app) => {
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
router.get('/', (req, res) => {
    findAppList()
        .then((data) => {
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
router.put('/', (req, res) => {
    const id = req.body.id;
    if(req.body.plugin){
        req.body.plugin = JSON.parse(req.body.plugin);
    }
    console.log(req.body);
    // Save to db
    // 根据id判断此app是否存在
    findApp(id)
        .then((appData) => {
            Object.assign(appData, req.body);
            appData.save(function (err, updatedTank) {
                if (err) return handleError(err);
                res.send(updatedTank);
            });
        })
        .catch((err) => {
            console.log(err);
            return res.json({
                success: false,
                data: err,
            });
        })
});
// Delete
router.delete('/', (req, res) => {
    return res.json({
        success: false,
    });
});


module.exports = router;
