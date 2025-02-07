Quando usamos uma arrow function, ela não redefine o this, mas sim herda o this do escopo onde foi definida
Como createUser é uma arrow function, ela herda o this do escopo da classe.

```ts
@injectable()
export class CreateUserController {
  constructor(
    @inject("ICreateUserService")
    private readonly createUserService: ICreateUserService
  ) {}

  createUser = async (request: Request, response: Response) => {
    try {
      const { name, email, password } = request.body;
      const result = await this.createUserService.createUser({
        name,
        email,
        password,
      });
      response.status(201).json(result);
    } catch (error: any) {
      console.log("🚀 ~ CreateUserController ~ createUser ~ error:", error);
      response.status(error.code).json(error.message);
    }
  };
}
```

com exemplo acima pode usar a rota no formato abaixo:

```ts
const router = Router();

const createUserController = container.resolve(CreateUserController);

router.post("/", createUserController.createUser);
```

## Diferença entre Arrow Function e Função Tradicional

| Tipo de Função              | `this` é dinâmico? | Herdado do escopo da classe? |
| --------------------------- | ------------------ | ---------------------------- |
| `function()`                | ✅ Sim             | ❌ Não                       |
| `() => {}` (Arrow Function) | ❌ Não             | ✅ Sim                       |

### 📌 Conclusão

Arrow functions são úteis para garantir que o `this` sempre aponte para a instância correta, especialmente em callbacks e eventos.
