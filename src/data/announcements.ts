export interface Announcement {
  /** The announcement content (can be text or JSX) */
  message: React.ReactNode;
  /** Tailwind background color class (e.g. "bg-green-500") */
  backgroundColor?: string;
  /** Tailwind text color class (e.g. "text-white") */
  textColor?: string;
}

export const announcements: Announcement[] = [
  {
    message:
      'Use coupon code <strong><i>EARLYBIRD30</i></strong> to get <strong><i>30%</i></strong> discount on all competitions.',
  },
];
