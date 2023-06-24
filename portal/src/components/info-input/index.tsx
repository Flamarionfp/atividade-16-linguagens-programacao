import { InfoInputProps } from "./info-input.types";

export default function InfoInput({ label, value }: InfoInputProps) {
  return (
    <div>
      <label className="font-bold">{label}</label>
      <input
        value={value}
        readOnly
        type="text"
        className="input w-full bg-gray-200"
      />
    </div>
  );
}
