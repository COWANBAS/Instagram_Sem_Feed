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
