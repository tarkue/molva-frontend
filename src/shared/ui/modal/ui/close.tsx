import Button from '../../button';
import Icon from '../../icon';

export const CloseModal = ({ close }: { close: () => void }) => {
  return (
    <Button
      variant="icon"
      size="small"
      className="z-10"
      onClick={close}
    >
      <Icon glyph="close" />
    </Button>
  );
};
