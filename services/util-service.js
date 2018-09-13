const AWS = require('aws-sdk');

module.exports = {

    upload_file: function(file,save_name_file) {
        return new Promise(function(resolve, reject) {

                let s3bucket = new AWS.S3({
                    accessKeyId: IAM_USER_KEY,
                    secretAccessKey: IAM_USER_SECRET,
                    Bucket: BUCKET_NAME,
                });

                s3bucket.createBucket(function() {
                    var params = {
                        Bucket: BUCKET_NAME,
                        Key: save_name_file,
                        Body: file.data,
                        ACL: 'public-read'
                    };
                    s3bucket.upload(params, function(err, data) {
                        if (err) {
                            console.log('error in callback');
                            console.log(err);
                            reject(err);
                        }
                        console.log('success');
                        console.log(data);
                        resolve(data);
                    }).on('httpUploadProgress', function(progress) { // TypeError here
                        console.log("progress: " + progress[0]);
                    });;
                });
            
        })


    }


}