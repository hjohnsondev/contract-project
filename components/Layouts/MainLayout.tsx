export default function MainLayout(props) {
  const { preview } = props;
  return (<main className='relative w-full'>{props.children}</main>);
}