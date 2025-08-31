import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./components/ui/input-otp";

type WordInputProps = {
  length: number;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleComplete: (val: string) => void;
};

export default function WordInput({
  length,
  value,
  setValue,
  handleComplete,
}: WordInputProps) {
  return (
    <div className="w-full flex justify-center mt-4">
      <InputOTP
        maxLength={length}
        value={value}
        onChange={setValue}
        onComplete={handleComplete}
        className="block w-[320px] mx-auto"
      >
        {new Array(length).fill(0).map((_, i) => (
          <InputOTPGroup key={i}>
            <InputOTPSlot index={i} className="w-10 h-10 border border-[#97A3B6] my-10" />
          </InputOTPGroup>
        ))}
      </InputOTP>
    </div>
  );
}
