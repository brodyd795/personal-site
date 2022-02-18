// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';

import {ImageProps} from "next/image";
import React from "react";
import {domains} from "./enums/domains";

process.env.VERCEL_ENV = domains.LOCALHOST;

jest.mock('next/router');
jest.mock('next/image', () => (props: ImageProps) => {
    const {priority} = props;
    const toPass = {
        ...props,
        priority: priority?.toString()
    };
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @next/next/no-img-element
        <img {...toPass} alt='' />
    );
});

export {};
