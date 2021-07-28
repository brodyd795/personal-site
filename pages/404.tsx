import React from 'react';
import Error from 'next/error';

export default (): React.ReactElement => <Error statusCode={404} />;
