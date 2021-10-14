import React from 'react';
import Error from 'next/error';

const My404 = (): React.ReactElement => <Error statusCode={404} />;

export default My404;
