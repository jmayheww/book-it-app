import Button from "./Button";
import Divider from "./Divider";
import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";
import Error from "./Error";
import ButtonContainer from "./ButtonContainer";

export const PrimaryColor = "#f67280";
export const SecondaryColor = "#333333";

export const MaxWidth = "1200px";

export const ButtonStyles = `
  background-color: ${PrimaryColor};
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #df5e6a;
  }

  &:focus {
    outline: none;
  }
`;
export { Button, ButtonContainer, Error, FormField, Input, Label, Divider };
