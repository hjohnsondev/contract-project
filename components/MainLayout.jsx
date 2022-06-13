export default function MainLayout(props) {
  const { preview } = props;
  return (<main>{props.children}</main>);
}