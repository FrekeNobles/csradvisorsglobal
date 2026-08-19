import { PracticePage } from "@/components/practice-page";
import { practices } from "@/data/site";

export default function USAPractice() {
  return <PracticePage practice={practices[1]} />;
}
