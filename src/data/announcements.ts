export interface Announcement {
  /** The announcement content (can be text or JSX) */
  message: React.ReactNode;
  /** Tailwind background color class (e.g. "bg-green-500") */
  backgroundColor?: string;
  /** Tailwind text color class (e.g. "text-white") */
  textColor?: string;
}

export const announcements: Announcement[] = [
  // {
  //   message:
  //     'The dates have been changed to <strong><i>May 31st - June 1st, 2025.</strong></i>',
  // },
  // {
  //   message:
  //     'The timings for the <i><strong>Web-e-Thon, App Development,</strong></i> <strong><i>and Machine Learning competitions</strong></i> have been updated. Each competition will now last <i><strong>10 hours.</strong></i>',
  // },
];
