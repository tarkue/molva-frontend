import Button from '../../button';
import Icon from '../../icon';

export const CloseModal = ({ close }: { close: () => void }) => {
  return (
    <Button variant="icon" size="small" onClick={close}>
      <Icon glyph="close" />
    </Button>
  );
};
