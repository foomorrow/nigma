module.exports = {
  src: [
    './*.html'
  ],
  dest: {
    outputPath: '',
    publicPath: '' 
  },
  i18n: '',
  rules: [
    {

    }
  ]
}

{
  context: '',
  destPath: 'build/',
  publicPath: '/',
  resolves: [
    {
      test: 'index.html'
    },
    {
      test: 'common.js',
      chunks: [
        'react',
        'react-dom'
      ]
    }
  ],
  rules: [
    {
      test: 'vendor.js',

    },
    {
      test: '*.js',
      export: true,
      pipe: 'babel-core'
    },

  ]
}