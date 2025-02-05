"use client";

export interface ButtonProps extends Omit<any, "others"> {
  readonly children?: React.ReactNode;
  readonly className?: string;
}
export default function Button(props: ButtonProps) {
  const { children, className, ...others } = props;
  return (
    <button
      className={`h-[48px] bg-bg-secondary rounded-lg text-textColor-secondary lg:w-full transition-transform duration-200 active:scale-95 active:bg-bg-secondary-dark ${className}`}
      {...others}
    >
      {children}
    </button>
  );
}
