'use client';

import css from "./style.module.scss";

import * as HoverCard from '@radix-ui/react-hover-card';
import * as Label from '@radix-ui/react-label';

import { HelpCircle } from "lucide-react";

interface Props {
  name?: string;
  label?: string;
  help?: string;
  required?: boolean;
  children?: React.ReactNode;
  visible?: boolean
}

const _Label = (props: Props) => {
  return (
    <span className={css["label"]} data-visible={props.visible}>
      <Label.Root htmlFor={props.name}>
        { props.children || props.label }
        { props.required && <span className={css["required"]}>*</span> }
      </Label.Root>

      {props.help && (
        <HoverCard.Root>
          <HoverCard.Trigger>
            <span className={css["help"]}>
              <HelpCircle className="w-md h-md" />
            </span>
          </HoverCard.Trigger>
          <HoverCard.Content side="right" sideOffset={5}>
            <p className={css["help-text"]}>{props.help}</p>
          </HoverCard.Content>
        </HoverCard.Root>
      )}
    </span>
  );
}

export default _Label;