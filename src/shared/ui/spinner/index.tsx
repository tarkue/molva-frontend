import { SyncLoader } from 'react-spinners';

export const Spinner = () => {
  return (
    <div className="flex w-full items-center p-6 rounded-2xl">
      <SyncLoader
        loading={true}
        size={6}
        color={'#767676'}
        className="mx-auto"
      />
    </div>
  );
};
