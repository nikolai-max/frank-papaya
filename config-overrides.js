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
            '@secondary-color': '#621E50',
            '@border-radius-base': '1rem',
            '@font-family': '"Knewave", cursive;',
            '@text-color': 'fade(@black, 65%);',
            '@heading-color': 'white;',
            '@link-color': 'white;'
           },
        },
    }),
);