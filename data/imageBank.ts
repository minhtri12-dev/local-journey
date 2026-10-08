// data/imageBank.ts
// Kho ảnh Unsplash chuẩn xác theo từng địa danh (Cam kết không dùng ảnh AI/LoremFlickr)

export const IMAGE_BANK: Record<string, { cover: string, food: string, culture: string, nature: string }> = {
  "Thành phố Hà Nội": {
    cover: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1000&auto=format&fit=crop", // Phố cổ
    food: "https://images.unsplash.com/photo-1626082895617-2c63df9f9fb7?q=80&w=1000&auto=format&fit=crop", // Phở
    culture: "https://images.unsplash.com/photo-1540306130452-9bc505f1595f?q=80&w=1000&auto=format&fit=crop", // Chùa
    nature: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop" // Hồ Tây sương
  },
  "Tỉnh Quảng Nam (Hội An)": {
    cover: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1000&auto=format&fit=crop", // Lồng đèn đỏ
    food: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb431?q=80&w=1000&auto=format&fit=crop", // Ẩm thực đường phố
    culture: "https://images.unsplash.com/photo-1605648873328-9d8a14cb432f?q=80&w=1000&auto=format&fit=crop", // Chùa Cầu
    nature: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1000&auto=format&fit=crop" // Sông Thu Bồn
  },
  "Thành phố Đà Nẵng": {
    cover: "https://images.unsplash.com/photo-1559508551-44bff1de756b?q=80&w=1000&auto=format&fit=crop", // Cầu Rồng / Cầu Vàng
    food: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=1000&auto=format&fit=crop", // Hải sản
    culture: "https://images.unsplash.com/photo-1580975607317-10ceec41db52?q=80&w=1000&auto=format&fit=crop", // Linh Ứng
    nature: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1000&auto=format&fit=crop" // Bãi biển
  },
  "Tỉnh Lâm Đồng (Đà Lạt)": {
    cover: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000&auto=format&fit=crop", // Rừng thông
    food: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=1000&auto=format&fit=crop", // Cà phê
    culture: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?q=80&w=1000&auto=format&fit=crop", // Biệt thự Pháp
    nature: "https://images.unsplash.com/photo-1518461582239-0158aeb1d7f4?q=80&w=1000&auto=format&fit=crop" // Hồ Tuyền Lâm
  }
}

// Hàm fallback ảnh chung cho các tỉnh miền Núi, Biển, Đồng bằng nếu chưa có ảnh riêng
export const getFallbackImages = (provinceName: string) => {
  if (IMAGE_BANK[provinceName]) return IMAGE_BANK[provinceName];
  
  // Thuật toán nhận diện miền để trả ảnh chuẩn nếu tỉnh đó chưa có trong list trên
  if (provinceName.includes('Hà Giang') || provinceName.includes('Lào Cai') || provinceName.includes('Cao nguyên')) {
    return {
      cover: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000",
      food: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000",
      culture: "https://images.unsplash.com/photo-1540306130452-9bc505f1595f?q=80&w=1000",
      nature: "https://images.unsplash.com/photo-1513333420772-7b64cd1bf314?q=80&w=1000"
    }
  }
  
  // Mặc định trả ảnh Biển/Nghỉ dưỡng (an toàn cho miền Trung/Nam)
  return {
    cover: "https://images.unsplash.com/photo-1559508551-44bff1de756b?q=80&w=1000",
    food: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=1000",
    culture: "https://images.unsplash.com/photo-1605648873328-9d8a14cb432f?q=80&w=1000",
    nature: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1000"
  }
}