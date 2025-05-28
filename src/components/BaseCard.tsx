type cardProps = {
  children?: React.ReactNode;
  minHeight?: string;
  style?: React.CSSProperties;
};

export const BaseCard = ({ children, minHeight, style }: cardProps) => (
  <div className="card" style={{ minHeight: minHeight ?? "10rem", ...style }}>
    <div className="card-body d-flex flex-column">{children}</div>
  </div>
);
