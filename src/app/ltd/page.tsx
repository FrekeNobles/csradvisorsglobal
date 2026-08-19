import { PracticePage } from "@/components/practice-page";
import { practices } from "@/data/site";

export default function AfricaPractice() {
  return <PracticePage practice={practices[0]} />;
}
