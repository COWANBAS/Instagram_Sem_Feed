# BLOQUEADOR DE FEED

Este script é um script de usuário (UserScript) que bloqueia o feed do Instagram, permitindo que você se concentre apenas em você.

*Define a função removeHomeFeed, que será responsável por remover o feed da página inicial do Instagram*

![image](https://github.com/user-attachments/assets/babf449b-7c16-45c7-8d94-070976db8681)

• Const homeFeedSelector = 'section > main > div > div > div';: Define um seletor CSS para localizar o feed na página.

• Const homeFeed = document.querySelector(homeFeedSelector);: Usa document.querySelector para selecionar o elemento do feed com base no seletor definido.

• If (homeFeed && window.location.pathname === '/'): Verifica se o elemento do feed foi encontrado e se o usuário está na página inicial verificando o caminho da URL.

• HomeFeed.remove();: Remove o elemento do feed da página

![image](https://github.com/user-attachments/assets/a5a0bbb1-36b8-4c3e-9492-5b95b5dff137)

• Const observer = new MutationObserver(removeHomeFeed);: Cria um novo observador de mutação que executa a função removeHomeFeed sempre que uma mutação no DOM é detectada.
• Observer.observe(document, { childList: true, subtree: true });: Configura o observador de mutação para monitorar todo o documento (document) e observar mudanças na lista de filhos e na subárvore inteira.

![image](https://github.com/user-attachments/assets/db2f1abf-9f59-4adf-a26a-37c1972608f6)

• Window.addEventListener('load', removeHomeFeed);: Adiciona um ouvinte de evento para o evento load da janela, garantindo que a função removeHomeFeed seja chamada quando a página for completamente carregada.

# COMPATIVEL COM DESKTOPS E CELULARES

![image](https://github.com/user-attachments/assets/7e4bcc9f-3767-4293-937b-8f8e5d49e690)


![image](https://github.com/user-attachments/assets/b7a7bed0-197d-414d-8376-24d3ea4a0263)

Caso seu navegador android tenha compatibilidade a UserScripts o script funcionara.

*Navegador testado e compativel*

• Cromite: https://github.com/uazo/cromite

• Min Browser: https://github.com/minbrowser/min

# BENEFICIOS

*O Bloqueador de Feed é um UserScript projetado para melhorar sua experiência de uso do Instagram, trazendo diversos benefícios para sua produtividade e bem-estar. Aqui estão alguns dos principais benefícios deste script*

*Aumento da Produtividade*

O feed do Instagram pode ser uma grande distração, consumindo tempo precioso que poderia ser utilizado de maneira mais produtiva. Ao bloquear o feed, você elimina essa distração, permitindo que você se concentre em tarefas mais importantes e aumente sua produtividade.
 
*Foco no Conteúdo Pessoal*

Sem a presença do feed, você pode se concentrar mais nas suas próprias postagens e interações. Isso ajuda a manter o foco no conteúdo que você cria e nas conexões que realmente importam para você, em vez de se perder no conteúdo gerado por outras pessoas.

*Redução do Estresse*

O feed do Instagram pode muitas vezes ser uma fonte de estresse e ansiedade, devido à comparação social e à exposição a conteúdos negativos. Bloquear o feed pode ajudar a reduzir esses sentimentos, promovendo uma experiência mais positiva e saudável na plataforma.

*Controle do Tempo de Tela*

Com menos distrações visuais e menos conteúdo para rolar, você pode passar menos tempo no Instagram. Isso pode ajudar a controlar o tempo de tela e promover um uso mais consciente e equilibrado das redes sociais.

*Simplicidade e Facilidade de Uso*

O script é fácil de instalar e usar, funcionando automaticamente assim que você abre o Instagram. Não há necessidade de configurações complicadas ou ajustes constantes – ele simplesmente faz o trabalho de bloquear o feed de maneira eficiente.

*Personalização*

Embora o script seja projetado para o Instagram, ele pode ser adaptado para bloquear feeds de outras plataformas, proporcionando uma solução personalizada para suas necessidades específicas de redução de distrações.

# CONCLUSÃO

O Bloqueador de Feed é uma ferramenta simples, mas poderosa, que pode fazer uma grande diferença na maneira como você usa o Instagram. Ao eliminar distrações, reduzir o estresse e promover um uso mais consciente da rede social, este script ajuda a melhorar sua produtividade e bem-estar geral.
