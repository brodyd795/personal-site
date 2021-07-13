module.exports = {
    extends: 'get-off-my-lawn',
    rules: {
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'no-undef': 'off'
    },
    settings: {
    "import/resolver": {
      typescript: {}
    },
  }
};
