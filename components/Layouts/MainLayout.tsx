import { MainLayoutProps } from "types/common";

export default function MainLayout(props: MainLayoutProps) {
  return (<main className='relative w-full'>{props.children}</main>);
}