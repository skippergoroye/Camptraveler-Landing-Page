type Props = {
  title: string;
  children: React.ReactNode;
};

export default function FooterColumn({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
}
