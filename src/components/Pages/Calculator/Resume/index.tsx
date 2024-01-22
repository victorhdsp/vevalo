'use client';

import css from "./style.module.scss";

import { Save, Globe } from "lucide-react";

import Card from "@/components/Card";
import Button from "@/components/Button/Default";

const Resume = () => {

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Resumo do projeto</h2>

      <div className={css["resume"]}>

      </div>

      <div className={css["footer"]}>
        {/* <Button icon={Globe}>
          Proposta comercial
        </Button> */}

        {/* <Button icon={Save} variant="outline">
          Salvar
        </Button> */}
      </div>
    </Card>
  );
}

export default Resume;