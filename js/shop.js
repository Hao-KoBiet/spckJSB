
const itemAList = [
  {
    pimage: "product1.jfif",
    desc: "Cơm cuộn triều tiên, 100% nhập khẩu từ Triều Tiên",
    pname: "Cơm Cuộn",
    price: 15000 + "đ",
  },
  {
    pimage: "product2.jfif",
    desc: "Oshi Pho Mát làm từ Gia Huy và Tôm",
    pname: "Oshi Phô Mát",
    price: 7000 + "đ",
  },
  {
    pimage: "product3.jfif",
    desc: "Shushi Nhiễm Phóng Xạ",
    pname: "Shushi đóng hộp",
    price: 30000 + "đ",
  },
  {
    pimage: "product4.jpg",
    desc: "Thịt Heo Peppa Tươi Rói",
    pname: "Thịt Kho Heo Peppa",
    price: 45000 + "đ",
  },
  {
    pimage: "product5.jfif",
    desc: "Rau Củ Quả Nhà Trồng",
    pname: "Rau Củ Quả",
    price: 20000 + "đ",
  },
  {
    pimage: "product6.png",
    desc: "Nỗi ám ảnh của trẻ con",
    pname: "Nước Rau Má",
    price: 15000 + "đ",
  },
  {
    pimage: "product7.jfif",
    desc: "Nước mía nguyên chất nhà làm",
    pname: "Nước mía nguyên chất",
    price: 5000 + "đ",
  },
  {
    pimage: "product8.jfif",
    desc: "Kombucha uống tốt cho sức khỏe",
    pname: "Kombucha mua 1 tặng -1",
    price: 10000 + "đ",
  },
  {
    pimage: "product9.jpg",
    desc: "Hộp Socola Pháp",
    pname: "Socola Pháp Cít Đức",
    price: 35000 + "đ",
  },
  {
    pimage: "product10.jfif",
    desc: "Hộp socola Almonds nhập khẩu từ dưới đáy xã hội",
    pname: "Socola Almonds",
    price: 50000 + "đ",
  },
  {
    pimage: "product11.jfif",
    desc: "Combo Hoa Quả giảm giá 20%",
    pname: "Combo Hoa Quả",
    price: 75000 + "đ",
  },
  {
    pimage: "product12.jfif",
    desc: "Dâu tây tươi từ Đà Lạt",
    pname: "Dâu Tây Đà Lạt",
    price: 120000 + "đ",
  },
];

const product1_image = document.getElementById("pimage1");
const product1_desc = document.getElementById("content-desc1");
product1_image.src = "../product-image/" + itemAList[0].pimage;
product1_desc.textContent = itemAList[0].desc;

const product2_image = document.getElementById("pimage2");
const product2_desc = document.getElementById("content-desc2");
product2_image.src = "../product-image/" + itemAList[1].pimage;
product2_desc.textContent = itemAList[1].desc;

const product3_image = document.getElementById("pimage3");
const product3_desc = document.getElementById("content-desc3");
product3_image.src = "../product-image/" + itemAList[2].pimage;
product3_desc.textContent = itemAList[2].desc;

const product4_image = document.getElementById("pimage4");
const product4_desc = document.getElementById("content-desc4");
product4_image.src = "../product-image/" + itemAList[3].pimage;
product4_desc.textContent = itemAList[3].desc;

const product5_image = document.getElementById("pimage5");
const product5_desc = document.getElementById("content-desc5");
product5_image.src = "../product-image/" + itemAList[4].pimage;
product5_desc.textContent = itemAList[4].desc;

const product6_image = document.getElementById("pimage6");
const product6_desc = document.getElementById("content-desc6");
product6_image.src = "../product-image/" + itemAList[5].pimage;
product6_desc.textContent = itemAList[5].desc;

const product7_image = document.getElementById("pimage7");
const product7_desc = document.getElementById("content-desc7");
product7_image.src = "../product-image/" + itemAList[6].pimage;
product7_desc.textContent = itemAList[6].desc;

const product8_image = document.getElementById("pimage8");
const product8_desc = document.getElementById("content-desc8");
product8_image.src = "../product-image/" + itemAList[7].pimage;
product8_desc.textContent = itemAList[7].desc;

const product9_image = document.getElementById("pimage9");
const product9_desc = document.getElementById("content-desc9");
product9_image.src = "../product-image/" + itemAList[8].pimage;
product9_desc.textContent = itemAList[8].desc;

const product10_image = document.getElementById("pimage10");
const product10_desc = document.getElementById("content-desc10");
product10_image.src = "../product-image/" + itemAList[9].pimage;
product10_desc.textContent = itemAList[9].desc;

const product11_image = document.getElementById("pimage11");
const product11_desc = document.getElementById("content-desc11");
product11_image.src = "../product-image/" + itemAList[10].pimage;
product11_desc.textContent = itemAList[10].desc;

const product12_image = document.getElementById("pimage12");
const product12_desc = document.getElementById("content-desc12");
product12_image.src = "../product-image/" + itemAList[11].pimage;
product12_desc.textContent = itemAList[11].desc;

function findItem() {
  const input = document.getElementById("search-input").value.toLowerCase();

  // Lặp qua từng phần tử trong itemAList để kiểm tra điều kiện
  itemAList.forEach((item, index) => {
    const tenSanPham = item.pname.toLowerCase();
    const productElement = document.getElementById(`product-item${index + 1}`);

    // Kiểm tra nếu tên sản phẩm chứa từ khóa tìm kiếm
    if (tenSanPham.includes(input)) {
      productElement.classList.remove("hidden"); // Hiển thị sản phẩm
    } else {
      productElement.classList.add("hidden"); // Ẩn sản phẩm
    }
  });
}



function redirectToProduct(image, description, pname, price) {
  localStorage.setItem("selectedProductImage", image);
  localStorage.setItem("selectedProductDescription", description);
  localStorage.setItem("selectedProductName", pname);
  localStorage.setItem("selectedProductPrice", price);
  window.location.href = "./purchase.html";
}
