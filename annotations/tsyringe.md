# TSyringe

- **@injectable()**

  - permite que essa classe seja gerenciada pelo TSyringe.

- **@inject("IUserRepository")**

  - permite injetar o repositório sem instanciar manualmente.
  - avisa ao TSyringe que essa dependência deve vir do container.
  - O container automaticamente injeta UserRepository dentro do UserService sem que precisemos instanciá-lo manualmente.

**container:**

- **O que é container:**

  - O container é um gerenciador de dependências da biblioteca TSyringe.
  - Ele funciona como uma caixa mágica onde registramos e recuperamos instâncias de classes automaticamente.
  - Em vez de criarmos os objetos manualmente, pedimos ao container para nos fornecer a instância correta.

- **O que o container faz?**

  - Guarda as classes registradas (como UserRepository).
  - Entrega a classe correta sempre que precisar.
  - Faz a injeção automática nas classes que precisam da dependência.

```ts
container.register<IUserRepository>("IUserRepository", {
  useClass: UserRepository,
});
```

📌 O que significa isso?

1. container.register<IUserRepository>(...) → Estamos registrando um serviço dentro do container.
2. <IUserRepository> → Indicamos que queremos registrar um serviço que segue o contrato da interface IUserRepository.
3. "IUserRepository" → Esse é um identificador único. Sempre que precisarmos de IUserRepository, o container saberá qual classe fornecer.

🔹 **Por que "IUserRepository" é passado como string?**

- Porque, internamente, o container precisa de um identificador para encontrar e entregar a dependência correta.
- Isso permite que possamos mudar a implementação sem quebrar o código.

🔹 **useClass: UserRepository**

📌 **O que significa isso?**

- **Estamos dizendo para o container:**
  - "Sempre que alguém pedir por "IUserRepository", entregue uma instância da classe UserRepository."

🔹 Ou seja:

- Quando alguém precisar de um IUserRepository (por exemplo, no UserService):
- O container entregará automaticamente uma instância de UserRepository.
