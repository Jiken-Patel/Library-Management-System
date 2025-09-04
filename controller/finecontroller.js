const { Fine } = require('../models');

exports.getFines = async (req, res) => {
    try {
    const fines = await Fine.findAll({ where: { userId: req.user.id } });
    res.json(fines);
}
catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
}
};

exports.payFine = async (req, res) => {
    try {
    const { fineId } = req.body;
    const fine = await Fine.findByPk(fineId);
    if (!fine || fine.userId !== req.user.id) {
        return res.status(400).json({ message: 'Invalid fine record' });
    }
    await fine.destroy();
    res.json({ message: 'Fine paid successfully' });
}   
catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
}       
};



