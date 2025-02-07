# reflect-metadata

- reflect-metadata é uma biblioteca que adiciona metadados ao TypeScript.
- O TypeScript não tem suporte nativo a metadados de classes e decoradores. Esse biblioteca ajuda a armazenar informações sobre as classes, interfaces e métodos.
- O TSyringe (biblioteca de injenção de dependência) depende dessa biblioteca (reflect-metadata) para funcionar corretamente.

**Exemplo do que reflect-metadata faz:**

Se você marcar uma classe com @injectable(), o reflect-metadata permite que o TypeScript lembre dessa informação em tempo de execução.

Por isso, essa importação precisa estar sempre presente antes de usarmos TSyringe!

### O que são metadados?

- **Metadados** são dados que **descrevem outros dados**. Em um contexto de programação, metadados são informações adicionais associdadas a um código ou estrutura de dados, que podem ser usadas para fornecer contexto, detalhes ou outras informações sobre a estrutura real.

**Em termos simples:**

- Metadados são dados sobre dados.
- No caso de TypeScript e de outras linguagens, eles descrevem como o código deve ser tratado, configurado ou executado.

**Exemplo de Metadados no Contexto de reflect-metadata:**
Quando você usa a biblioteca reflect-metadata, ela permite que você adicione informações extras às classes, métodos, propriedades, etc., para que outras partes do seu código possam acessar essas informações durante a execução, sem alterar o código original.

**Exemplo Prático de Metadados com Decorators:**
Se você usou decoradores (como @injectable() ou @inject() do tsyringe), esses decoradores podem adicionar metadados a uma classe ou propriedade, que pode ser lido em tempo de execução.

**Resumo:**

- Metadados são informações extras associadas a classes, métodos ou propriedades.
- O reflect-metadata permite que o TypeScript armazene essas informações em tempo de execução, o que pode ser lido posteriormente por outras partes do código (como bibliotecas de injeção de dependência).
- Exemplo prático: @injectable(), @inject() e outras bibliotecas dependem de metadados para funcionar corretamente.
- Esses metadados tornam possível a injeção de dependências, validação automática, entre outras funcionalidades, sem que o programador precise explicitamente configurar tudo no código.
