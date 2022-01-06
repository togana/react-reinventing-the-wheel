import { Didact } from "../lib/Didact";

const container = document.getElementById("root")

const Text = (props) => (
  <p>{props.value}</p>
)

const Input = (props) => {
  return <input autofocus onInput={props.onInput} value={props.value} />
};

const Element = () => {
  const [value, setValue] = Didact.useState("");
  const [valueCount, setValueCount] = Didact.useState(0);
  const [keyCount, setKeyCount] = Didact.useState(0);

  const updateValue = e => {
    setValue(() => e.target.value)
    setValueCount(() => e.target.value.length)
    setKeyCount((c) => c + 1)
  }

  return (
    <div>
      <p>キー入力数: {keyCount}</p>
      <p>文字入力数: {valueCount}</p>
      <Input onInput={updateValue} value={value} />
      {value ? <Text value={value} /> : null}
    </div>
  )
}

Didact.render(<Element />, container)
