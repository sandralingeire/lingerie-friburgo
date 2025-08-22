// ================== CONFIG ==================
const baseUrl = "imagens/";
const WEBHOOK_SHEETS = "https://script.google.com/macros/s/AKfycbzvmLpze3wsidvmWwO9bvjkKjN-jXQvyDkR64dlG-1dMbV0uNlk3jK-di4Bh5DHuyfK/exec";

// ================== DADOS ==================
const produtos = [
  {
    nome: 'Calcinha 1',
    preco: 7.00,
    fotos: [`${baseUrl}calcinha 1.1.webp`, `${baseUrl}calcinha 1.2.webp`, `${baseUrl}calcinha 1.3.webp`],
    estoque: {
      'Único': { 'Preto': true, 'Vermelho': true, 'Azul marinho': true, 'Branco': false, 'Vinho': false, 'Rosa': false }
    }
  },
  {
    nome: 'Calcinha 2',
    preco: 5.00,
    fotos: [
      `${baseUrl}calcinha 2.1.webp`, `${baseUrl}calcinha 2.2.webp`, `${baseUrl}calcinha 2.3.webp`,
      `${baseUrl}calcinha 2.4.webp`, `${baseUrl}calcinha 2.5.webp`, `${baseUrl}calcinha 2.6.webp`,
      `${baseUrl}calcinha 2.7.webp`, `${baseUrl}calcinha 2.8.webp`
    ],
    estoque: {
      'Único': { 'Rosa': false, 'Preto': false, 'Branco': false, 'Verde': false, 'Vinho': false, 'Azul': false, 'Vermelho': false }
    }
  },
  {
    nome: 'Calcinha 3',
    preco: 7.00,
    fotos: [
      `${baseUrl}Calcinha 3.1.webp`, `${baseUrl}Calcinha 3.2.webp`,
      `${baseUrl}Calcinha 3.3.webp`, `${baseUrl}Calcinha 3.4.webp`,
      `${baseUrl}Calcinha 3.5.webp`, `${baseUrl}Calcinha 3.6.webp`
    ],
     estoque: {
      'Único': { 'Vermelho': true }
    }
  },
    {
    nome: 'Calcinha 4',
    preco: 5.00,
    fotos: [
      `${baseUrl}Calcinha 4.1.webp`, `${baseUrl}Calcinha 4.2.webp`,
      `${baseUrl}Calcinha 4.3.webp`, `${baseUrl}Calcinha 4.4.webp`,
      `${baseUrl}Calcinha 4.5.webp`
    ],
    estoque: {
     'Único': { 'Vermelho': true }
    }
  },
  {
    nome: 'Camisola',
    preco: 25.00,
    fotos: [
      `${baseUrl}camisola 1.webp`, `${baseUrl}camisola 2.webp`, `${baseUrl}camisola 3.webp`,
      `${baseUrl}camisola 4.webp`, `${baseUrl}camisola 5.webp`, `${baseUrl}camisola 6.webp`
    ],
    estoque: {
      'P': { 'Romance': true, 'Branco com preto': false, 'Vermelho': false, 'Preto': false, 'Azul': true, 'Caramelo': true },
      'M': { 'Romance': true, 'Branco com preto': false, 'Vermelho': false, 'Preto': false, 'Azul': true, 'Caramelo': true },
      'G': { 'Romance': true, 'Branco com preto': false, 'Vermelho': false, 'Preto': false, 'Azul': true, 'Caramelo': true }
    }
  },
  {
    nome: 'Conjunto 1',
    preco: 22.00,
    fotos: [
      `${baseUrl}conjunto 1.1.webp`, `${baseUrl}conjunto 1.2.webp`,
      `${baseUrl}conjunto 1.3.webp`, `${baseUrl}conjunto 1.4.webp`
    ],
    estoque: {
      'P': { 'Preto': true, 'Vermelho': true, 'Branco': false, 'Rosa': false, 'Roxo': true },
      'M': { 'Preto': true, 'Vermelho': true, 'Branco': false, 'Rosa': false, 'Roxo': true },
      'G': { 'Preto': true, 'Vermelho': true, 'Branco': false, 'Rosa': false, 'Roxo': true }
    }
  },
  {
    nome: 'Conjunto 2',
    preco: 18.00,
    fotos: [
      `${baseUrl}conjunto 2.1.webp`, `${baseUrl}conjunto 2.2.webp`, `${baseUrl}conjunto 2.3.webp`,
      `${baseUrl}conjunto 2.4.webp`, `${baseUrl}conjunto 2.5.webp`, `${baseUrl}conjunto 2.6.webp`,
      `${baseUrl}conjunto 2.7.webp`
    ],
    estoque: {
      'P': { 'Preto': true, 'Vermelho': true, 'Roxo': false, 'Branco': true, 'Azul': true },
      'M': { 'Preto': true, 'Vermelho': true, 'Roxo': false, 'Branco': true, 'Azul': true },
      'G': { 'Preto': true, 'Vermelho': true, 'Roxo': true, 'Branco': true, 'Azul': true }
    }
  },
  {
    nome: 'Conjunto 3',
    preco: 18.00,
    fotos: [
      `${baseUrl}conjunto 3.1.webp`, `${baseUrl}conjunto 3.2.webp`,
      `${baseUrl}conjunto 3.3.webp`, `${baseUrl}conjunto 3.4.webp`
    ],
    estoque: {
      'P': { 'Rosa': true, 'Verde': true, 'Azul': true, 'Vinho': true, 'Preto': true },
      'M': { 'Rosa': true, 'Verde': true, 'Azul': true, 'Vinho': true, 'Preto': true },
      'G': { 'Rosa': false, 'Verde': false, 'Azul': false, 'Vinho': false, 'Preto': false }
    }
  },
  {
    nome: 'Conjunto 4',
    preco: 30.00,
    fotos: [
      `${baseUrl}conjunto 4.1.webp`, `${baseUrl}conjunto 4.2.webp`,
      `${baseUrl}conjunto 4.3.webp`, `${baseUrl}conjunto 4.4.webp`
    ],
    estoque: {
      'P': { 'Preto': true, 'Vermelho': true, 'Branco': false, 'Rosa': false, 'Roxo': true },
      'M': { 'Preto': true, 'Vermelho': true, 'Branco': false, 'Rosa': false, 'Roxo': true },
      'G': { 'Preto': true, 'Vermelho': true, 'Branco': false, 'Rosa': false, 'Roxo': true }
    }
  },
  {
    nome: 'Conjunto 5',
    preco: 30.00,
    fotos: [
      `${baseUrl}conjunto 5.1.webp`, `${baseUrl}conjunto 5.2.webp`,
      `${baseUrl}conjunto 5.3.webp`, `${baseUrl}conjunto 5.4.webp`
    ],
    estoque: {
      'P': { 'Preto': true, 'Vermelho': true },
      'M': { 'Preto': true, 'Vermelho': true },
      'G': { 'Preto': true, 'Vermelho': true }
    }
  },
  {
    nome: 'Conjunto 6',
    preco: 18.00,
    fotos: [
      `${baseUrl}Conjunto 6.1.webp`, `${baseUrl}Conjunto 6.2.webp`,
      `${baseUrl}Conjunto 6.3.webp`, `${baseUrl}Conjunto 6.4.webp`,
      `${baseUrl}Conjunto 6.5.webp`, `${baseUrl}Conjunto 6.6.webp`
    ],
    estoque: {
      'P': { 'Preto': true, 'Vermelho': true, 'Branco': true, 'Azul': true, 'Rosa': true },
      'M': { 'Preto': true, 'Vermelho': true, 'Branco': true, 'Azul': true, 'Rosa': true },
      'G': { 'Preto': true, 'Vermelho': true, 'Branco': true, 'Azul': true, 'Rosa': true }
    }
  },
  {
    nome: 'Conjunto de 3 Peças',
    preco: 28.00,
    fotos: [
      `${baseUrl}conjunto de 3 peças 1.webp`, `${baseUrl}conjunto de 3 peças 2.webp`,
      `${baseUrl}conjunto de 3 peças 3.webp`, `${baseUrl}conjunto de 3 peças 4.webp`,
      `${baseUrl}conjunto de 3 peças 5.webp`, `${baseUrl}conjunto de 3 peças 6.webp`,
      `${baseUrl}conjunto de 3 peças 7.webp`
    ],
    estoque: {
      'M': { 'Vermelho': true, 'Preto': true, 'Roxo': true, 'Azul': true, 'Rosa': true },
      'G': { 'Vermelho': true, 'Preto': true, 'Roxo': true, 'Azul': true, 'Rosa': true },
      'GG': { 'Vermelho': true, 'Preto': true, 'Roxo': true, 'Azul': true, 'Rosa': true }
    }
  },
  {
    nome: 'Pijama Canelado',
    preco: 25.00,
    fotos: [
      `${baseUrl}Pijama canelado 1.webp`, `${baseUrl}Pijama canelado 2.webp`,
      `${baseUrl}Pijama canelado 3.webp`, `${baseUrl}Pijama canelado 4.webp`, `${baseUrl}Pijama canelado 5.webp`, `${baseUrl}Pijama canelado 6.webp`
    ],
    estoque: {
      'M': { 'Lua - Elástico preto': true, 'Cacto - Elástico verde': true, 'Bala - Elástico azul': true, 'Coração - Elástico vermelho': true },
      'G': { 'Lua - Elástico preto': true, 'Cacto - Elástico verde': true, 'Bala - Elástico azul': true, 'Coração - Elástico vermelho': true },
      'GG': { 'Lua - Elástico preto': true, 'Cacto - Elástico verde': true, 'Bala - Elástico azul': true, 'Coração - Elástico vermelho': true }
    }
  }
];

