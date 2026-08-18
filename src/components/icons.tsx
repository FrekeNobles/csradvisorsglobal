import {
  BadgeCheck,
  BarChart3,
  Building2,
  Calculator,
  ClipboardCheck,
  FileText,
  HandCoins,
  HeartHandshake,
  Landmark,
  LineChart,
  Network,
  ReceiptText,
  Search,
  UsersRound,
} from "lucide-react";

export const iconMap = {
  strategy: LineChart,
  community: UsersRound,
  rap: ClipboardCheck,
  research: Search,
  impact: BarChart3,
  tax: Calculator,
  business: Building2,
  funding: HandCoins,
  nonprofit: HeartHandshake,
  finance: Landmark,
} as const;

export function ServiceIcon({ name }: { name: keyof typeof iconMap }) {
  const Icon = iconMap[name];
  return <Icon size={21} strokeWidth={1.8} />;
}

export const TrustIcon = BadgeCheck;
export const DocumentIcon = FileText;
export const ReceiptIcon = ReceiptText;
export const NetworkIcon = Network;
