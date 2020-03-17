module.exports = {
    encode: function (string) {
        let encodedString = btoa(string);
        return encodedString;
    },
    decode: function (string) {
        let decodedString = atob(string);
        return decodedString;
    }
}