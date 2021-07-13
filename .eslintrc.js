module.exports = {
    extends: 'get-off-my-lawn',
    rules: {
        'no-undef': 'off',
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }]
    },
    settings: {
    "import/resolver": {
      typescript: {}
    },
  }
};
