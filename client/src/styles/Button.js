import styled from "styled-components";

// const COLORS = {
//   primary: {
//     "--main": "indigo",
//     "--accent": "white",
//   },
//   secondary: {
//     "--main": "lavenderblush",
//     "--accent": "indigo",
//   },
// };

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: #49beb7;
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: #f67280;
  border: 2px solid #f67280;

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
