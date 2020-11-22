import styled from "styled-components";
import { Button as MButton, ButtonProps } from "@material-ui/core";
import clsx from "clsx";

const Button = styled(MButton).attrs<ButtonProps>({
  className: "outline-none",
})``;

export type RadioButtonProps = ButtonProps & { isSelected: boolean };

const RadioButton = styled(Button).attrs<RadioButtonProps>((props) => ({
  className: clsx({ "bg-blue-200": props.isSelected }),
}))<RadioButtonProps>``;

export { Button, RadioButton };
