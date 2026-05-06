import product1 from "./assets/img/product/iphone-11.jpg";
import product2 from "./assets/img/product/airpods.jpg";
import product3 from "./assets/img/product/ultrabook.jpg";
import product4 from "./assets/img/product/smartwatch.jpg";
import product5 from "./assets/img/product/gamepad.jpg";
import product6 from "./assets/img/product/camera.jpg";

export const products = [
  {
    id: 1,
    name: "ProMax Ultra Smartphone",
    slug: "promax-ultra-smartphone",
    brand: "TechVault",
    price: 12999000,
    original_price: 14999000,
    discount: 13,
    rating: 4.8,
    reviews: 2341,
    label: "Best Seller",
    image: product1,
    description:
      "iPhone 15 Pro hadir sebagai smartphone premium dengan desain elegan berbahan titanium yang ringan namun kokoh. Dibuat untuk memberikan performa maksimal sekaligus tampilan modern yang mewah.",
    specification: [
      "Layar AMOLED 6.7",
      "12GB RAM",
      "5000mAh Battery",
      "256GB Storage",
      "iOS 15",
    ],
    category: "smartphone",
  },
  {
    id: 2,
    name: "AirPods Pro Max",
    slug: "airpods-pro-max",
    brand: "SoundWave",
    price: 3499000,
    rating: 4.7,
    reviews: 1823,
    label: "New",
    image: product2,
    description:
      "Nikmati musik tanpa batas dengan AirPods. Earphone nirkabel dari Apple ini menghadirkan kualitas suara jernih, koneksi instan, dan desain ringan yang nyaman dipakai sepanjang hari.",
    category: "audio",
  },
  {
    id: 3,
    name: "UltraBook X1 Carbon",
    slug: "ultrabook-x1-carbon",
    brand: "NexGen",
    price: 18999000,
    original_price: 21999000,
    discount: 14,
    rating: 4.9,
    reviews: 987,
    label: "Premium",
    image: product3,
    description:
      "Bekerja lebih produktif dengan Ultrabook modern. Laptop tipis dan ringan ini dirancang untuk mobilitas tinggi tanpa mengorbankan performa. Cocok untuk pelajar, profesional, maupun kreator konten yang membutuhkan perangkat stylish sekaligus bertenaga.",
    category: "laptop",
  },
  {
    id: 4,
    name: "Smart Watch Series 9",
    slug: "smart-watch-series-9",
    brand: "TechVault",
    price: 5999000,
    rating: 4.6,
    reviews: 3102,
    image: product4,
    description:
      "Smartwatch terbaru hadir untuk mendukung aktivitasmu setiap hari. Dengan desain elegan dan fitur canggih, perangkat ini bukan sekadar jam tangan, melainkan asisten pribadi yang selalu siap menemani.",
    category: "smartwatch",
  },
  {
    id: 5,
    name: "Gaming Controller X",
    slug: "gaming-controller-x",
    brand: "PlayGear",
    price: 899000,
    original_price: 1099000,
    discount: 19,
    label: "Hot",
    image: product5,
    description:
      "Rasakan pengalaman gaming yang lebih nyata dengan Gamepad terbaru. Dirancang dengan ergonomis dan responsivitas tinggi, gamepad ini memberikan kenyamanan sekaligus presisi dalam setiap permainan.",
  },
  {
    id: 6,
    name: "Retro Camera Pro",
    slug: "retro-camera-pro",
    brand: "Ct",
    price: 4599000,
    rating: 4.5,
    reviews: 876,
    image: product6,
    description:
      "Kembalikan nuansa fotografi masa lalu dengan Retro Camera. Dirancang dengan gaya vintage yang elegan, kamera ini menghadirkan perpaduan antara estetika klasik dan teknologi modern. Cocok untuk pecinta fotografi, kolektor, maupun mereka yang ingin tampil beda.",
  },
];
