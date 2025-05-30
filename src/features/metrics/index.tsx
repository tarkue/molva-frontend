import { MetrikaCounter } from 'react-metrika';
// start changes
import TagManager from '@sooro-io/react-gtm-module';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID,
};

TagManager.initialize(tagManagerArgs);

export const Metrics = () => {
  return (
    <>
      <MetrikaCounter
        id={import.meta.env.VITE_YANDEX_METRIKA_ID}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        }}
      />
    </>
  );
};
