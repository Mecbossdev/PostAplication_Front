import LayoutComponent from "@/components/layout-component";

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <LayoutComponent>
      <h1>Home</h1>
    </LayoutComponent>
  );
}
