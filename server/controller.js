module.exports = {
    getAllItems: (req, res) => {
        const db = req.app.get('db');

        db.getAllItems().then(resp => {
            res.status(200).send(resp);
        });
    },

    getItem: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.getItem([id]).then(resp => {
            res.status(200).send(resp[0]);
        }).catch(err => console.log(err));
    },

    createItem: (req, res) => {
        const db = req.app.get('db');
        const { item } = req.body;

        db.createItem([item]).the(resp => {
            res.status(200).send(resp);
        });
    },

    deleteItem: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.deleteItem([id]).then(resp => {
            res.status(200).send(resp);
        });
    },

    updateItem: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { item } = req.body;

        db.updateItem([id, item]).then(resp => {
            res.status(200).send(resp)
        })
    }
}