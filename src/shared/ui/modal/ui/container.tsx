export const ModalContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed scroll-auto top-0 left-0 w-dvw h-dvh">
      <dialog
        open={true}
        className="absolute z-20 left-0 right-0 top-0 bottom-0 m-auto bg-none border-none rounded-3xl"
      >
        {children}
      </dialog>
      <div className="absolute z-10 top-0 left-0 w-dvw h-dvh bg-[#000] opacity-20"></div>
    </div>
  );
};
