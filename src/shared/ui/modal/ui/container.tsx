import { useModal } from '../context/hooks';

export const ModalContainer = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) => {
  const { close } = useModal(id);

  return (
    <div className="flex justify-center items-center fixed scroll-auto snap-y overflow-y-auto overflow-x-hidden top-0 left-0 backdrop-filter backdrop-blur-xs bg-modal w-dvw h-dvh">
      <dialog
        role="dialog"
        aria-modal="true"
        open={true}
        className="flex justify-center items-center sticky z-20 bg-transparent top-0 rounded-3xl m-auto px-4 md:px-0 w-full"
      >
        {children}
      </dialog>
      <div
        className="absolute z-10 top-0 left-0 w-full h-full"
        onClick={close}
      ></div>
    </div>
  );
};
