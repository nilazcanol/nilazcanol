

const path = require('path');
const { v4: uuidv4 } = require('uuid');

const uploadFile = ( files, extensionsValids = ['png','jpg','jpeg','gif'], folder = '' ) => {

    return new Promise( (resolve, reject) => {

        const { file } = files;
        const nameCut = file.name.split('.');
        const extension = nameCut[ nameCut.length - 1 ];

        // Validate the extension
        if ( !extensionsValids.includes( extension ) ) {
            return reject(`The extensions ${ extension }is not valid - ${ extensionsValids }`);
        }
        
        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join( __dirname, '../uploads/', folder, nombreTemp );

        file.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }

            resolve( nombreTemp );
        });

    });

}


module.exports = {
    uploadFile
}