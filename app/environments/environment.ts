const ketabkhoonBaseUrl = 'https://www.ketabkhooon.ir';
const iranPlBaseUrl = 'https://api.iranpl.ir';
const backOfficeBaseUrl = 'https://dev.iranpl.ir';


export const environment = {
    production: false,
    competition : `${ketabkhoonBaseUrl}/api/v1/competition`,
    borrows: `${iranPlBaseUrl}/api/borrows`,
    backoffice: `${backOfficeBaseUrl}/backoffice`,
    libraryInformation: `${iranPlBaseUrl}/api/libraryInformation`,
};