// =============================================================
//  Khiên Số – file cấu hình. Chỉ cần sửa file này.
//  Sửa xong, lưu lại và tải lên GitHub (Bước 2 và Bước 5 trong hướng dẫn).
// =============================================================
window.KHIENSO_CONFIG = {

  // ĐỊA CHỈ CHATBOT (Bước 5)
  // Dán địa chỉ Cloudflare Worker vào giữa hai dấu ngoặc kép, ví dụ:
  //   CHAT_ENDPOINT: "https://khienso-chat.tenban.workers.dev",
  // Để trống "" thì cú An trả lời bằng 15 câu hỏi có sẵn.
  CHAT_ENDPOINT: "",

  // VIDEO (Bước 2)
  // Dán link YouTube vào youtube: "...". Video nào chưa có link sẽ tự ẩn.
  // vertical: true  = video dọc 9:16;  vertical: false = video ngang 16:9.
  VIDEOS: [
    { title: "Dừng – Chặn – Lưu – Kể", desc: "Bốn bước tự bảo vệ khi gặp tin nhắn đáng ngờ.", youtube: "", vertical: true },
    { title: "Video 2", desc: "", youtube: "", vertical: true }
  ]

};
