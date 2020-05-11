const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
    }),
    addLessLoader({
        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#EF8333',
            '@text-color': '#222627',
            '@border-radius-base': '1rem'
           },
        },
    }),
);