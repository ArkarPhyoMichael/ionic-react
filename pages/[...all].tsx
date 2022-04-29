import dynamic from "next/dynamic";
import { FC } from "react";

interface IndexProps {}

const App = dynamic(() => import("../components/AppShell"), { ssr: false });

const Index: FC<IndexProps> = () => {
  return <App />;
};

export default Index;
