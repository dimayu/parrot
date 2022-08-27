let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    mobileFirst: false,
    container: {
        maxWidth: '1170px',
        fields: '115px'
    },
    breakPoints: {
        lm: {
            width: '1140px',
            fields: '50px'
        },
        md: {
            width: '940px',
            fields: '35px'
        },
        sm: {
            width: '780px',
            fields: '25px'
        },
        xs: {
            width: '640px',
            fields: '20px'
        },
        xxs: {
            width: '440px',
            fields: '15px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
