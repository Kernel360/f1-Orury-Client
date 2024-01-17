interface HeaderProps {
  title: string;
  isBack?: boolean;
  isExit?: boolean;
  isEllipsis?: boolean;
  okHandler?: () => void;
  exitHandler?: () => void;
  editHandler?: () => void;
}

export default HeaderProps;
