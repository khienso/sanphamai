// =============================================================
//  Khiên Số – file cấu hình. Chỉ cần sửa file này.
//  Sửa xong, lưu lại và tải lên GitHub.
// =============================================================
window.KHIENSO_CONFIG = {

  // ĐỊA CHỈ CHATBOT (Cloudflare Worker)
  // Để trống "" thì cú An trả lời bằng 15 câu hỏi có sẵn.
  CHAT_ENDPOINT: "https://khienso-chat.thu-anhpham58.workers.dev",

  // VIDEO – mỗi video dùng MỘT trong hai cách:
  //   file: "video/ten-file.mp4"  = video .mp4 đặt trong thư mục video/ trên GitHub
  //   youtube: "https://youtu.be/..." = video trên YouTube
  // poster: ảnh hiện trước khi bấm phát (không bắt buộc).
  // vertical: true = video dọc 9:16;  vertical: false = video ngang 16:9.
  // Video nào không có file và không có youtube sẽ tự ẩn.
  VIDEOS: [
    { title: "Dừng – Chặn – Lưu – Kể", desc: "Bốn bước tự bảo vệ khi gặp tin nhắn đáng ngờ.", file: "video/video1.mp4", poster: "video/video1.jpg", youtube: "", vertical: true },
    { title: "Nhận ra cờ đỏ", desc: "Người lạ hỏi chuyện riêng tư, khen ngợi bất thường: dừng lại và kể với người lớn.", file: "video/video2.mp4", poster: "video/video2.jpg", youtube: "", vertical: true }
  ]

};
