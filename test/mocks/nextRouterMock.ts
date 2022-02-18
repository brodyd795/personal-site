import {NextRouter} from "next/router";

export const createRouter = (): NextRouter => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    BaseRouter: null,
    push: jest.fn(),
    query: {}
});