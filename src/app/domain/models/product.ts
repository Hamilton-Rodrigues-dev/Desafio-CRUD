export interface Product {
  id: number;
  nome: string;
  descricao: string;
  img?: any;
  preco: number;
  estoque?: number;
  categoria?: string;
  ativo?: boolean;
}

export const productMock: Product[] = [
  {
    id: 1,
    nome: 'Mouse Gamer RGB',
    descricao: 'Mouse com iluminação RGB e 6 botões programáveis',
    img: 'https://images5.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-10000dpi-7-botoes-preto-m711-v2_1742821619_g.jpg',
    preco: 159.9,
    estoque: 12,
    categoria: 'Periféricos',
    ativo: true,
  },
  {
    id: 2,
    nome: 'Teclado Mecânico ABNT2',
    descricao: 'Teclado mecânico com layout ABNT2 e switches blue',
    img: 'https://images9.kabum.com.br/produtos/fotos/447929/teclado-mecanico-gamer-logitech-g-g413-se-usb-anti-ghosting-abnt2-preto-920-010554_1710951676_g.jpg',
    preco: 299.99,
    estoque: 8,
    categoria: 'Periféricos',
    ativo: true,
  },
  {
    id: 3,
    nome: 'Monitor 24" Full HD',
    descricao: 'Monitor LED 24 polegadas com resolução Full HD e HDMI',
    img: 'https://images8.kabum.com.br/produtos/fotos/sync_mirakl/422348/large/Monitor-Samsung-T450-24-Full-HD-75Hz-5Ms-HDMI-USB-IPS-Freesync-Ajuste-de-ngulo-VESA-Preto-LF24T450FQLMZD_1744746632.jpg',
    preco: 799.0,
    estoque: 5,
    categoria: 'Monitores',
    ativo: true,
  },
  {
    id: 4,
    nome: 'Cadeira Gamer Reclinável',
    descricao: 'Cadeira ergonômica com apoio lombar e braços ajustáveis',
    img: 'https://images.kabum.com.br/produtos/fotos/471925/cadeira-gamer-kbm-gaming-tempest-cg600-preta-com-almofadas-descanso-para-pernas-retratil-reclinavel-kgcg600pt_1728407130_m.jpg',
    preco: 1250.0,
    estoque: 3,
    categoria: 'Mobiliário',
    ativo: true,
  },
  {
    id: 5,
    nome: 'Webcam Full HD',
    descricao: 'Webcam com microfone embutido e resolução 1080p',
    preco: 189.9,
    estoque: 15,
    categoria: 'Acessórios',
    ativo: true,
  },
  {
    id: 6,
    nome: 'Headset Gamer 7.1',
    descricao: 'Headset com som surround 7.1 e cancelamento de ruído',
    img: 'https://images.kabum.com.br/produtos/fotos/103431/webcam-logitech-c920s-pro-full-hd-1080p-30-fps-audio-estereo-com-microfones-960-001257_1613999712_m.jpg',
    preco: 349.9,
    estoque: 10,
    categoria: 'Áudio',
    ativo: true,
  },
  {
    id: 7,
    nome: 'Notebook Intel i5 8GB',
    descricao: 'Notebook com processador Intel i5, 8GB RAM, SSD 256GB',
    img: 'https://images.kabum.com.br/produtos/fotos/564916/notebook-gamer-acer-nitro-v15-intel-core-i5-13420h-8gb-ram-geforce-rtx-3050-ssd-512gb-15-6-fhd-ips-144hz-windows-11-preto-anv15-51-58az_1715197002_m.jpg',
    preco: 3299.0,
    estoque: 7,
    categoria: 'Computadores',
    ativo: true,
  },
  {
    id: 8,
    nome: 'HD Externo 1TB',
    descricao: 'Disco rígido externo USB 3.0 com 1TB de capacidade',
    img: 'https://images.kabum.com.br/produtos/fotos/108060/hd-wd-externo-portatil-my-passport-1tb-usb-3-0-wdbyvg0010bbk-wesn-_hd-wd-externo-portatil-my-passport-1tb-usb-3-0-wdbyvg0010bbk-wesn-_1573647531_m.jpg',
    preco: 459.9,
    estoque: 20,
    categoria: 'Armazenamento',
    ativo: true,
  },
  {
    id: 9,
    nome: 'Mousepad XL',
    descricao: 'Mousepad de tamanho extra grande com base antiderrapante',
    img: 'https://images.kabum.com.br/produtos/fotos/371591/mousepad-hyperx-pulsefire-extra-grande-hmpm1-xl-4z7x5aa_1659548789_m.jpg',
    preco: 59.9,
    estoque: 25,
    categoria: 'Acessórios',
    ativo: true,
  },
  {
    id: 10,
    nome: 'Fonte 600W 80 Plus',
    descricao: 'Fonte de alimentação 600W com certificação 80 Plus Bronze',
    img: 'https://images.kabum.com.br/produtos/fotos/368437/fonte-gamemax-gs600-600w-80-plus-white-pfc-ativo-com-cabo-preto-gs600_1716910931_m.jpg',
    preco: 289.0,
    estoque: 9,
    categoria: 'Componentes',
    ativo: true,
  },
];
