import Tab from '../tab';

interface TabsProps {
  panels: string[];
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const Tabs = (props: TabsProps) => {
  return (
    <ul className="flex gap-3 justify-center w-full">
      {props.panels.map((el, key) => (
        <li key={key}>
          <Tab
            active={props.state[0] == el}
            onClick={() => props.state[1](el)}
          >
            {el}
          </Tab>
        </li>
      ))}
    </ul>
  );
};
