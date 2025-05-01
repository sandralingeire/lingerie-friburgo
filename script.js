const baseUrl = "imagens/";

const produtos = [
  {
    nome: 'Calcinha 1',
    preco: 7.00,
    fotos: [`${baseUrl}calcinha 1.1.webp`, `${baseUrl}calcinha 1.2.webp`, `${baseUrl}calcinha 1.3.webp`],
    estoque: {
      'Único': {
        'Preto': true,
        'Vermelho': true,
        'Banco': false,
        'Vinho': false,
        'Rosa': false
      }
    }
  },
  {
    nome: 'Calcinha 2',
    preco: 5.00,
    fotos: [`${baseUrl}calcinha 2.1.webp`, `${baseUrl}calcinha 2.2.webp`, `${baseUrl}calcinha 2.3.webp`, `${baseUrl}calcinha 2.4.webp`, `${baseUrl}calcinha 2.5.webp`, `${baseUrl}calcinha 2.6.webp`, `${baseUrl}calcinha 2.7.webp`, `${baseUrl}calcinha 2.8.webp`],
    estoque: {
      'Único': {
        'Rosa': false,
        'Preto': false,
        'Branco': false,
        'Verde': true,
        'Vinho': false,
        'Azul': true,
        'Vermelho': false
      }
    }
  },
  {
    nome: 'Calcinha 3',
    preco: 7.00,
    fotos: [`${baseUrl}Calcinha 3.1.webp`, `${baseUrl}Calcinha 3.2.webp`, `${baseUrl}Calcinha 3.3.webp`, `${baseUrl}Calcinha 3.4.webp`, `${baseUrl}Calcinha 3.5.webp`, `${baseUrl}Calcinha 3.6.webp`],
    estoque: {
      'P': {
        'Roxo': true,
        'Preto': true,
        'Verde': true,
        'Vermelho': true,
        'Rosa': true
      },
      'M': {
        'Roxo': true,
        'Preto': true,
        'Verde': true,
        'Vermelho': true,
        'Rosa': false
      },
      'G': {
        'Roxo': true,
        'Preto': true,
        'Verde': true,
        'Vermelho': true,
        'Rosa': false
      }
    }
  },
  {
    nome: 'Camisola',
    preco: 25.00,
    fotos: [`${baseUrl}camisola 1.webp`, `${baseUrl}camisola 2.webp`, `${baseUrl}camisola 3.webp`, `${baseUrl}camisola 4.webp`, `${baseUrl}camisola 5.webp`, `${baseUrl}camisola 6.webp`],
    estoque: {
      'P': {
        'Romance': true,
        'Branco com preto': false,
        'Vermelho': false,
        'Preto': false,
        'Azul': true,
        'Caramelo': true
      },
      'M': {
        'Romance': true,
        'Branco com preto': false,
        'Vermelho': false,
        'Preto': false,
        'Azul': true,
        'Caramelo': true
      },
      'G': {
        'Romance': true,
        'Branco com preto': false,
        'Vermelho': false,
        'Preto': false,
        'Azul': true,
        'Caramelo': true
      }
    }
  },
  {
    nome: 'Conjunto 1',
    preco: 22.00,
    fotos: [`${baseUrl}conjunto 1.1.webp`, `${baseUrl}conjunto 1.2.webp`, `${baseUrl}conjunto 1.3.webp`, `${baseUrl}conjunto 1.4.webp`],
    estoque: {
      'P': {
        'Preto': true,
        'Vermelho': true,
        'Branco': false,
        'Rosa': false,
        'Roxo': true
      },
      'M': {
        'Preto': true,
        'Vermelho': true,
        'Branco': false,
        'Rosa': false,
        'Roxo': false
      },
      'G': {
        'Preto': true,
        'Vermelho': true,
        'Branco': false,
        'Rosa': false,
        'Roxo': true
      }
    }
  },
  {
    nome: 'Conjunto 2',
    preco: 18.00,
    fotos: [`${baseUrl}conjunto 2.1.webp`, `${baseUrl}conjunto 2.2.webp`, `${baseUrl}conjunto 2.3.webp`, `${baseUrl}conjunto 2.4.webp`, `${baseUrl}conjunto 2.5.webp`, `${baseUrl}conjunto 2.6.webp`, `${baseUrl}conjunto 2.7.webp`],
    estoque: {
      'P': {
        'Preto': true,
        'Vermelho': true,
        'Roxo': false,
        'Banco': true,
        'Azul': true
      },
      'M': {
        'Preto': true,
        'Vermelho': true,
        'Roxo': false,
        'Banco': true,
        'Azul': true
      },
      'G': {
        'Preto': true,
        'Vermelho': true,
        'Roxo': true,
        'Banco': true,
        'Azul': true
      }
    }
  },
  {
    nome: 'Conjunto 3',
    preco: 18.00,
    fotos: [`${baseUrl}conjunto 3.1.webp`, `${baseUrl}conjunto 3.2.webp`, `${baseUrl}conjunto 3.3.webp`, `${baseUrl}conjunto 3.4.webp`],
    estoque: {
      'P': {
        'Rosa': true,
        'Verde': true,
        'Azul': true,
        'Vinho': true,
        'Preto': true
      },
      'M': {
        'Rosa': true,
        'Verde': true,
        'Azul': true,
        'Vinho': true,
        'Preto': true
      },
      'G': {
        'Rosa': false,
        'Verde': false,
        'Azul': false,
        'Vinho': false,
        'Preto': false
      }
    }
  },
  {
    nome: 'Conjunto 4',
    preco: 30.00,
    fotos: [`${baseUrl}conjunto 4.1.webp`, `${baseUrl}conjunto 4.2.webp`, `${baseUrl}conjunto 4.3.webp`, `${baseUrl}conjunto 4.4.webp`],
    estoque: {
      'P': {
        'Preto': true,
        'Vermelho': true,
        'Branco': false,
        'Rosa': false,
        'Roxo': true
      },
      'M': {
        'Preto': true,
        'Vermelho': true,
        'Branco': false,
        'Rosa': false,
        'Roxo': false
      },
      'G': {
        'Preto': true,
        'Vermelho': true,
        'Branco': false,
        'Rosa': false,
        'Roxo': true
      }
    }
  },
  {
    nome: 'Conjunto 5',
    preco: 20.00,
    fotos: [`${baseUrl}conjunto 5.1.webp`, `${baseUrl}conjunto 5.2.webp`, `${baseUrl}conjunto 5.3.webp`, `${baseUrl}conjunto 5.4.webp`, `${baseUrl}conjunto 5.5.webp`],
    estoque: {
      'P': {
        'Rosa': true,
        'Preto': true,
        'Vermelho': true,
        'Branco': true,
        'Roxo': true
      },
      'M': {
        'Rosa': true,
        'Preto': true,
        'Vermelho': true,
        'Branco': true,
        'Roxo': true
      },
      'G': {
        'Rosa': true,
        'Preto': true,
        'Vermelho': true,
        'Branco': true,
        'Roxo': true
      }
    }
  },
  {
    nome: 'Conjunto de 3 Peças',
    preco: 28.00,
    fotos: [`${baseUrl}conjunto de 3 peças 1.webp`, `${baseUrl}conjunto de 3 peças 2.webp`, `${baseUrl}conjunto de 3 peças 3.webp`, `${baseUrl}conjunto de 3 peças 4.webp`, `${baseUrl}conjunto de 3 peças 5.webp`, `${baseUrl}conjunto de 3 peças 6.webp`, `${baseUrl}conjunto de 3 peças 7.webp`],
    estoque: {
      'M': {
        'Vermelho': true,
        'Preto': true,
        'Roxo': true,
        'Azul': true,
        'Rosa': true
      },
      'G': {
        'Vermelho': true,
        'Preto': true,
        'Roxo': true,
        'Azul': true,
        'Rosa': true
      },
      'GG': {
        'Vermelho': true,
        'Preto': true,
        'Roxo': true,
        'Azul': true,
        'Rosa': true
      }
    }
  },{
    nome: 'Pijama Canelado',
    preco: 25.00,
    fotos: [`${baseUrl}Pijama canelado 1.jpg`, `${baseUrl}Pijama canelado 2.jpg`, `${baseUrl}Pijama canelado 3.jpg`, `${baseUrl}Pijama canelado 4.jpg`],
    estoque: {
      'M': {
        'Lua - Eástico preto': true,
        'Cacto - Elástico verde': true,
        'Bala - Elástico azul': true,
        'Coração - Elástico vermelho': true
      },
      'G': {
        'Lua - Eástico preto': true,
        'Cacto - Elástico verde': true,
        'Bala - Elástico azul': true,
        'Coração - Elástico vermelho': true
      },
      'GG': {
        'Lua - Eástico preto': true,
        'Cacto - Elástico verde': true,
        'Bala - Elástico azul': true,
        'Coração - Elástico vermelho': true
      }
    }
  }
];


