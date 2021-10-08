import Area from '../../components/Area';

export default function Modal(props) {

  if (!props.visible) return null;

  return (
    <>
      {props.children}
    </>
  )
}