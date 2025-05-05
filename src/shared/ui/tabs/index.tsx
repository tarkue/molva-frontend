import { Pair } from '../select/pair';
import Tab from '../tab';

interface TabsProps {
  panels: Pair[];
  state: [string, (value: string) => void];
}

export const Tabs = (props: TabsProps) => {
  return (
    <ul className="flex gap-3 justify-center w-full">
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
  );
};