const carrinho = [];
let produtoAtual = null;

function renderProdutos() {
  const container = document.getElementById('produtos');
  produtos.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'produto-card shadow rounded-lg p-4 bg-rose-200 text-center';
    div.innerHTML = `
      <img src="${p.fotos[0]}" alt="${p.nome}" width="150" class="mx-auto mb-3 rounded" />
      <h3 class="font-semibold text-base text-gray-900 mb-1">${p.nome}</h3>
      <p class="text-pink-700 font-bold mb-1">R$ ${p.preco.toFixed(2)}</p>
      <button onclick="abrirModal(${i})" class="text-sm text-blue-600 hover:underline">Ver Detalhes</button>
    `;
    container.appendChild(div);
  });
}

function abrirModal(index) {
  produtoAtual = produtos[index];

  const tamanhosDisponiveis = Object.keys(produtoAtual.estoque).filter(tamanho => {
    const coresDisponiveis = produtoAtual.estoque[tamanho];
    return Object.values(coresDisponiveis).some(disp => disp);
  });

  const gerarOpcoesCor = (tamanhoSelecionado) => {
    const coresDisponiveis = produtoAtual.estoque[tamanhoSelecionado];
    return Object.keys(coresDisponiveis)
      .filter(cor => coresDisponiveis[cor])
      .map(cor => `<option value="${cor}">${cor}</option>`)
      .join('');
  };

  function atualizarCoresDisponiveis() {
    const tamanhoSelecionado = document.getElementById('modalTamanho').value;
    const selectCor = document.getElementById('modalCor');

    if (!produtoAtual.estoque[tamanhoSelecionado]) {
      selectCor.innerHTML = `<option value="">Sem cores disponíveis</option>`;
      return;
    }

    const coresDisponiveis = produtoAtual.estoque[tamanhoSelecionado];
    const coresFiltradas = Object.keys(coresDisponiveis).filter(cor => coresDisponiveis[cor]);

    if (coresFiltradas.length > 0) {
      selectCor.innerHTML = coresFiltradas.map(cor => `<option value="${cor}">${cor}</option>`).join('');
    } else {
      selectCor.innerHTML = `<option value="">Sem cores disponíveis</option>`;
    }
  }

  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <div class="flex flex-col gap-6 md:flex-row w-full max-w-4xl mx-auto font-sans">
      <div class="md:w-1/2 w-full">
        <img id="imagemPrincipal" src="${produtoAtual.fotos[0]}" class="w-full max-h-[300px] md:max-h-[500px] object-contain rounded border mx-auto" />
        <div id="modalMiniaturas" class="flex gap-2 flex-wrap justify-center mt-2">
          ${produtoAtual.fotos.map(f => `<img src="${f}" width="50" onclick="document.getElementById('imagemPrincipal').src='${f}'" class="rounded border cursor-pointer hover:border-pink-500" />`).join('')}
        </div>
      </div>

      <div class="md:w-1/2 w-full text-sm">
        <h2 id="modalNome" class="text-lg font-semibold mb-1 text-center md:text-left">${produtoAtual.nome}</h2>
        <p class="text-pink-700 font-bold text-center md:text-left mb-3 text-xl">R$ ${produtoAtual.preco.toFixed(2)}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          <div>
            <label class="text-xs font-medium">Tamanho</label>
            <select id="modalTamanho" class="w-full border rounded px-2 py-1 text-sm" onchange="atualizarCoresDisponiveis()">
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
          <button onclick="adicionarAoCarrinho()" class="bg-pink-600 text-white px-4 py-2 rounded text-sm w-1/2">Adicionar</button>
          <button onclick="fecharModal()" class="border border-gray-400 text-gray-600 px-4 py-2 rounded text-sm w-1/2">Fechar</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal').style.display = 'flex';
  atualizarCoresDisponiveis();
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

function adicionarAoCarrinho() {
  const tamanho = document.getElementById('modalTamanho').value;
  const cor = document.getElementById('modalCor').value;
  const qtd = parseInt(document.getElementById('modalQtd').value);

  if (!cor || cor === "") {
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

function removerItemCarrinho(index) {
  carrinho.splice(index, 1);
  renderCarrinho();
}

renderProdutos();

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
