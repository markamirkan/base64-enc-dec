module.exports = {
    encode: function (string) {
        let encodedString = Buffer.from(string).toString('base64');
        return encodedString;
    },
    decode: function (string) {
        let decodedString = Buffer.from(string, 'base64').toString();
        return decodedString;
    }
}