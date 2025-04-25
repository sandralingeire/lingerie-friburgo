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
    fotos: [`${baseUrl}calcinha 2.1.webp`, `${baseUrl}calcinha 2.2.webp`, `${baseUrl}calcinha 2.3.webp`, `${baseUrl}calcinha 2.4.webp`, `${baseUrl}calcinha 2.5.webp`, `${baseUrl}calcinha 2.6.webp`, `${baseUrl}calcinha 2.7.webp`, `${baseUrl}calcinha 2.8.webp`]
  },
  {
    nome: 'Camisola',
    preco: 25.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Romance', 'Branco com preto', 'Vermelho', 'Preto', 'Azul', 'Caramelo'],
    fotos: [`${baseUrl}camisola 1.webp`, `${baseUrl}camisola 2.webp`, `${baseUrl}camisola 3.webp`, `${baseUrl}camisola 4.webp`, `${baseUrl}camisola 5.webp`, `${baseUrl}camisola 6.webp`]
  },
  {
    nome: 'Conjunto 1',
    preco: 22.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Preto', 'Vermelho', 'Branco', 'Rosa', 'Roxo'],
    fotos: [`${baseUrl}conjunto 1.1.webp`, `${baseUrl}conjunto 1.2.webp`, `${baseUrl}conjunto 1.3.webp`, `${baseUrl}conjunto 1.4.webp`]
  },
  {
    nome: 'Conjunto 2',
    preco: 18.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Preto', 'Vermelho', 'Roxo', 'Banco', 'Azul'],
    fotos: [`${baseUrl}conjunto 2.1.webp`, `${baseUrl}conjunto 2.2.webp`, `${baseUrl}conjunto 2.3.webp`, `${baseUrl}conjunto 2.4.webp`, `${baseUrl}conjunto 2.5.webp`, `${baseUrl}conjunto 2.6.webp`, `${baseUrl}conjunto 2.7.webp`]
  },
  {
    nome: 'Conjunto 3',
    preco: 18.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Rosa', 'Verde', 'Azul', 'Vinho', 'Preto'],
    fotos: [`${baseUrl}conjunto 3.1.webp`, `${baseUrl}conjunto 3.2.webp`, `${baseUrl}conjunto 3.3.webp`, `${baseUrl}conjunto 3.3.webp`, `${baseUrl}conjunto 3.4.webp`]
  },
  {
    nome: 'Conjunto 4',
    preco: 30.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Preto', 'Vermelho', 'Branco', 'Rosa', 'Roxo'],
    fotos: [`${baseUrl}conjunto 4.1.webp`, `${baseUrl}conjunto 4.2.webp`, `${baseUrl}conjunto 4.3.webp`, `${baseUrl}conjunto 4.4.webp`]
  },
  {
    nome: 'Conjunto 5',
    preco: 20.00,
    tamanhos: ['P', 'M', 'G'],
    cores: ['Rosa', 'Preto', 'Vermelho', 'Branco', 'Roxo'],
    fotos: [`${baseUrl}conjunto 5.1.webp`, `${baseUrl}conjunto 5.2.webp`, `${baseUrl}conjunto 5.3.webp`, `${baseUrl}conjunto 5.4.webp`, `${baseUrl}conjunto 5.5.webp`]
  },
  {
    nome: 'Conjunto de 3 Peças',
    preco: 28.00,
    tamanhos: ['M', 'G', 'GG'],
    cores: ['Vermelho', 'Preto', 'Roxo', 'Azul', 'Rosa'],
    fotos: [`${baseUrl}conjunto de 3 peças 1.webp`, `${baseUrl}conjunto de 3 peças 2.webp`, `${baseUrl}conjunto de 3 peças 3.webp`, `${baseUrl}conjunto de 3 peças 4.webp`, `${baseUrl}conjunto de 3 peças 5.webp`, `${baseUrl}conjunto de 3 peças 6.webp`, `${baseUrl}conjunto de 3 peças 7.webp`]
  }
];


const carrinho = [];
let produtoAtual = null;

function renderProdutos() {
  const container = document.getElementById('produtos');
  produtos.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'produto-card shadow rounded-lg p-4';
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

  const modalContent = document.getElementById('modalContent');
modalContent.innerHTML = `
  <div class="flex flex-col gap-6 md:flex-row w-full max-w-4xl mx-auto font-sans">
    <!-- Imagem principal e miniaturas -->
    <div class="md:w-1/2 w-full">
      <img id="imagemPrincipal" src="${produtoAtual.fotos[0]}" class="w-full max-h-[300px] md:max-h-[500px] object-contain rounded border mx-auto" />
      <div id="modalMiniaturas" class="flex gap-2 flex-wrap justify-center mt-2">
        ${produtoAtual.fotos.map(f => `<img src="${f}" width="50" onclick="document.getElementById('imagemPrincipal').src='${f}'" class="rounded border cursor-pointer hover:border-pink-500" />`).join('')}
      </div>
    </div>

    <!-- Informações e ações -->
    <div class="md:w-1/2 w-full text-sm">
      <h2 id="modalNome" class="text-lg font-semibold mb-1 text-center md:text-left">${produtoAtual.nome}</h2>
      <p class="text-pink-600 font-bold text-center md:text-left mb-3 text-xl">R$ ${produtoAtual.preco.toFixed(2)}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <div>
          <label class="text-xs font-medium">Tamanho</label>
          <select id="modalTamanho" class="w-full border rounded px-2 py-1 text-sm">
            ${produtoAtual.tamanhos.map(t => `<option>${t}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="text-xs font-medium">Cor</label>
          <select id="modalCor" class="w-full border rounded px-2 py-1 text-sm">
            ${produtoAtual.cores.map(c => `<option>${c}</option>`).join('')}
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="text-xs font-medium">Quantidade</label>
          <input type="number" id="modalQtd" min="1" value="1" class="w-full border rounded px-2 py-1 text-sm" />
        </div>
      </div>

      <div class="flex justify-between gap-2">
        <button onclick="adicionarAoCarrinho()" class="bg-pink-600 text-white px-4 py-2 rounded text-sm w-1/2">Adicionar</button>
        <button onclick="fecharModal()" class="border border-gray-400 text-gray-600 px-4 py-2 rounded text-sm w-1/2">Fechar</button>
      </div>
    </div>
  </div>
`;


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

async function finalizarPedido() {
  const nome = document.getElementById('inputNome').value.trim();
  const turma = document.getElementById('inputTurma').value;
  const celular = document.getElementById('inputCelular').value.replace(/\D/g, ''); // remove tudo que não é número

  if (!nome || !celular || celular.length !== 11 || carrinho.length === 0) {
    alert('Preencha seu nome, WhatsApp corretamente e adicione pelo menos um item ao carrinho.');
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
            "Quantidade": item.quantidade,
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
  document.getElementById('inputCelular').value = '';
}
