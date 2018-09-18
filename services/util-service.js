const AWS = require('aws-sdk');

var self = module.exports = {

    upload_file: function(file,save_name_file) {
        return new Promise(function(resolve, reject) {

            var s3 = new AWS.S3({     
                accessKeyId: '',
                secretAccessKey: '',
                  params: {
                        Key: save_name_file, 
                        Body: file,
                        Bucket: ''},
                  options: {partSize: 5 * 1024 * 1024, queueSize: 10}   // 5 MB
               });
               s3.upload().on('httpUploadProgress', function (evt) {
               }).send(function (err, data) {
                   if(err)
                     reject(err);
                  resolve(data);
               });
            
        })

    },

    form_to_json: function(busboy) {
        return new Promise(function(resolve, reject) {
            let object = {};
            let formData = new Map();
            busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
               formData.set(fieldname, val);
            });
    
            busboy.on('finish', function() {
                formData.forEach((value, key) => {
                    var keys = key.split('.'),
                        last = keys.pop();
                    keys.reduce((r, a) => r[a] = r[a] || {}, object)[last] = value;
                });
               resolve(object);
            });
        })
    },

    upload_promise: function(busboy) {
        return new Promise(function(resolve, reject) {
            busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                new_file_name = new Date().getTime()+"-"+filename;
                self.upload_file(file,new_file_name).then(resp=>{
                    resolve(resp);
                });
            });
        })

    }
}
