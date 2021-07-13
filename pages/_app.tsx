import { FC } from "react";

interface IProps {
    Component: FC;
}

const MyApp = ({ Component }: IProps) => <Component />;

export default MyApp;
