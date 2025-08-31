import WordInput from "./WordInput";
import { Button } from "./components/ui/button";
import { useState } from "react";

function upsetString(str: string) {
  const strArr: string[] = str.split("");
  for (let i = strArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
  }
  return strArr;
}

export default function GuessPage() {
  const words = [
    "flower",
    "black",
    "island",
    "white",
    "gray",
    "green",
    "blue",
    "yellow",
    "purple",
    "light",
    "dark",
    "bright",
    "grass",
    "tree",
    "train",
    "car",
    "react",
    "coding",
    "random",
  ];
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(Math.floor(Math.random() * words.length));
  const [scrambled, setScrambled] = useState<string[]>(
    upsetString(words[index]),
  );
  const [times, setTimes] = useState(0);
  function handleReset() {
    const newIndex = Math.floor(Math.random() * words.length);
    setIndex(newIndex);
    setScrambled(upsetString(words[newIndex]));
    setValue("");
    setTimes(0)
  }
  return (
    <div className="bg-[#030616] text-[#F2F5F9] py-5 w-[360px] rounded-lg m-auto">
      <h1 className="text-[#7429C6] font-bold text-[20px] w-[320px] text-center mb-4">
        Word Scramble
      </h1>
      <p className="bg-[#4A5567] font-medium py-2 text-center w-[320px] rounded-md m-auto">
        {scrambled.map((ch) => (
          <span className="mr-5 text-[32px]">{ch}</span>
        ))}
      </p>
      <div className="w-[320px] m-auto mt-5">
        <span className="w-[140px] mr-[40px] text-[12px] flex justify-center items-center">
          Tries({times}/5):
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              className={`inline-block h-[6px] w-[6px] rounded-full ml-2 ${
                times >= i ? "bg-[#7429C6]" : "bg-[#4A5567]"
              }`}
            ></div>
          ))}
        </span>
      </div>
      <WordInput
        length={words[index].length}
        value={value}
        setValue={setValue}
        handleComplete={(val) => {
          setTimeout(() => {
            if (val === words[index]) {
              alert("Congratulations! You input the right answer!");
              handleReset();
            } else if (times < 5){
              alert(`Wrong! Please try again!`);
              setTimes(times + 1)
              setValue("")
            } else if (times >= 5) {
              alert(`You'r failed, the correct answer is ${words[index]}.Try another word.`)
              handleReset();
            }
          }, 100);
        }}
      ></WordInput>
      <div className="w-[300px] m-auto">
        <Button
          onClick={() => {
            setScrambled(upsetString(words[index]));
          }}
          className="bg-[#C951E7] w-[140px] mr-[20px]"
        >
          Random
        </Button>
        <Button
          onClick={handleReset}
          className="bg-[#C951E7] w-[140px]"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
