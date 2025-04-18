import Button from '../../button';
import Icon from '../../icon';
import { useModal } from '../context/modal';

export const CloseModal = () => {
  const { close } = useModal();
  return (
    <Button variant="icon" size="small" onClick={close}>
      <Icon glyph="close" />
    </Button>
  );
};
