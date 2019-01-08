module.exports = {
    hello: function(req) {
        if (!req.body.name) {
            return 'An error occurred: Name is a required paramter';
        }
        const name = req.body.name;
        const lang = req.body.language || 'en';
        switch(lang) {
            case 'en':
                return 'Hello, ' + name
            case 'es':
                return 'Hola, ' + name
            case 'de':
                return 'Hallo, ' + name
            default:
                return 'Error: Invalid Language'
        }
    }
};