import { cn } from '@/shared/lib/utils';
import { useEffect, useRef } from 'react';
import { Pair } from '../select/pair';
import Tab from '../tab';
import {
  scrollToCurrentTab,
  useIsContainerWiderThanBody,
} from './lib/utils';

interface TabsProps {
  panels: Pair<string, string>[];
  state: [string, (value: string) => void];
}

export const Tabs = (props: TabsProps) => {
  const scrollable = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLUListElement>(null);
  const isContainerWiderThanBody =
    useIsContainerWiderThanBody(container);

  useEffect(
    () => scrollToCurrentTab(scrollable, props.panels, props.state),
    [scrollable.current],
  );
  return (
    <div className="relative h-9 w-full">
      <div className="max-[660px]:-left-4 max-[660px]:absolute overflow-y-hidden max-[660px]:w-dvw max-w-dvw max-h-9">
        <div
          className={cn(
            'flex items-center overflow-y-hidden w-full overfow-x-auto scroll-smooth box-content',
            isContainerWiderThanBody
              ? 'justify-start sm:justify-center'
              : 'justify-center',
          )}
          ref={scrollable}
        >
          <div className="max-[660px]:px-6">
            <ul className="flex gap-3 w-fit m-auto" ref={container}>
              {props.panels.map((el, key) => (
                <li key={key}>
                  <Tab
                    active={props.state[0] == el.value}
                    onClick={() => props.state[1](el.value)}
                  >
                    {el.label}
                  </Tab>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