// ================== ESTADO ==================
const carrinho = [];
let produtoAtual = null;

// ================== UTIL ==================
const br = (v) => Number(v).toFixed(2).replace('.', ',');

// ================== UI PRODUTOS ==================
function renderProdutos() {
  const container = document.getElementById('produtos');
  if (!container) return;
  container.innerHTML = ''; // evita duplicatas

  produtos.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'produto-card shadow rounded-lg p-4 bg-rose-200 text-center';
    div.innerHTML = `
      <img src="${p.fotos[0]}" alt="${p.nome}" width="150" class="mx-auto mb-3 rounded" />
      <h3 class="font-semibold text-base text-gray-900 mb-1">${p.nome}</h3>
      <p class="text-pink-700 font-bold mb-1">R$ ${br(p.preco)}</p>
      <button class="text-sm text-blue-600 hover:underline">Ver Detalhes</button>
    `;
    div.querySelector('button').addEventListener('click', () => abrirModal(i));
    container.appendChild(div);
  });
}

// ================== MODAL ==================
function abrirModal(index) {
  produtoAtual = produtos[index];

  const tamanhosDisponiveis = Object.keys(produtoAtual.estoque).filter(tamanho => {
    const cores = produtoAtual.estoque[tamanho];
    return Object.values(cores).some(Boolean);
  });

  const modalContent = document.getElementById('modalContent');
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="flex flex-col gap-6 md:flex-row w-full max-w-4xl mx-auto font-sans">
      <div class="md:w-1/2 w-full">
        <img id="imagemPrincipal" src="${produtoAtual.fotos[0]}" class="w-full max-h-[300px] md:max-h-[500px] object-contain rounded border mx-auto" />
        <div id="modalMiniaturas" class="flex gap-2 flex-wrap justify-center mt-2">
          ${produtoAtual.fotos.map(f => `<img src="${f}" width="50" class="rounded border cursor-pointer hover:border-pink-500" />`).join('')}
        </div>
      </div>

      <div class="md:w-1/2 w-full text-sm">
        <h2 class="text-lg font-semibold mb-1 text-center md:text-left">${produtoAtual.nome}</h2>
        <p class="text-pink-700 font-bold text-center md:text-left mb-3 text-xl">R$ ${br(produtoAtual.preco)}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          <div>
            <label class="text-xs font-medium">Tamanho</label>
            <select id="modalTamanho" class="w-full border rounded px-2 py-1 text-sm">
              ${tamanhosDisponiveis.map(t => `<option value="${t}">${t}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="text-xs font-medium">Cor</label>
            <select id="modalCor" class="w-full border rounded px-2 py-1 text-sm"></select>
          </div>
          <div class="sm:col-span-2">
            <label class="text-xs font-medium">Quantidade</label>
            <input type="number" id="modalQtd" min="1" value="1" class="w-full border rounded px-2 py-1 text-sm" />
          </div>
        </div>

        <div class="flex justify-between gap-2">
          <button id="btnAdicionar" class="bg-pink-600 text-white px-4 py-2 rounded text-sm w-1/2">Adicionar</button>
          <button id="btnFechar" class="border border-gray-400 text-gray-600 px-4 py-2 rounded text-sm w-1/2">Fechar</button>
        </div>
      </div>
    </div>
  `;

  // troca imagem principal ao clicar miniatura
  modalContent.querySelectorAll('#modalMiniaturas img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('imagemPrincipal').src = img.src;
    });
  });

  const selectTamanho = document.getElementById('modalTamanho');
  const selectCor = document.getElementById('modalCor');

  function atualizarCoresDisponiveis() {
    const tamanhoSelecionado = selectTamanho.value;
    const cores = produtoAtual.estoque[tamanhoSelecionado] || {};
    const coresAtivas = Object.keys(cores).filter(c => cores[c]);
    selectCor.innerHTML = coresAtivas.length
      ? coresAtivas.map(c => `<option value="${c}">${c}</option>`).join('')
      : `<option value="">Sem cores disponíveis</option>`;
  }

  selectTamanho.addEventListener('change', atualizarCoresDisponiveis);
  atualizarCoresDisponiveis();

  document.getElementById('btnAdicionar').addEventListener('click', adicionarAoCarrinho);
  document.getElementById('btnFechar').addEventListener('click', fecharModal);

  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'flex';
}

function fecharModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'none';
}

// ================== CARRINHO ==================
function adicionarAoCarrinho() {
  const tamanho = document.getElementById('modalTamanho').value;
  const cor = document.getElementById('modalCor').value;
  const qtd = Math.max(1, parseInt(document.getElementById('modalQtd').value, 10) || 1);

  if (!cor) {
    alert("Selecione uma cor válida.");
    return;
  }

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
  if (!ul || !totalSpan) return;

  ul.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    li.className = 'flex justify-between items-center bg-white rounded px-3 py-2 shadow';
    li.innerHTML = `
      <span>${item.nome} - Tam: ${item.tamanho} - Cor: ${item.cor} - Qtd: ${item.quantidade} - R$ ${br(subtotal)}</span>
      <button class="text-red-600 hover:underline ml-4">Remover</button>
    `;
    li.querySelector('button').addEventListener('click', () => removerItemCarrinho(index));
    ul.appendChild(li);
  });

  totalSpan.innerText = `Total: R$ ${br(total)}`;
}

function removerItemCarrinho(index) {
  carrinho.splice(index, 1);
  renderCarrinho();
}

// ================== CHECKOUT (Opção 1: no-cors) ==================
async function finalizarPedido() {
  const btn = document.getElementById('btnFinalizar');
  const nome  = (document.getElementById('inputNome')?.value || '').trim();
  const turma = document.getElementById('inputTurma')?.value || '';

  if (!nome || carrinho.length === 0) {
    alert('Preencha seu nome e adicione pelo menos um item ao carrinho.');
    return;
  }

  const payload = {
    records: carrinho.map(item => ({
      fields: {
        "Nome": nome,
        "Turma": turma,
        "Produto": item.nome,
        "Tamanho": item.tamanho,
        "Cor": item.cor,
        "Preço": Number(item.preco),
        "Quantidade": Number(item.quantidade)
      }
    }))
  };

  if (btn) btn.disabled = true;

  try {
    // Sem preflight e sem leitura de resposta (confirmação otimista)
    await fetch(WEBHOOK_SHEETS, {
      method: 'POST',
      mode: 'no-cors',                   // evita CORS/preflight
      headers: { 'Content-Type': 'text/plain' }, // evitar 'application/json'
      body: JSON.stringify(payload)
    });

    alert('Pedido enviado!');

    // limpar estado/UI
    carrinho.length = 0;
    renderCarrinho();
    const nomeEl = document.getElementById('inputNome');
    const turmaEl = document.getElementById('inputTurma');
    if (nomeEl) nomeEl.value = '';
    if (turmaEl && 'selectedIndex' in turmaEl) turmaEl.selectedIndex = 0;

  } catch (e) {
    console.error('Erro de rede:', e);
    alert('Não foi possível enviar o pedido (rede). Tente novamente.');
  } finally {
    if (btn) btn.disabled = false;
  }
}

// ================== INIT ==================
renderProdutos();
