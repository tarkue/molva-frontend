import Icon from '@/shared/ui/Icon';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center bg-gray-900 p-3 ">
      <div className="max-w-[1100px] w-full flex items-center justify-between">
        <Icon glyph="logo" size="logo" />
      </div>
    </header>
  );
}
