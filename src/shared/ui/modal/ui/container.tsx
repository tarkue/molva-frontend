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
    <div className="fixed scroll-auto top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur-xs">
      <dialog
        role="dialog"
        aria-modal="true"
        open={true}
        className="absolute z-20 left-0 right-0 top-0 bottom-0 m-auto bg-none border-none rounded-3xl"
      >
        {children}
      </dialog>
      <div
        className="absolute z-10 top-0 left-0 w-dvw h-dvh bg-[#000] opacity-20"
        onClick={close}
      ></div>
    </div>
  );
};
