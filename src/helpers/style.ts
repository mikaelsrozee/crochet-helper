export const cn = (...classNames: string[]) =>
  classNames.filter(Boolean).join(' ');
