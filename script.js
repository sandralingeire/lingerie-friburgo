const baseUrl = "imagens/";

const produtos = [
  {
    nome: 'Calcinha 1',
    preco: 7.00,
    tamanhos: ['Único'],
    cores: ['Preto', 'Vermelho', 'Banco', 'Vinho', 'Rosa'],
    fotos: [`${baseUrl}calcinha 1.1.webp`, `${baseUrl}calcinha 1.2.webp`, `${baseUrl}calcinha 1.3.webp`]
  },
  {
    nome: 'Calcinha 2',
    preco: 5.00,
    tamanhos: ['Único'],
    cores: ['Rosa', 'Preto', 'Branco', 'Verde', 'Vinho', 'Azul', 'Vermelho'],
    fotos: [`${baseUrl}calcinha 2.1.webp`, `${baseUrl}calcinha 2.2.webp`, `${baseUrl}calcinha 2.3.webp`]
  },
  {
    nome: 'Camisola',
    preco: 25.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Romance', 'Branco com preto', 'Vermelho', 'Preto', 'Azul', 'Caramelo'],
    fotos: [`${baseUrl}camisola 1.webp`, `${baseUrl}camisola 2.webp`, `${baseUrl}camisola 3.webp`]
  },
  {
    nome: 'Conjunto 1',
    preco: 22.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Preto', 'Vermelho', 'Branco', 'Rosa', 'Roxo'],
    fotos: [`${baseUrl}conjunto 1.1.webp`, `${baseUrl}conjunto 1.2.webp`, `${baseUrl}conjunto 1.3.webp`]
  },
  {
    nome: 'Conjunto 2',
    preco: 18.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Preto', 'Vermelho', 'Roxo', 'Banco', 'Azul'],
    fotos: [`${baseUrl}conjunto 2.1.webp`, `${baseUrl}conjunto 2.2.webp`, `${baseUrl}conjunto 2.3.webp`]
  },
  {
    nome: 'Conjunto 3',
    preco: 18.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Rosa', 'Verde', 'Azul', 'Vinho', 'Preto'],
    fotos: [`${baseUrl}conjunto 3.1.webp`, `${baseUrl}conjunto 3.2.webp`, `${baseUrl}conjunto 3.3.webp`]
  },
  {
    nome: 'Conjunto 4',
    preco: 30.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Preto', 'Vermelho', 'Branco', 'Rosa', 'Roxo'],
    fotos: [`${baseUrl}conjunto 4.1.webp`, `${baseUrl}conjunto 4.2.webp`, `${baseUrl}conjunto 4.3.webp`]
  },
  {
    nome: 'Conjunto 5',
    preco: 20.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Rosa', 'Preto', 'Vermelho', 'Branco', 'Roxo'],
    fotos: [`${baseUrl}conjunto 5.1.webp`, `${baseUrl}conjunto 5.2.webp`, `${baseUrl}conjunto 5.3.webp`]
  },
  {
    nome: 'Conjunto de 3 Peças',
    preco: 28.00,
    tamanhos: ['M', 'G', 'GG'],
    cores: ['Vermelho', 'Preto', 'Roxo', 'Azul', 'Rosa'],
    fotos: [`${baseUrl}conjunto de 3 peças 1.webp`, `${baseUrl}conjunto de 3 peças 2.webp`, `${baseUrl}conjunto de 3 peças 3.webp`]
  }
];


const carrinho = [];
let produtoAtual = null;

function renderProdutos() {
  const container = document.getElementById('produtos');
  produtos.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'produto-card';
    div.innerHTML = `
      <img src="${p.fotos[0]}" alt="${p.nome}" width="150"/><br/>
      <strong>${p.nome}</strong><br/>
      R$ ${p.preco.toFixed(2)}<br/>
      <button onclick="abrirModal(${i})">Ver Detalhes</button>
    `;
    container.appendChild(div);
  });
}

function abrirModal(index) {
  produtoAtual = produtos[index];
  document.getElementById('modalNome').innerText = produtoAtual.nome;
  const fotos = produtoAtual.fotos.map(f => `<img src="${f}" width="100"/>`).join('');
  document.getElementById('modalFotos').innerHTML = fotos;

  const tamanhoSel = document.getElementById('modalTamanho');
  tamanhoSel.innerHTML = produtoAtual.tamanhos.map(t => `<option>${t}</option>`).join('');

  const corSel = document.getElementById('modalCor');
  corSel.innerHTML = produtoAtual.cores.map(c => `<option>${c}</option>`).join('');

  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

function adicionarAoCarrinho() {
  const tamanho = document.getElementById('modalTamanho').value;
  const cor = document.getElementById('modalCor').value;
  const qtd = parseInt(document.getElementById('modalQtd').value);

  carrinho.push({
    nome: produtoAtual.nome,
    preco: produtoAtual.preco,
    tamanho,
    cor,
    quantidade: qtd
  });

  renderCarrinho();
  fecharModal();
}

function renderCarrinho() {
  const ul = document.getElementById('listaCarrinho');
  const totalSpan = document.getElementById('totalCarrinho');
  ul.innerHTML = '';

  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    li.className = 'flex justify-between items-center bg-white rounded px-3 py-2 shadow';
    li.innerHTML = `
      <span>${item.nome} - Tam: ${item.tamanho} - Cor: ${item.cor} - Qtd: ${item.quantidade} - R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
      <button onclick="removerItemCarrinho(${index})" class="text-red-600 hover:underline ml-4">Remover</button>
    `;
    ul.appendChild(li);
  });

  totalSpan.innerText = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}



renderProdutos();

function finalizarPedido() {
  const nome = document.getElementById('inputNome').value.trim();
  const turma = document.getElementById('inputTurma').value;

  if (!nome || carrinho.length === 0) {
    alert('Preencha seu nome e adicione pelo menos um item ao carrinho.');
    return;
  }

  // Aqui será feita a integração com Airtable
  console.log('Enviando para banco de dados:');
  carrinho.forEach(item => {
    console.log({
      nome,
      turma,
      produto: item.nome,
      tamanho: item.tamanho,
      cor: item.cor,
      preco: item.preco,
      quantidade: item.quantidade
    });
  });

  alert('Pedido finalizado! (simulação)');
}
async function finalizarPedido() {
  const nome = document.getElementById('inputNome').value.trim();
  const turma = document.getElementById('inputTurma').value;

  if (!nome || carrinho.length === 0) {
    alert('Preencha seu nome e adicione pelo menos um item ao carrinho.');
    return;
  }

  const token = 'patGh0r600dk7q9Mj.a0fc7ae0aa1c9cfa092266678c4b786b8dbda02b88167ac75b859802dea40bae';
  const baseId = 'appEdx3GRuIx1V5YD';
  const tabela = 'Pedidos';

  for (const item of carrinho) {
    const data = {
      records: [
        {
          fields: {
            "Nome": nome,
            "Turma": turma,
            "Produto": item.nome,
            "Tamanho": item.tamanho,
            "Cor": item.cor,
            "Preço": item.preco,
            "Quantidade": item.quantidade
          }
        }
      ]
    };

    await fetch(`https://api.airtable.com/v0/${baseId}/${tabela}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  alert('Pedido enviado com sucesso!');
  carrinho.length = 0;
  renderCarrinho();
  document.getElementById('inputNome').value = '';
  document.getElementById('inputTurma').selectedIndex = 0;
}

function removerItemCarrinho(index) {
  carrinho.splice(index, 1);
  renderCarrinho();
}
