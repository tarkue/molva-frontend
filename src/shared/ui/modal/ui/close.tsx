import Button from '../../button';
import Icon from '../../icon';

export const CloseModal = ({ close }: { close: () => void }) => {
  return (
    <Button
      variant="icon"
      size="small"
      className="z-10 block min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px]"
      onClick={close}
    >
      <Icon glyph="close" />
    </Button>
  );
};
