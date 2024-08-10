import { Button } from "@/components/button";
import { Input } from "@/components/input";

const LoginForm = () => {
  return (
    <form noValidate className="flex flex-col gap-2">
      <fieldset>
        <Input placeholder="Correo electrónico" />
      </fieldset>
      <fieldset>
        <Input placeholder="*******" />
      </fieldset>

      <Button>Ingresar</Button>
    </form>
  );
};

export default LoginForm;
